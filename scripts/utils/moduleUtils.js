/**
 * Initialises the module flags on a new actor.
 * @param {Document} actorDocument 
 */
function initModuleActorFlags(actorDocument) {
    const actorId = actorDocument._id;

    ManaFlagUtils.setActorFlag(actorId, ManaCirclesModule.ID, ManaCirclesModule.FLAGS.AFFINITY_SET, []);
    ManaFlagUtils.setActorFlag(actorId, ManaCirclesModule.ID, ManaCirclesModule.FLAGS.LAST_ACTIVE_TAB, "attributes");
    ManaFlagUtils.setActorFlag(actorId, ManaCirclesModule.ID, ManaCirclesModule.FLAGS.MODULE_VERSION, ManaCirclesModule.VERSION);
}