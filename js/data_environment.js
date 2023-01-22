data_environment_obscurance = [
    {
        title: "Lightly obscured",
        icon: "light",
        subtitle: "Disadvantage on Perception",
        description: "Dim light, patchy fog, moderate foliage",
        reference: "Environment",
        bullets: [
            "Creatures have <b>disadvantage on <i>Perception</i></b> checks that rely on sight."
        ]
    },
    {
        title: "Heavily obscured",
        icon: "heavy",
        subtitle: "Effectively blind",
        description: "Darkness, opaque fog, dense foliage",
        reference: "Environment",
        bullets: [
            "A creature in a heavily obscured area effectively suffers from the <b>blinded condition</b>."
        ]
    }
];

data_environment_light = [
    {
        title: "Bright light",
        icon: "bright",
        subtitle: "Normal vision",
        description: "Bright light lets most creatures see normally",
        reference: "Environment",
        bullets: [
            "Gloomy days still provide bright light, as do torches, lanterns, fires, and other sources of illumination within a specific radius."
        ]
    },
    {
        title: "Dim light",
        icon: "dim",
        subtitle: "Lightly obscured",
        description: "Dim light, also called shadows",
        reference: "Environment",
        bullets: [
            "Creates a <b>lightly obscured</b> area.",
            "An area of dim light is usually a boundary between a source of bright light, such as a torch, and surrounding darkness.",
            "The soft light of twilight and dawn also counts as dim light. A particularly brilliant full moon might bathe the land in dim light."
        ]
    },
    {
        title: "Darkness",
        icon: "dark",
        subtitle: "Heavily obscured",
        description: "Darkness creates a heavily obscured area",
        reference: "Environment",
        bullets: [
            "Creates a <b>heavily obscured</b> area.",
            "Characters face darkness outdoors at night (even most moonlit nights), within the confines of an unlit dungeon or a subterranean vault, or in an area of magical darkness."
        ]
    }
];

data_environment_vision = [
    {
        title: "Blindsight",
        icon: "blindsight",
        subtitle: "Perceive without sight",
        description: "Perceive your surroundings without relying on sight, within a certain radius",
        reference: "Environment Effects",
        bullets: [
            "Creatures without eyes, such as oozes, and creatures with echolocation or heightened senses, such as bats and true dragons, have this sense."
        ]
    },
    {
        title: "Darkvision",
        icon: "darkvision",
        subtitle: "Limited vision in darkness",
        description: "A creature with Darkvision can see better in the dark or low light conditions, within a certain radius",
        reference: "Environment Effects",
        bullets: [
            "Within a specified range, a creature with darkvision can <b>see in darkness as if the darkness were dim light</b>, so areas of darkness are only lightly obscured as far as that creature is concerned.",
            "However, the creature can’t discern color in darkness, only shades of gray."
        ]
    },
    {
        title: "Truesight",
        icon: "truesight",
        subtitle: "See in darkness",
        description: "A creature with truesight can see everything in its true form, independent of the environment",
        reference: "Environment Effects",
        bullets: [
            "A creature with truesight can, out to a specific range, see in normal and magical darkness, see invisible creatures and objects, automatically detect visual illusions and succeed on saving throws against them, and perceives the original form of a shapechanger or a creature that is transformed by magic."
        ]
    }
];

data_environment_cover = [
    {
        title: "Half cover",
        icon: "half",
        subtitle: "Low wall, furniture, creatures",
        description: "A target has half cover if an obstacle blocks at least half of its body",
        reference: "Environment Cover",
        bullets: [
            "The obstacle might be a low wall, a large piece of furniture, a narrow tree trunk, or a creature, whether that creature is an enemy or a friend.",
            "A target with half cover has a <b>+3 bonus to AC and <i>Mobility</i> saving throws</b>.",
            " If a target is behind multiple sources of cover, only the most protective degree of cover applies"
        ]
    },
    {
        title: "Full cover",
        icon: "full",
        subtitle: "Completely concealed",
        description: "A target has total cover if it is completely concealed by an obstacle",
        reference: "Environment Cover",
        bullets: [
            "A target with total cover <b>can’t be targeted directly</b> by an attack or a spell, although some spells can reach such a target by including it in an area of effect.",
            "If a target is behind multiple sources of cover, only the most protective degree of cover applies"
        ]
    }
];
