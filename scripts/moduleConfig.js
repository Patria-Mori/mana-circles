/**
 * This class contains the configuration for the module.
 */
class ManaCirclesModule {

    // Config stuff
    static ID = 'mana-circles';
    static VERSION = '0.1.0'; // The version is used to determine if the data models need to be updated.

    // The flags used in the module.
    static FLAGS = {
        AFFINITY_SET:   'affinity-set',
    }

    // The Handlebars templates used in the module.
    static TEMPLATES = {
        ATTRIBUTE_PANE_UI:  `modules/${this.ID}/templates/attribute-circle-ui.hbs`,
        CUSTOM_TAB_BUTTON:  `modules/${this.ID}/templates/custom-tab-button.hbs`,
        CUSTOM_TAB_UI:      `modules/${this.ID}/templates/custom-tab-ui.hbs`
    }

    /**
     * Used to log messages to the console with the module ID as a prefix.
     * @param {boolean} force   Whether or not to force the log message to be displayed. 
     * @param  {...any} args    The arguments to pass to the console.log function.
     */
    static log(force, ...args) {  
        const shouldLog = force || game.modules.get('_dev-mode')?.api?.getPackageDebugValue(this.ID);
    
        if (shouldLog) {
          console.log(this.ID, '|', ...args);
        }
    }

}