/**
 * The Affinity Set model represents a set of affinities that an actor has.
 * An affinity set can be used in different ways.
 * 
 * The class provides some utilities, but does not contain validation.
 * The model is defined as a list of affinities of arbitrary length.
 * There is currently no update functionality, so the model is immutable.
 */
class AffinitySet {

    affinities = [];    // The affinities of the profile.

    /**
     * Creates an instance of AffinityProfile.
     * @param {Affinity[]} affinities The affinities of the profile.
     */
    constructor(affinities) {
        this.affinities = affinities;
    }

    get affinities() {
        return this.affinities;
    }

    // TODO: Write jsdoc
    static getAffinitySet(actorId) {
        return ManaFlagUtils.getActorFlag(actorId, ManaCirclesModule.ID, ManaCirclesModule.FLAGS.AFFINITY_SET);
    }

    static setAffinitySet(actorId, affinitySet) {
        return ManaFlagUtils.setActorFlag(actorId, ManaCirclesModule.ID, ManaCirclesModule.FLAGS.AFFINITY_SET, affinitySet);
    }

    /**
     * Updates the affinity set of an actor. 
     * Removes the old affinity set and sets the new one.
     * @param {String} actorId  The id of the actor.
     * @param {*} affinitySet   The new affinity set.
     */
    static updateAffinitySet(actorId, affinitySet) {
        this.unsetAffinitySet(actorId);
        this.setAffinitySet(actorId, affinitySet);
    }

    static unsetAffinitySet(actorId) {
        return ManaFlagUtils.unsetActorFlag(actorId, ManaCirclesModule.ID, ManaCirclesModule.FLAGS.AFFINITY_SET);
    }

}