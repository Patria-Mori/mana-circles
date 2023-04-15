
/**
 * This function "toggles" an affinity in a set of affinities.
 * If the affinity is already in the set, it is removed, otherwise it is added.
 * 
 * @param {string} actorId          The id of the actor.
 * @param {number} circleId         The id of the circle.
 * @param {Affinity.ORIGIN} origin  The origin of the affinity.
 * @returns {Affinity[]}            The updated set of affinities.
 */
function toggleAffinityInSet(actorId, circleId, origin) {
    const circle = CircleDefinitions.getCircleFromId(circleId);

    const oldAffinities = structuredClone(AffinitySet.getAffinitySet(actorId));
    if (oldAffinities == null) { // If there are no affinities, we create a new set with the new affinity.
        return new AffinitySet([new Affinity(circle, origin)]);
    } else {
        // We iterate over the affinities to check if the affinity is already in the set.
        for (affinity of oldAffinities) {
            if (affinity.circle.id === circleId && affinity.origin === origin) {
                newAffinities = oldAffinities.filter(affinity => affinity.circle.id !== circleId || affinity.origin !== origin);
                // Since we found the affinity, we remove it from the set and return the new set.
                return newAffinities;
            }
        }

        // If we didn't find the affinity, we add it to the set and return the new set.
        let newAffinities = oldAffinities;
        newAffinities.push(new Affinity(circle, origin));
        return newAffinities;
    }
}

/**
 * This function updates the affinity set of an actor, by toggling an affinity in the set, 
 * and then updating the actor's affinitySet flag.
 * @param {string} actorId          The id of the actor.
 * @param {number} circleId         The id of the circle.
 * @param {Affinity.ORIGIN} origin  The origin of the affinity.
 */
function updateAffinitySet(actorId, circleId, origin) {
    const newAffinities = toggleAffinityInSet(actorId, circleId, origin);
    AffinitySet.updateAffinitySet(actorId, newAffinities);
}