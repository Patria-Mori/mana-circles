// Description: Defines the Circle class and all the circles in the module.
// Circles can be modified, but the id should not be changed, as it is used to identify the circle.

// Element Circles
const lightCircle       = new Circle(1,  CATEGORY.ELEMENT, "Light");
const darkCircle        = new Circle(2,  CATEGORY.ELEMENT, "Dark");
const orderCircle       = new Circle(3,  CATEGORY.ELEMENT, "Order");
const chaosCircle       = new Circle(4,  CATEGORY.ELEMENT, "Chaos");
const lifeCircle        = new Circle(5,  CATEGORY.ELEMENT, "Life");
const deathCircle       = new Circle(6,  CATEGORY.ELEMENT, "Death");
const fireCircle        = new Circle(7,  CATEGORY.ELEMENT, "Fire");
const earthCircle       = new Circle(8,  CATEGORY.ELEMENT, "Earth");
const waterCircle       = new Circle(9,  CATEGORY.ELEMENT, "Water");
const airCircle         = new Circle(10, CATEGORY.ELEMENT, "Air");
const forceCircle       = new Circle(11, CATEGORY.ELEMENT, "Force");
const nullCircle        = new Circle(12, CATEGORY.ELEMENT, "Null");

// Medium Circles
const thoughtCircle     = new Circle(13, CATEGORY.MEDIUM, "Thought");
const soundCircle       = new Circle(14, CATEGORY.MEDIUM, "Sound");
const selfCircle        = new Circle(15, CATEGORY.MEDIUM, "Self");
const projectileCircle  = new Circle(16, CATEGORY.MEDIUM, "Projectile");
const hitCircle         = new Circle(17, CATEGORY.MEDIUM, "Hit");
const allyCircle        = new Circle(18, CATEGORY.MEDIUM, "Ally");
const auraCircle        = new Circle(19, CATEGORY.MEDIUM, "Aura");
const enemyCircle       = new Circle(20, CATEGORY.MEDIUM, "Enemy");
const areaCircle        = new Circle(21, CATEGORY.MEDIUM, "Area");
const itemCircle        = new Circle(22, CATEGORY.MEDIUM, "Item");
const summonCircle      = new Circle(23, CATEGORY.MEDIUM, "Summon");
const othersCircle      = new Circle(24, CATEGORY.MEDIUM, "Others");

// Speed Circles
const nowCircle         = new Circle(25, CATEGORY.SPEED, "Now");
const tapCircle         = new Circle(26, CATEGORY.SPEED, "Tap");
const arrowCircle       = new Circle(27, CATEGORY.SPEED, "Arrow");
const swordCircle       = new Circle(28, CATEGORY.SPEED, "Sword");
const letterCircle      = new Circle(29, CATEGORY.SPEED, "Letter");
const castleCircle      = new Circle(30, CATEGORY.SPEED, "Castle");

// Duration Circles
const blinkCircle       = new Circle(31, CATEGORY.DURATION, "Blink");
const breathCircle      = new Circle(32, CATEGORY.DURATION, "Breath");
const candleCircle      = new Circle(33, CATEGORY.DURATION, "Candle");
const watchCircle       = new Circle(34, CATEGORY.DURATION, "Watch");
const dayCircle         = new Circle(35, CATEGORY.DURATION, "Day");
const weekCircle        = new Circle(36, CATEGORY.DURATION, "Week");
const moonCircle        = new Circle(37, CATEGORY.DURATION, "Moon");
const yearCircle        = new Circle(38, CATEGORY.DURATION, "Year");
const eternityCircle    = new Circle(39, CATEGORY.DURATION, "Eternity");

// Gravity Circles
const esquireCircle     = new Circle(40, CATEGORY.GRAVITY, "Esquire");
const knightCircle      = new Circle(41, CATEGORY.GRAVITY, "Knight");
const baronCircle       = new Circle(42, CATEGORY.GRAVITY, "Baron");
const dukeCircle        = new Circle(43, CATEGORY.GRAVITY, "Duke");
const kingCircle        = new Circle(44, CATEGORY.GRAVITY, "King");
const divineCircle      = new Circle(45, CATEGORY.GRAVITY, "Divine");

// Special Circles (Goal & Spell)
const goalCircle        = new Circle(46, CATEGORY.GOAL, null);
const spellCircle       = new Circle(47, CATEGORY.SPELL, null);