// Description: Defines the Circle class and all the circles in the module.
// Circles can be modified, but the id should not be changed, as it is used to identify the circle.

// Element Circles
const lightCircle       = new Circle(1,  Circle.CATEGORY.ELEMENT, "Light");
const darkCircle        = new Circle(2,  Circle.CATEGORY.ELEMENT, "Dark");
const orderCircle       = new Circle(3,  Circle.CATEGORY.ELEMENT, "Order");
const chaosCircle       = new Circle(4,  Circle.CATEGORY.ELEMENT, "Chaos");
const lifeCircle        = new Circle(5,  Circle.CATEGORY.ELEMENT, "Life");
const deathCircle       = new Circle(6,  Circle.CATEGORY.ELEMENT, "Death");
const fireCircle        = new Circle(7,  Circle.CATEGORY.ELEMENT, "Fire");
const earthCircle       = new Circle(8,  Circle.CATEGORY.ELEMENT, "Earth");
const waterCircle       = new Circle(9,  Circle.CATEGORY.ELEMENT, "Water");
const airCircle         = new Circle(10, Circle.CATEGORY.ELEMENT, "Air");
const forceCircle       = new Circle(11, Circle.CATEGORY.ELEMENT, "Force");
const nullCircle        = new Circle(12, Circle.CATEGORY.ELEMENT, "Null");

// Medium Circles
const thoughtCircle     = new Circle(13, Circle.CATEGORY.MEDIUM, "Thought");
const soundCircle       = new Circle(14, Circle.CATEGORY.MEDIUM, "Sound");
const selfCircle        = new Circle(15, Circle.CATEGORY.MEDIUM, "Self");
const projectileCircle  = new Circle(16, Circle.CATEGORY.MEDIUM, "Projectile");
const hitCircle         = new Circle(17, Circle.CATEGORY.MEDIUM, "Hit");
const allyCircle        = new Circle(18, Circle.CATEGORY.MEDIUM, "Ally");
const auraCircle        = new Circle(19, Circle.CATEGORY.MEDIUM, "Aura");
const enemyCircle       = new Circle(20, Circle.CATEGORY.MEDIUM, "Enemy");
const areaCircle        = new Circle(21, Circle.CATEGORY.MEDIUM, "Area");
const itemCircle        = new Circle(22, Circle.CATEGORY.MEDIUM, "Item");
const summonCircle      = new Circle(23, Circle.CATEGORY.MEDIUM, "Summon");
const othersCircle      = new Circle(24, Circle.CATEGORY.MEDIUM, "Others");

// Speed Circles
const nowCircle         = new Circle(25, Circle.CATEGORY.SPEED, "Now");
const tapCircle         = new Circle(26, Circle.CATEGORY.SPEED, "Tap");
const arrowCircle       = new Circle(27, Circle.CATEGORY.SPEED, "Arrow");
const swordCircle       = new Circle(28, Circle.CATEGORY.SPEED, "Sword");
const letterCircle      = new Circle(29, Circle.CATEGORY.SPEED, "Letter");
const castleCircle      = new Circle(30, Circle.CATEGORY.SPEED, "Castle");

// Duration Circles
const blinkCircle       = new Circle(31, Circle.CATEGORY.DURATION, "Blink");
const breathCircle      = new Circle(32, Circle.CATEGORY.DURATION, "Breath");
const candleCircle      = new Circle(33, Circle.CATEGORY.DURATION, "Candle");
const watchCircle       = new Circle(34, Circle.CATEGORY.DURATION, "Watch");
const dayCircle         = new Circle(35, Circle.CATEGORY.DURATION, "Day");
const weekCircle        = new Circle(36, Circle.CATEGORY.DURATION, "Week");
const moonCircle        = new Circle(37, Circle.CATEGORY.DURATION, "Moon");
const yearCircle        = new Circle(38, Circle.CATEGORY.DURATION, "Year");
const eternityCircle    = new Circle(39, Circle.CATEGORY.DURATION, "Eternity");

// Gravity Circles
const esquireCircle     = new Circle(40, Circle.CATEGORY.GRAVITY, "Esquire");
const knightCircle      = new Circle(41, Circle.CATEGORY.GRAVITY, "Knight");
const baronCircle       = new Circle(42, Circle.CATEGORY.GRAVITY, "Baron");
const dukeCircle        = new Circle(43, Circle.CATEGORY.GRAVITY, "Duke");
const kingCircle        = new Circle(44, Circle.CATEGORY.GRAVITY, "King");
const divineCircle      = new Circle(45, Circle.CATEGORY.GRAVITY, "Divine");

// Special Circles (Goal & Spell)
const goalCircle        = new Circle(46, Circle.CATEGORY.GOAL, null);
const spellCircle       = new Circle(47, Circle.CATEGORY.SPELL, null);