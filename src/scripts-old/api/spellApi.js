/**
 * The Spell API can be used to validate spells and calculate the cost of casting them.
 * It mainly just wraps the SpellEngine class.
 */
class SpellApi {

    /**
     * This method takes in a spell and determines the cost of casting it.
     * @param {Spell} spell The spell to determine the cost of.
     * @param {string} actorId The id of the actor that is casting the spell.
     * @returns {number} The cost of casting the spell.
     */
    static calculateSpellCost(spell, actorId) {
        if (!SpellEngine.validateSpell(spell)) {
            ManaCirclesModule.log(false, "SpellApi.calculateSpellCost: Spell:", spell, ", cast by actorId:", actorId, "is invalid");
        }

        const affinitySet = AffinitySet.getAffinitySet(actorId);
        return SpellEngine.getSpellCost(spell, affinitySet);
    }

    /**
     * This method calculates the maximum cost of casting a spell, 
     * and then subtracts the cost of casting the spell from the actor's mana pool.
     * @param {Spell} spell The spell to determine the cost of.
     * @param {string} actorId The id of the actor that is casting the spell.
     */
    static castSpell(spell, actorId) {
        const spellCost = this.calculateSpellCost(spell, actorId);
        // Check that the actor has enough mana to cast the spell.
        if(ManaStateApi.getMana(actorId) < spellCost) {
            ManaCirclesModule.log(false, "SpellApi.castSpell: Actor:", actorId, "does not have enough mana to cast spell:", spell);
        }

        // Subtract the cost of casting the spell from the actor's mana pool.
        ManaStateApi.addManaSafe(actorId, -spellCost, false);
    } 

}