/**
 * This function is called when the actor sheet is rendered. 
 * It is responsible for injecting the custom circles tab UI into the actor sheet.
 * 
 * @param {Application} actorSheet - The Application instance being rendered.
 * @param {jQuery} html - The inner HTML of the document that will be displayed and may be modified.
 */
async function injectCirclesTabUiIntoActorSheet(actorSheet, html) {
    if (!game.settings.get(ManaCirclesModule.ID, "clientShowCircles")) {
        return;
    }

    const actorId = actorSheet.object._id; // The actor ID is the same as the actor document ID.

    // Strip the active nav and tab classes from the last active tab if was not the circles tab.
    const circlesIsActiveTab = stripActiveTab(actorId, html);
    
    // Inject the custom tab button after the spellbook tab button.
    // The data defines whether the custom tab button should be active or not.
    const customTabButtonData = {navLinkState: circlesIsActiveTab ? "item active" : "item"};
    const customTabButtonRender = await renderTemplate(ManaCirclesModule.TEMPLATES.CUSTOM_TAB_BUTTON, customTabButtonData);
    const customTabButtonElem = htmlToElement(customTabButtonRender);

    // Add an event listener to the custom tab button to set the last active tab flag to "circles".
    const spellbookTabButtonElem = html[0].querySelector(".tidy5e-navigation .item[data-tab='spellbook']");
    spellbookTabButtonElem.after(customTabButtonElem);
    customTabButtonElem.addEventListener("click", function (event) { 
        ManaFlagUtils.setActorFlag(actorId, ManaCirclesModule.ID, ManaCirclesModule.FLAGS.LAST_ACTIVE_TAB, "circles");
    });

    // Inject the custom tab UI after the spellbook tab.
    const circleDefs = CircleDefinitions.categoriesAndCirclesWithoutSpecials();
    const actorAffinities = AffinitySet.getAffinitySet(actorId);

    let customTabUiData = mergeAffinitiesAndCircles(circleDefs, actorAffinities);
    customTabUiData.outerDivClass = circlesIsActiveTab ? "tab circles active" : "tab circles";
    const customTabUiRender = await renderTemplate(ManaCirclesModule.TEMPLATES.CUSTOM_TAB_UI, customTabUiData);
    const customTabUiElem = htmlToElement(customTabUiRender);

    const spellbookTabElem = html[0].querySelector(".sheet-body .spellbook");
    spellbookTabElem.after(customTabUiElem);
    
    // Iterate over the custom tab UI data Categories and add the appropriate event listeners.
    for (category of customTabUiData) {

        for (circle of category.circles) {
            const circleId = circle.id;
            
            const circleNaturalIconElem = html[0].querySelector(`#affinity-${circleId}-natural`);
            circleNaturalIconElem.addEventListener("click", function (event) {
                updateAffinitySet(actorId, circleId, Affinity.ORIGIN.NATURAL)
            });

            const circleFocusIconElem = html[0].querySelector(`#affinity-${circleId}-focus`);
            circleFocusIconElem.addEventListener("click", function (event) {
                console.log("focus clicked");
                updateAffinitySet(actorId, circleId, Affinity.ORIGIN.FOCUS)
            });

            const circleGearIconElem = html[0].querySelector(`#affinity-${circleId}-gear`);
            circleGearIconElem.addEventListener("click", function (event) {
                updateAffinitySet(actorId, circleId, Affinity.ORIGIN.GEAR)
            });

            const circleOtherIconElem = html[0].querySelector(`#affinity-${circleId}-other`);
            circleOtherIconElem.addEventListener("click", function (event) {
                updateAffinitySet(actorId, circleId, Affinity.ORIGIN.OTHER)
            });
        }
    }
}

