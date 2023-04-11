/**
 * A hook event that fires as Foundry is initializing, right before any initialization tasks have begun.
 */
Hooks.on("init", async function () {
    preloadHandlebarsTemplates();
});

/**
 * A hook event that fires whenever an Application is rendered. 
 * Substitute the Application name in the hook event to target a specific Application type, for example "renderMyApplication". 
 * Each Application class in the inheritance chain will also fire this hook, i.e. "renderApplication" will also fire. 
 * The hook provides the pending application HTML which will be added to the DOM. 
 * Hooked functions may modify that HTML or attach interactive listeners to it.
 * 
 * @param {Application} actorSheet - The Application instance being rendered.
 * @param {jQuery} html - The inner HTML of the document that will be displayed and may be modified.
 * @param {object} data - The object of data used when rendering the application
 */
Hooks.on("renderActorSheet", async function (actorSheet, html, data) {
    
    // Inject the custom tab button after the spellbook tab.
    // TODO: The template needs to be able to retain the "active tab" state.
    const customTabButtonRender = await renderTemplate(ManaCirclesModule.TEMPLATES.CUSTOM_TAB_BUTTON);
    const customTabButtonElem = htmlToElement(customTabButtonRender);

    const spellbookTabButtonElem = html[0].querySelector(".tidy5e-navigation .item[data-tab='spellbook']");
    spellbookTabButtonElem.after(customTabButtonElem);

    // Inject the custom tab UI after the spellbook tab.
    const customTabUiData = CircleDefinitions.categoriesAndCircles();
    const customTabUiRender = await renderTemplate(ManaCirclesModule.TEMPLATES.CUSTOM_TAB_UI, customTabUiData);
    const customTabUiElem = htmlToElement(customTabUiRender);

    const spellbookTabElem = html[0].querySelector(".sheet-body .spellbook");
    spellbookTabElem.after(customTabUiElem);
    //ManaCirclesModule.log(true, customTabUiElem);

    //const attributeLeftPaneDiv = html[0].querySelectorAll(".attributes .left-pane");
    //const attributeTraitsDiv = html[0].querySelectorAll(".attributes .traits");
    //attributeLeftPaneDiv[0].insertBefore(customTabUiHtml, attributeTraitsDiv[0]);

});

/**
 * Utility function to convert a string of HTML code to an element.
 * @param {string} html 
 * @returns 
 */
function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}

/**
 * Preloads and caches the handlebars templates used by the module. 
 * @returns Promise that resolves once the templates are loaded.
 */
async function preloadHandlebarsTemplates() {
    const templatePaths = [
        ManaCirclesModule.TEMPLATES.ATTRIBUTE_PANE_UI,
        ManaCirclesModule.TEMPLATES.CUSTOM_TAB_BUTTON,
        ManaCirclesModule.TEMPLATES.CUSTOM_TAB_UI
    ];

    return loadTemplates(templatePaths);
}