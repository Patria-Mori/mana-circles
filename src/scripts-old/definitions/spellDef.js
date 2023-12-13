// Defines the "rules" for the Spell Model, i.e. what constitutes a valid spell.
// The ValidCategoryOrder array defines the order in which circle categories are allowed to appear in a spell.
const validCategoryOrder = [
    Circle.CATEGORY.ELEMENT,    // Lvl 0 (Cantrip)
    Circle.CATEGORY.GOAL,       // Lvl 1 
    Circle.CATEGORY.MEDIUM,     // Lvl 1
    Circle.CATEGORY.SPEED,      // Lvl 2
    Circle.CATEGORY.DURATION,   // Lvl 3
    Circle.CATEGORY.GRAVITY,    // Lvl 4
    Circle.CATEGORY.GOAL,       // Lvl 5
    Circle.CATEGORY.ELEMENT,    // Lvl 6
    Circle.CATEGORY.MEDIUM      // Lvl 7
];

// Defines if a spell can have multiple circles of the same type. Goal and Spell circles are always unique.
const allowRepeatCircleTypes = false;

// This rule enforces that spells cast using a reaction action have "full" cost, e.g. the cost is not reduced by using affinities.
const reactionCastingFullCost = true;

// The constants below are used to define the rules for the spell engine.
// SpellMaxCost is the maximum cost of casting a spell, and only depends on the casting level of the spell.
const spellMaxCost = (castLvl) => (circlesInSpell(castLvl) + 1) * castLvl;

// CirclesInSpell is the number of circles in a spell at a given casting level.
const circlesInSpell = (castLvl) => castLvl + 2;

// SpellCircleCost determines how much each circle contributes to the cost of casting a spell.
const spellCircleCost = (castLvl) => castLvl; // Technically it should be (circlesInSpell + 1)/spellMaxCost, but this is a simpler formula.