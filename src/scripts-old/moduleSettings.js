/**
 * This file contains the code for registering and managing module settings.
 */

/**
 * Register module settings
 */
function registerCirclesModuleSettings() {
    game.settings.register(ManaCirclesModule.ID, "clientShowCircles", { 
        name: "Display Circles UI tab in actor sheets",
        hint: "If enabled, mana will be shown in character sheets.",
        scope: "client",
        config: true,
        requiresReload: true,
        type: Boolean,
        default: true,
    });
}

