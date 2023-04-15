// This section contains all the used hooks and their callbacks.
/**
 * This hook is called by the DevMode module when it is ready.
 */
Hooks.once('devModeReady', ({ registerPackageDebugFlag }) => {
    // Registers the module's debug flag with the dev mode module if it is installed.
    registerPackageDebugFlag(ManaCirclesModule.ID);
});


/**
 * A hook event that fires as Foundry is initializing, right before any initialization tasks have begun.
 */
Hooks.on("init", async function () {
    preloadHandlebarsTemplates();
});

/**
 * A hook event that fires for every embedded Document type after conclusion of a creation workflow. 
 * Substitute the Document name in the hook event to target a specific type, for example "createToken". 
 * This hook fires for all connected clients after the creation has been processed.
 * 
 * @param {Document} document - The new Document instance which has been created.
 * @param {DocumentModificationContext} options - Additional options which modified the creation request.
 * @param {string} userId - The ID of the User who triggered the creation workflow
 */
Hooks.on("createActor", async function (document, options, userId) {
    initModuleActorFlags(document);
});

/**
 * A hook event that fires whenever an Application is rendered. 
 * Substitute the Application name in the hook event to target a specific Application type, for example "renderMyApplication". 
 * Each Application class in the inheritance chain will also fire this hook, i.e. "renderApplication" will also fire. 
 * The hook provides the pending application HTML which will be added to the DOM. 
 * Hooked functions may modify that HTML or attach interactive listeners to it.
 * 
 * @param {Application} actorSheet - The Application instance being rendered.
 * @param {jQuery} html - The inner HTML of the document that will be displayed and may be modified.
 * @param {object} data - The object of data used when rendering the application
 */
Hooks.on("renderActorSheet", async function (actorSheet, html, data) {
    injectCirclesTabUiIntoActorSheet(actorSheet, html);
});

/**
 * Utility function to convert a string of HTML code to an element.
 * @param {string} html 
 * @returns 
 */
function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}

/**
 * Preloads and caches the handlebars templates used by the module. 
 * @returns Promise that resolves once the templates are loaded.
 */
async function preloadHandlebarsTemplates() {
    const templatePaths = [
        ManaCirclesModule.TEMPLATES.ATTRIBUTE_PANE_UI,
        ManaCirclesModule.TEMPLATES.CUSTOM_TAB_BUTTON,
        ManaCirclesModule.TEMPLATES.CUSTOM_TAB_UI
    ];

    return loadTemplates(templatePaths);
}