/**
 * This function is called when the actor sheet is rendered. 
 * It is responsible for stripping the active tab from the actor sheet if the last active tab was the circles tab.
 * This is necessary to integrate with the tidy5e module.
 * @param {string} actorId  - The ID of the actor. 
 * @param {*} html - The inner HTML of the document that will be displayed and may be modified.
 * @returns {boolean} - Returns true if the circles tab was the last active tab, otherwise false.q
 */
function stripActiveTab(actorId, html) {
    const lastActiveTab = ManaFlagUtils.getActorFlag(actorId, ManaCirclesModule.ID, ManaCirclesModule.FLAGS.LAST_ACTIVE_TAB);
    if (lastActiveTab !== "circles") {
        // The last active tab was not the circles tab, so we don't need to strip the active tab.
        return false;
    } else { 
        // The last active tab was the circles tab, so we need to strip the active tab.
        // This strips the active class from the tidy5e nav element that is active.
        const activeNavElem = html[0].querySelector(".tidy5e-navigation .item.active");
        activeNavElem.classList.remove("active");

        // This strips the active class from the tidy5e tab element that is active.
        const activeTabElem = html[0].querySelector(".sheet-body .tab.active");
        activeTabElem.classList.remove("active");

        return true;
    }
}

/**
 * This function merges the circle definitions with the actor's affinities.
 * In doing so, it changes the structure of the object to improve the richness of the data.
 * 
 * The original structure is: [{category: "category name", [Circle]}]
 * The new structure is: [{category: "category name", [circleMergedObject]}]
 * 
 * The circleMergedObject is a modified Circle object with an additional property "affinities".
 * The affinities property is an object with four boolean properties: natural, focus, gear, other.
 * 
 * @param {*} circleDefs 
 * @param {*} affinities 
 * @returns 
 */
function mergeAffinitiesAndCircles(circleDefs, affinities) {
    let mergedList = []; // The merged list of categories and affinities.

    // This approach is a bit inefficient, but should maintain the order of the circles,
    // and since the length of categories and circles is small, it should be fine.

    // We iterate over the categories to match them with the affinities.
    for (category of circleDefs) {
        let mergedCategory = { // The merged category and affinities object.
            category: category.category,
            circles: []
        };

        for (circle of category.circles) {
            // For each circle we transform it into a merged circle object and add it to the merged category.
            let mergedCircleObject = mergeCircleAndAffinity(circle, affinities);
            mergedCategory.circles.push(mergedCircleObject);
        }

        mergedList.push(mergedCategory);
    }
    return mergedList;
}

/**
 * This function merges a circle object with the actor's affinities.
 * In doing so, it changes the structure of the object to add data on the actor's affinities per circle.
 * This changes the structure, by adding a "affinities" property to the circle object.
 * The affinities property is an object with four boolean properties: natural, focus, gear, other.
 * 
 * @param {Circle} circle 
 * @param {*} affinities 
 * @returns 
 */
function mergeCircleAndAffinity(circle, affinities) {
    let mergedCircleObject = { // The merged circle object.
        id: circle.id,
        category: circle.category,
        type: circle.type,
        affinities: {
            natural: false,
            focus: false,
            gear: false,
            other: false
        }
    }

    if (affinities === undefined) {
        return mergedCircleObject; // If there are no affinities, we return the merged circle object (with all affinities set to false)
    }
    
    // We iterate over the affinities to match them with the circle.
    for (affinity of affinities) {
        // If the affinity matches the circle, we add the appropriate property to the merged circle object.
        if (circle.id === affinity.circle.id) {
            switch (affinity.origin) {
                case Affinity.ORIGIN.NATURAL:
                    mergedCircleObject.affinities.natural = true;
                    break;
                case Affinity.ORIGIN.FOCUS:
                    mergedCircleObject.affinities.focus = true;
                    break;
                case Affinity.ORIGIN.GEAR:
                    mergedCircleObject.affinities.gear = true;
                    break;
                case Affinity.ORIGIN.OTHER:
                    mergedCircleObject.affinities.other = true;
                    break;
            }
        }
    }

    return mergedCircleObject;
}