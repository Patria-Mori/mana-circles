# PM Mana - Circles

The mana circles module is part of the PM Mana Foundry module project, and adds onto mana-base to implement support for circles and affinities. It requires and builds on top of the mana-base module.

## Main Features

The module has a few main features, but in general it can be thought of as an extension to the mana-base module that similarly to the base mod mainly extends the "foundation" from the base mod without providing too much functionality itself.

 - **Circles & Spells**: The core of the mod. Extends the base mod with models for "Circles" and "Spells", defining those as classes and implementing an API for interacting with this module.
 - **Spell Cost Engine**: The spell cost "engine" is a utility that can be used to determine the cost of casting a spell based on the characteristics of the spell, the affinities of the caster, and the circumstances/environment of the casting.
 - **Affinity Management**: Affinity management extends the actor model with affinities and a UI to manage those affinities. In the long run I want to implement several good QoL features, such as affinity profiles, a good pop-out UI, and a highly granular management system (the model should support diferentiating between different types of affinities and should be able to validate that a given configuration of affinities is valid). 
 - **Actor affinity automation**: This system, along with the Affinity management system, should do useful automation, as well as provide a set of functions that plug into the mana-base system to automatically update mana when spells are cast. 

A key takeaway from this is that while this module extends the basic model and provides *some* useful user-facing funtionality, it doesn't provide much actual automation alone, other modules will have to do that.

A general goal of this module, along with the subsequent "mana-spells" (name might change) module is to not only provide useful automation in foundry, but hopefully make the use of external tools like spreadsheets redundant. Input from users on how to improve is highly valued. 