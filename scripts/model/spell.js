/**
 * The Spell class is an abstract class that represents a spell in the mana system.
 * It does inherit some properties from the native D&D 5e spell, but mostly it builds on top of it.
 * A spell is definied as a set of circles and some other meta properties.
 * 
 * Notably a spell represents a specific casting of a spell, including the level the spell was cast at.
 * The reason for this is because the cost of casting the spell is dependent on several factors, 
 * with casting level being the most important one.
 * 
 * @class Spell
 */
class Spell {

    // Cantrips are treated as having a level of 0, so the base level and casting level is 0.
    baseLvl = 0;        // The base level of the spell, i.e. the level the spell is cast at.
    castLvl = 0;        // The casting level of the spell, i.e. the level the spell is cast at.
    circles = [];       // The circles of the spell, i.e. the circles the spell consists of.
    isReaction = false; // Whether the spell is cast using a reaction or not.

    /**
     * Creates an instance of Spell.
     * @param {number} baseLvl      The base level of the spell, i.e. the level the spell is cast at.
     * @param {number} castLvl      The casting level of the spell, i.e. the level the spell is cast at.
     * @param {Circle[]} circles    The circles of the spell, i.e. the circles the spell consists of.
     * @param {boolean} isReaction  Whether the spell is cast using a reaction or not.
     */
    constructor(baseLvl, castLvl, circles, isReaction) {
        this.baseLvl = baseLvl;
        this.castLvl = castLvl;
        this.circles = circles;
        this.isReaction = isReaction;
    }

    // Getters
    get baseLvl() {
        return this.baseLvl;
    }

    get castLvl() {
        return this.castLvl;
    }

    get circles() {
        return this.circles;
    }

    get isReaction() {
        return this.isReaction;
    }

}