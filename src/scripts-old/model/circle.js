/**
 * The Circle class is a model class that is a abstract representation of a Circle in a spell.
 * 
 * It contains a category and a type.
 * 
 * @class Circle
 */
class Circle {

    id = null;          // The id of the circle, which should be unique and static
    category = null;    // The category of the circle
    type = null;        // The type of the circle, e.g. Light, Fire, Water, Earth, Air, etc.

    /**
     * Creates an instance of Circle.
     * @param {number} id                   The id of the circle, which should be unique and static
     * @param {CIRCLE_CATEGORY} category    The category of the circle
     * @param {string} type                 The type of the circle, e.g. Light, Fire, Water, Earth, Air, etc.
     */
    constructor(id, category, type) {
        this.id = id;
        this.category = category;
        this.type = type;
    }

    static CATEGORY = {
        ELEMENT: "Element",
        MEDIUM: "Medium",
        SPEED: "Speed",
        DURATION: "Duration",
        GRAVITY: "Gravity",
        GOAL: "Goal",
        SPELL: "Spell"
    }

    /**
     * Getter for the category of the circle.
     */
    get category() {
        return this.category;
    }

    /**
     * Getter for the type of the circle.
     */
    get type() {
        return this.type;
    }

    /**
     * Can be used to check if the circle is a special circle.
     * Special circles have the category "Goal" or "Spell" and do not have a type, 
     * i.e. they are unique. 
     * 
     * @returns {boolean} True if the circle is a special circle, false otherwise.
     */
    isSpecial() {
        return this.category == this.CATEGORY.GOAL || this.category == this.CATEGORY.SPELL;
    }

    /**
     * Compares two circles by their id.
     * 
     * @param {Circle} other The other circle to compare to. 
     * @returns {boolean} True if the id of the other circle is equal to the id of this circle, false otherwise.
     */
    equals(other) {
        return this.id == other.id;
    }

    /**
     * Compares two circles by their id, category and type.
     * If deepEquals is false but equals is true, the circles are the same, but the category or type is different.
     * This likely means that that the circle is the same, but that one of the circles is older and needs to be updated.
     * 
     * @param {Circle} other The other circle to compare to. 
     * @returns {boolean} True if the id, category and type of the other circle is equal to the id, category and type of this circle, false otherwise.
     */
    deepEquals(other) {
        return this.id == other.id && this.category == other.category && this.type == other.type;
    }

}
