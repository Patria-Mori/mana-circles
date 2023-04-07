/**
 * The Affinity class represents an actor's affinity to a specific circle.
 * 
 * It has a circle and an origin.
 * 
 * @class Affinity
 */
class Affinity {

    circle = null;  // The circle of the affinity
    origin = null;  // The origin of the affinity, e.g. "Natural"/"Foci"/"Item"/"Gear"/etc.

    /**
     * Creates an instance of Affinity.
     * @param {Circle} circle The circle the actor has affinity for. 
     * @param {ORIGIN} origin 
     */
    constructor(circle, origin) {
        this.circle = circle;
        this.origin = origin;
    }

    // Using a static object to define the origin of the affinity may not be the best approach when considering modifiability,
    // but it makes it easier to create specific rules for each origin, which is intended down the line.
    static ORIGIN = {
        NATURAL: "Natural", // A natural affinity gained through some means, like a cantrip, feature, casting the spell a lot of times, etc.
        FOCUS: "Focus",     // An affinity gained through a focus, like a wand, staff, etc.
        GEAR: "Gear",       // An affinity gained through mage gear, typically arcanist gear.
        OTHER: "Other"      // An affinity gained through some other undefined means, the default origin if no other fits.
    }

}