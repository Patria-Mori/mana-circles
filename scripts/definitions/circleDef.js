// Description: Defines the Circle class and all the circles in the module.
// Circles can be modified, but the id should not be changed, as it is used to identify the circle.


class CircleDefinitions {

    // Element Circles
    static lightCircle       = new Circle(1,  Circle.CATEGORY.ELEMENT, "Light");
    static darkCircle        = new Circle(2,  Circle.CATEGORY.ELEMENT, "Dark");
    static orderCircle       = new Circle(3,  Circle.CATEGORY.ELEMENT, "Order");
    static chaosCircle       = new Circle(4,  Circle.CATEGORY.ELEMENT, "Chaos");
    static lifeCircle        = new Circle(5,  Circle.CATEGORY.ELEMENT, "Life");
    static deathCircle       = new Circle(6,  Circle.CATEGORY.ELEMENT, "Death");
    static fireCircle        = new Circle(7,  Circle.CATEGORY.ELEMENT, "Fire");
    static earthCircle       = new Circle(8,  Circle.CATEGORY.ELEMENT, "Earth");
    static waterCircle       = new Circle(9,  Circle.CATEGORY.ELEMENT, "Water");
    static airCircle         = new Circle(10, Circle.CATEGORY.ELEMENT, "Air");
    static forceCircle       = new Circle(11, Circle.CATEGORY.ELEMENT, "Force");
    static nullCircle        = new Circle(12, Circle.CATEGORY.ELEMENT, "Null");
    
    /**
     * Returns an array containing all element circles.
     * @returns {Array} An array containing all element circles.
     */
    static elementCircles() {
        return [this.lightCircle, this.darkCircle, this.orderCircle, this.chaosCircle, this.lifeCircle, this.deathCircle, 
            this.fireCircle, this.earthCircle, this.waterCircle, this.airCircle, this.forceCircle, this.nullCircle];
    }
    
    // Medium Circles
    static thoughtCircle     = new Circle(13, Circle.CATEGORY.MEDIUM, "Thought");
    static soundCircle       = new Circle(14, Circle.CATEGORY.MEDIUM, "Sound");
    static selfCircle        = new Circle(15, Circle.CATEGORY.MEDIUM, "Self");
    static projectileCircle  = new Circle(16, Circle.CATEGORY.MEDIUM, "Projectile");
    static hitCircle         = new Circle(17, Circle.CATEGORY.MEDIUM, "Hit");
    static allyCircle        = new Circle(18, Circle.CATEGORY.MEDIUM, "Ally");
    static auraCircle        = new Circle(19, Circle.CATEGORY.MEDIUM, "Aura");
    static enemyCircle       = new Circle(20, Circle.CATEGORY.MEDIUM, "Enemy");
    static areaCircle        = new Circle(21, Circle.CATEGORY.MEDIUM, "Area");
    static itemCircle        = new Circle(22, Circle.CATEGORY.MEDIUM, "Item");
    static summonCircle      = new Circle(23, Circle.CATEGORY.MEDIUM, "Summon");
    static othersCircle      = new Circle(24, Circle.CATEGORY.MEDIUM, "Others");
    
    /**
     * Returns an array containing all medium circles.
     * @returns {Array} An array containing all medium circles.
     */
    static mediumCircles() {
        return [this.thoughtCircle, this.soundCircle, this.selfCircle, this.projectileCircle, this.hitCircle, this.allyCircle, 
            this.auraCircle, this.enemyCircle, this.areaCircle, this.itemCircle, this.summonCircle, this.othersCircle];
    } 
    
    // Speed Circles
    static nowCircle         = new Circle(25, Circle.CATEGORY.SPEED, "Now");
    static tapCircle         = new Circle(26, Circle.CATEGORY.SPEED, "Tap");
    static arrowCircle       = new Circle(27, Circle.CATEGORY.SPEED, "Arrow");
    static swordCircle       = new Circle(28, Circle.CATEGORY.SPEED, "Sword");
    static letterCircle      = new Circle(29, Circle.CATEGORY.SPEED, "Letter");
    static castleCircle      = new Circle(30, Circle.CATEGORY.SPEED, "Castle");
    
