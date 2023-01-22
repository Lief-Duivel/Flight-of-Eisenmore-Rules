data_critical = [
    {
        title: "Crippled",
        icon: "crippled",
        subtitle: "You received a crippling blow",
        description: "You fell to 0 HP and received a crippling blow",
        reference: "Critical Condition",
        bullets: [
            "When you receive a crippling blow, you become unable to use the limb, or other extremity, as determined by the GM.",
            "An affected limb may still be used with a successful <i>Stamina</i> roll, but risks permanently injuring the limb.",
            "The effect ends if magically treated, or after 5 successful Camps."
        ]
    },
    {
        title: "Disoriented",
        icon: "disoriented",
        subtitle: "You become disoriented",
        description: "You fell to 0 HP and became disoriented",
        reference: "Critical Condition",
        bullets: [
            "When you become disoriented, you make all actions, bonus actions, and reactions with disadvantage.",
            "While disoriented, you can still take movement, but it will be in a random cardinal direction, as decided by a d4 roll.",
            "The effect only ends after a successful camp."
        ]
    },
    {
        title: "Exhaustion",
        icon: "exhaustion",
        subtitle: "You are exhausted",
        description: "Exhaustion is measured in three levels",
        reference: "Critical Condition",
        bullets: [
            "<table><tr><th>Level</th><th></th><th></th><th style='text-align:left'>Effect</th></tr><tr><td>1</td><td></td><td></td><td>Disadvantage on skill checks, aim rolls, and resistance rolls</td></tr><tr><td>2</td><td></td><td></td><td>Movement halved</td></tr><tr><td>3</td><td></td><td></td><td>Movement speed reduced to 0</td></tr><tr><td>++</td><td></td><td></td><td>Become unconcious</td></tr></table>",
            "You suffer the effect of your current level of exhaustion as well as all lower levels.",
            "Exhaustion levels are gained every two turns you take, starting from the 1st level.",
            "Pushing past Exhaustion with a successful <i>Stamina</i> roll allows you to take a turn normally, but increases Exhaustion by one level at the end of your turn.",
            "A successful Camp removes your exhaustion, provided that you have also had some food and drink."
        ]
    },
    {
        title: "Injured",
        icon: "injured",
        subtitle: "You become injured",
        description: "You fell to 0 HP and became injured",
        reference: "Critical Condition",
        bullets: [
            "When you take the <i>Injured</i> condition, you also take on the <i>Bleeding</i> condition. Actions, bonus actions, reactions, and movement can be taken at the cost of damage.",
            "Actions deal 5 HP of damage, Bonus actions and reactions deal 3HP, while Movement costs 1HP per 5ft.",
            "The <i>Injured</i> condition prevents the <i>Bleeding</i> condition from being sealed or magically healed until the next Break or Camp."
        ]
    },
    {
        title: "Perish",
        icon: "death",
        subtitle: "You perish",
        description: "You fell to 0 HP and perished",
        reference: "Critical Condition",
        bullets: [
            "This condition can only be reached if 2 other Critical Conditions have stacked, making Perish the 3rd, or you receive damage more than five times your maximum HP.",
            "Speak with your GM to confirm whether or not you wouud like Perish as an option for your character."
        ]
    },
    {
        title: "Unconcious",
        icon: "unconcious",
        subtitle: "You fall unconcious",
        description: "You fall unconcious",
        reference: "Critical Condition",
        bullets: [
            "This condition is gained by passing level 3 Exhaustion; as an alternative to Perish; or if you receive damage more than two times your max HP.",
            "This condition can be removed by a successful camp, or a successful Waking Roll. Waking Rolls are 1d6, successful rolls 5-6.",
            "Allies may assist in Waking Rolls, changing the successful roll to 3-6.",
            "While Unconcious you may not take actions, bonus actions, or reactions, and your movement is reduced to 0."
        ]
    }
];
