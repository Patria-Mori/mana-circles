// Defines the "rules" for the Spell Model, i.e. what constitutes a valid spell.
const validCategoryOrder = [
    Circle.CATEGORY.ELEMENT,    // Lvl 0 (Cantrip)
    Circle.CATEGORY.GOAL,       // Lvl 0 (Cantrip)
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