    /**
     * Returns an array containing all speed circles.
     * @returns {Array} An array containing all speed circles.
     */
    static speedCircles() {
        return [this.nowCircle, this.tapCircle, this.arrowCircle, this.swordCircle, this.letterCircle, this.castleCircle];
    }
    
    // Duration Circles
    static blinkCircle       = new Circle(31, Circle.CATEGORY.DURATION, "Blink");
    static breathCircle      = new Circle(32, Circle.CATEGORY.DURATION, "Breath");
    static candleCircle      = new Circle(33, Circle.CATEGORY.DURATION, "Candle");
    static watchCircle       = new Circle(34, Circle.CATEGORY.DURATION, "Watch");
    static dayCircle         = new Circle(35, Circle.CATEGORY.DURATION, "Day");
    static weekCircle        = new Circle(36, Circle.CATEGORY.DURATION, "Week");
    static moonCircle        = new Circle(37, Circle.CATEGORY.DURATION, "Moon");
    static yearCircle        = new Circle(38, Circle.CATEGORY.DURATION, "Year");
    static eternityCircle    = new Circle(39, Circle.CATEGORY.DURATION, "Eternity");
    
    /**
     * Returns an array containing all duration circles.
     * @returns {Array} An array containing all duration circles.
     */
    static durationCircles() {
        return [this.blinkCircle, this.breathCircle, this.candleCircle, this.watchCircle, this.dayCircle, this.weekCircle,
            this.moonCircle, this.yearCircle, this.eternityCircle];
    }
    
    // Gravity Circles
    static esquireCircle     = new Circle(40, Circle.CATEGORY.GRAVITY, "Esquire");
    static knightCircle      = new Circle(41, Circle.CATEGORY.GRAVITY, "Knight");
    static baronCircle       = new Circle(42, Circle.CATEGORY.GRAVITY, "Baron");
    static dukeCircle        = new Circle(43, Circle.CATEGORY.GRAVITY, "Duke");
    static kingCircle        = new Circle(44, Circle.CATEGORY.GRAVITY, "King");
    static divineCircle      = new Circle(45, Circle.CATEGORY.GRAVITY, "Divine");
    
    /**
     * Returns an array containing all gravity circles.
     * @returns {Array} An array containing all gravity circles.
     */
    static gravityCircles() {
        return [this.esquireCircle, this.knightCircle, this.baronCircle, this.dukeCircle, this.kingCircle, this.divineCircle];
    }
    
    // Special Circles (Goal & Spell)
    static goalCircle        = new Circle(46, Circle.CATEGORY.GOAL, null);
    static spellCircle       = new Circle(47, Circle.CATEGORY.SPELL, null);
    
    /**
     * Returns an object containing all circles, categorized by their category.
     * @returns {Object} An object containing all circles, categorized by their category.
     */
    static categoriesAndCircles() {
        return [
            {category: Circle.CATEGORY.ELEMENT, circles: this.elementCircles()},
            {category: Circle.CATEGORY.MEDIUM, circles: this.mediumCircles()},
            {category: Circle.CATEGORY.SPEED, circles: this.speedCircles()},
            {category: Circle.CATEGORY.DURATION, circles: this.durationCircles()},
            {category: Circle.CATEGORY.GRAVITY, circles: this.gravityCircles()}
        ];
    } 

    /**
     * Finds the circle with the given id and returns it.
     * @param {number} id The id of the circle to return. 
     * @returns {Circle} The circle with the given id, or null if no circle with the given id exists.
     */
    static getCircleFromId(id) {
        for (let category of this.categoriesAndCircles()) {
            for (let circle of category.circles) {
                if (circle.id == id) {
                    return circle;
                }
            }
        }
        return null;
    }

}