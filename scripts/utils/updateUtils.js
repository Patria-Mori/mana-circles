// Utility functions for updating the data models of actors when the module is updated.

/**
 * During start-up this function is called, and goes through all the actors in the world, 
 * updating the data models fo the actors who have outdated data models.
 * 
 * It iterates over all the actors in the world, and identifies the actors who have outdated data models,
 * and then calls the update function for that specific version of the data model.
 */
async function updateDataModels() {
    const actors = game.actors;
    for (let actor of actors) {
        let actorId = actor._id;
        let actorDataModelVersion = ManaFlagUtils.getActorFlag(actorId, ManaCirclesModule.ID, ManaCirclesModule.FLAGS.MODULE_VERSION);
        switch (actorDataModelVersion) {
            case "0.1.0": break;
            case undefined: addManaCirclesFlags(actorId); break;
            default: ManaCirclesModule.log(false, "Actor [", actorId, "] has an unknown data model version [", actorDataModelVersion, "]."); break;
        }
    }

}

/**
 * Adds the flags used by the module to the actor.
 */
async function addManaCirclesFlags(actorId) {
    ManaCirclesModule.log(false, "Adding flags to actor [", actorId, "]."); 
    initModuleActorFlags(actorId);
}