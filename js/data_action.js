data_action = [
    {
        title: "Attack",
        icon: "attack",
        subtitle: "Melee, ranged, or unarmed attack",
        description: "Perform a melee, ranged, or unarmed attack.",
        reference: "Terminology - Combat",
        bullets: [
            "Certain features, such as the <i>Multi-Hit</i> feature, allow you to make more than one attack with this action. Each of these attacks is a separate roll and may target different creatures. You may move in between these attacks.",
            "When you attack with a light melee weapon, you can use a bonus action to attack with your other hand (see the <i>Secondary attack</i> bonus action).",
            "You may replace one of your melee attacks with a <i>Grapple</i> or a <i>Shove</i>.",
            "Some conditions give advantage on the attack: attacks against blinded, paralyzed, restrained, stunned, or unconscious targets; melee attacks against prone targets; attacks by invisible or hidden attackers.",
            "Some conditions give disadvantage on the attack: attacks against invisible or hidden targets; ranged attacks against prone targets; attacks by blinded, frightened, poisoned, or restrained attackers."
        ]
    },
    {
        title: "Assist",
        icon: "help",
        subtitle: "Grant an ally advantage",
        description: "Grant an ally advantage on an ability check or attack",
        reference: "Action",
        bullets: [
            "The target gains advantage on the next ability check it makes to perform the task you are helping with.",
            "Alternatively, the target gains advantage on the next attack roll against against a creature within 5 feet of you.",
            "The advantage lasts until the start of your next turn."
        ]
    },
    {
        title: "Cast a spell",
        icon: "spell",
        subtitle: "Cast time of 1 action",
        description: "Cast a spell with a casting time of 1 action",
        reference: "Terminology - Spells",
        bullets: [
            "The target of a spell must be within the spell's range. To target something, you must have a clear path to it, so it can't be behind total cover.",
            "Spells with material components do not consume the material unless explicitly stated. Unless the cost of a material is given, you can assume that the cost is negligible and the material is readily available.",
            "Some spells require you to maintain focus in order to keep their magic active. If you lose focus, such a spell ends. You lose focus on a spell if you are incapacitated. Each time you take damage, you must make a Constitution saving throw to maintain your concentration. The DC equals 10 or half the damage you take, whichever number is higher."
        ]
    },
    {
        title: "Defend",
        icon: "brace",
        subtitle: "Increase defenses",
        description: "Focus entirely on blocking attacks",
        reference: "Terminology - Dodge or Defend",
        bullets: [
            "Until the start of your next turn, your AP increases by half, and you make Might resistance rolls with advantage.",
            "You lose this benefit if you are <i>incapacitated</i>."
        ]
    },
    {
        title: "Disengage",
        icon: "disengage",
        subtitle: "Prevent opportunity attacks",
        description: "Your movement doesn't provoke opportunity attacks for the rest of the turn",
        reference: "Action - Movement",
        bullets: [
        ]
    },
    {
        title: "Dodge",
        icon: "dodge",
        subtitle: "Increase defenses",
        description: "Focus entirely on avoiding attacks",
        reference: "Terminology - Dodge or Defend",
        bullets: [
            "Until the start of your next turn, any attack roll made against you has disadvantage if you can see the attacker, and you make Mobility resistance rolls with advantage.",
            "You lose this benefit if you are <i>incapacitated</i> or if your speed drops to 0."
        ]
    },
    {
        title: "Escape",
        icon: "grappleescape",
        subtitle: "Escape restraint",
        description: "Escape restraint",
        reference: "Action",
        bullets: [
            "To escape a grapple, you must succeed on a <i>Might</i> or <i>Mobility</i> check contested by the grappler's <i>Might</i> check.",
            "To escape a restraint from an item, you must succeed on a <i>Might</i> or <i>Mobility</i> check to break or unlock the restraints.",
            "To escape a magical restraint, you must succeed a check specified by the spell."
        ]
    },
    {
        title: "Grapple",
        icon: "grapple",
        subtitle: "Special melee attack",
        description: "Attempt to grab a creature or wrestle with it",
        reference: "Actions",
        bullets: [
            "You can use the <i>Attack</i> action to make a special melee attack, a grapple. If you're able to make multiple attacks with the Attack action, this attack replaces one of them.",
            "The target of your grapple must be no more than one size larger than you, and it must be within your reach.",
            "Using at least one free hand, you try to seize the target by making a grapple check, a <i>Might</i> check contested by the target's <i>Might</i> or <i>Mobility</i> check (the target chooses the ability to use).",
            "If you succeed, you subject the target to the grappled condition (its speed is set to 0)."
        ]
    },
    {
        title: "Hide",
        icon: "hide",
        subtitle: "",
        description: "Attempt to hide",
        reference: "Action - Movement",
        bullets: [
            "You can't hide from a creature that can see you. You must have total cover, be in a heavily obscured area, be invisible, or otherwise block the enemy's vision.",
            "If you make noise (such as shouting a warning or knocking over a vase), you give away your position.",
            "When you try to hide, make a <i>Stealth</i> check and note the result. Until you are discovered or you stop hiding, that check's total is contested by the <i>Perception</i> check of any creature that actively searches for signs of your presence.",
            "A creature notices you even if it isn't searching unless your <i>Stealth</i> check is higher than its <i>Awareness</i>.",
            "Out of combat, you may also use a <i>Stealth</i> check for acts like concealing yourself from enemies, slinking past guards, slipping away without being noticed, or sneaking up on someone without being seen or heard."
        ]
    },
    {
        title: "Improvise",
        icon: "improvise2",
        subtitle: "Any action not on this list",
        description: "Perform any action you can imagine",
        reference: "Action",
        bullets: [
            "When you describe an action not detailed elsewhere in the rules, the GM tells you whether that action is possible and what kind of roll you need to make, if any, to determine success or failure."
        ]
    },
    {
        title: "Ready",
        icon: "ready",
        subtitle: "Choose a trigger and action",
        description: "Choose a trigger and a response reaction",
        reference: "Action",
        bullets: [
            "First, you decide what perceivable circumstance will trigger your reaction.",
            "Then, you choose the action you will take in response to that trigger, or you choose to move up to your speed in response to it.",
            "When the trigger occurs, you can either take your reaction right after the trigger finishes or ignore the trigger.",
            "When you ready a spell, you cast it as normal but hold its energy, which you release with your reaction when the trigger occurs. To be readied, a spell must have a casting time of 1 action, and holding onto the spell's magic requires concentration"
        ]
    },
    {
        title: "Search",
        icon: "search",
        subtitle: "",
        description: "Devote your attention to finding something",
        reference: "Action",
        bullets: [
            "Depending on the nature of your search, the GM might have you make a <i>Percetion</i> check or a <i>Reason</i> check."
        ]
    },
    {
        title: "Shove",
        icon: "shove",
        subtitle: "Special melee attack",
        description: "Shove a creature, either to knock it prone or push it away from you",
        reference: "Actions",
        bullets: [
            "Using the <i>Attack</i> action, you can make a special melee attack to shove a creature. If you're able to make multiple attacks with the Attack action, this attack replaces one of them.",
            "The target of your shove must be no more than one size larger than you, and it must be within your reach.",
            "You make a <i>Might</i> check contested by the target's <i>Might</i> or <i>Mobility</i> check (the target chooses the ability to use).",
            "If you win the contest, you either knock the target prone or push it 5 feet away from you."
        ]
    },
    {
        title: "Sprint",
        icon: "sprint",
        subtitle: "Double movement speed",
        description: "Gain extra movement for the current turn",
        reference: "Action - Movement",
        bullets: [
            "The increase equals your speed, after applying any modifiers."
        ]
    },
    {
        title: "Team Combo",
        icon: "teamcombo",
        subtitle: "Perform an action with two+ allies",
        description: "Perform an action with two or more allies, in succession or addition to each other",
        reference: "Terminology - Team Action",
        bullets: [
            "Perform a communicated action with two or more allies within 60ft of yourself.",
            "All targets must succeed a Low Team Roll, performing their actions in the order communicated.",
            "Targets perform the action immediately on your turn, regardless of initiative - this action uses all targets turns for the round."
        ]
    },
    {
        title: "Team Sync",
        icon: "teamsync",
        subtitle: "Perform an action with two+ allies",
        description: "Perform an action with two or more allies, simultaniously",
        reference: "Terminology - Team Action",
        bullets: [
            "Perform a communicated action with two or more allies within 60ft of yourself.",
            "Half of all targets must succeed a Team Roll, performing a syncronous action on success.",
            "Targets perform the action immediately on your turn, regardless of initiative - this action uses all targets turns for the round."
        ]
    },
    {
        title: "Use Item",
        icon: "item",
        subtitle: "Interact, use special abilities",
        description: "Interact with a second object or use special object abilities",
        reference: "Action",
        bullets: [
            "You can interact with one item for free during your turn (such as using an inventory item or opening a door). If you want to interact with a second object, use this action.",
            "When an object requires your action for its use, you also take this action."
        ]
    },
    {
        title: "Use class feature",
        icon: "class",
        subtitle: "Some features use actions",
        description: "Use a racial or class feature that uses an action",
        reference: "See class page for more information.",
        bullets: [

        ]
    }
];
