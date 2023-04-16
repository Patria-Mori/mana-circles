class SpellEngine {

    /**
     * This method takes in a spell and determines the cost of casting it.
     * @param {Spell} spell The spell to determine the cost of.
     * @param {AffinitySet} affinitySet The affinity set to use when determining the cost of the spell.
     * @returns {number} The cost of casting the spell.
     */
    static getSpellCost(spell, affinitySet) {
        const maxCost = spellMaxCost(spell.castLvl);
        const circleCost = spellCircleCost(spell.castLvl);

        // Find the number of affinities that are used in the spell.
        let numApplicableAffinities = 0;
        for (let circle of spell.circles) {
            for (let affinity of affinitySet.affinities) {
                if (circle.id === affinity.circle.id) {
                    numApplicableAffinities++;
                    break;
                }
            }
        }

        return maxCost - (circleCost * numApplicableAffinities);
    }

    /**
     * This method takes in a spell and determines the maximum cost of casting it.
     * @param {Spell} spell The spell to determine the maximum cost of.
     * @returns {number} The maximum cost of casting the spell. 
     */
    static getSpellMaxCost(spell) {
        return spellMaxCost(spell.castLvl);
    }

    /**
     * Validatesthat a spell complies with the rules of the spell engine.
     * @param {Spell} spell The spell to validate.
     * @returns {boolean} True if the spell is valid, false otherwise. 
     */
    static validateSpell(spell) {
        // Check that the spell has the correct number of circles.
        // We use the baseLvl because "upcasting circles" are not counted in the number of circles.
        if (spell.circles.length !== circlesInSpell(spell.baseLvl)) {
            return false;
        }

        // Check that the spell has the correct circle categories in the correct order.
        for (let i = 0; i < spell.circles.length; i++) {
            if (spell.circles[i].category !== validCategoryOrder[i]) {
                return false;
            }
        }

        // Check that the spell does not have any duplicate circle types.
        if (!allowRepeatCircleTypes) {
            let circleTypes = [];
            for (let circle of spell.circles) {
                if (circleTypes.includes(circle.type)) {
                    return false;
                }

                // Goal circles are always unique, and do not count towards the repeat check.
                if (circle.category !== Circle.CATEGORY.GOAL) {
                    circleTypes.push(circle.type);
                }
            }
           
        }

        return true;
    }

}