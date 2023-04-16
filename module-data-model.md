# mana-circles Data Model documentation 

This documents the various data models (flag structure) used in each of the versions of the mod. This is used to make translating/porting the data models between versions easier.

In this document we describe the data model with a tree structure outlining the various flags and the value of their type.
Additionally, for each version after the first, we also explain the differences between the last and current version.

## Alpha releases - v0.1.0

The alpha release is quite simple.

### v0.1.0


```
├── flags.mana-circles
│   ├── affinity-set : Affinity[]
│   ├── _last-active-tab: string
│   ├── _module-version : string
└──
```

**Custom Data Classes:**
 - Circle: 
   - id : number
   - category : Circle.CATEGORY (Enum)
   - type : string
 - Affinity: 
   - circle : Circle
   - orign : Affinity.ORIGIN (Enum)
 - Spell:
   - baseLvl : number
   - castLvl : number
   - circles : Circle[]
   - isReaction : boolean
