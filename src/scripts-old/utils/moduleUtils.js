/**
 * Initialises the module flags on a new actor.
 * @param {string} actorid The ID of the actor to initialise the flags on. 
 */
function initModuleActorFlags(actorId) {
    ManaFlagUtils.setActorFlag(actorId, ManaCirclesModule.ID, ManaCirclesModule.FLAGS.AFFINITY_SET, []);
    ManaFlagUtils.setActorFlag(actorId, ManaCirclesModule.ID, ManaCirclesModule.FLAGS.LAST_ACTIVE_TAB, "attributes");
    ManaFlagUtils.setActorFlag(actorId, ManaCirclesModule.ID, ManaCirclesModule.FLAGS.MODULE_VERSION, ManaCirclesModule.VERSION);
}