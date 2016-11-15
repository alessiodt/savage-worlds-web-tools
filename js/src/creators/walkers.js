/*

Data here is NOT Licensed under the Creative Commons and is owned by Pinnacle Entertainment Group.

This product references the Savage Worlds game system, available from Pinnacle Entertainment Group at www.peginc.com.
Savage Worlds and all associated logos and trademarks are copyrights of Pinnacle Entertainment Group. Used with permission.
Pinnacle makes no representation or warranty as to the quality, viability, or suitability for purpose of this product.

The entries in this file are from Savage Worlds: Sci-Fi Companion and are owned by Pinnacle Entertainment Group.
*/

var walker_options = Array(
	{
		title: "Ultra-Light Chassis",
		short_tag: "ultra-light",
		description: "This is a proposed walker size for 12-15 foot tall, Heavy Gear sized, Walkers. <a href='http://www.peginc.com/forum/viewtopic.php?t=45126'>The discussion is here</a>.",
		type: "bool"
	}
);

var walker_sizes = Array(
	{
		size_label: "Ultraight (unofficial)",
		examples: "12 feet tall",
		strength: 7,
		pace: 30,
		size: 4,
		acc: 0,
		ts: 0,
		climb: 0,
		toughness: 15,
		armor: 4,
		mods: 15,
		crew: 1,
		cost: 400000,
		energy_capacity: 0,
		provisions: 0,
		show_with_option: "ultra-light",
		unofficial: 1
	},
	{
		size_label: "Light",
		examples: "20 feet tall",
		strength: 9,
		pace: 24,
		size: 6,
		acc: 0,
		ts: 0,
		climb: 0,
		toughness: 20,
		armor: 5,
		mods: 20,
		crew: 1,
		cost: 1000000,
		energy_capacity: 0,
		provisions: 0
	},
	{
		size_label: "Medium",
		examples: "30 feet tall",
		strength: 11,
		pace: 18,
		size: 8,
		acc: 0,
		ts: 0,
		climb: 0,
		toughness: 25,
		armor: 6,
		mods: 25,
		crew: 1,
		cost: 3000000,
		energy_capacity: 0,
		provisions: 0
	},
	{
		size_label: "Heavy",
		examples: "50 feet tall",
		strength: 13,
		pace: 12,
		size: 10,
		acc: 0,
		ts: 0,
		climb: 0,
		toughness: 30,
		armor: 8,
		mods: 30,
		crew: 1,
		cost: 5000000,
		energy_capacity: 0,
		provisions: 0
	},
	{
		size_label: "Super Heavy",
		examples: "80 feet tall",
		strength: 15,
		pace: 8,
		size: 12,
		acc: 0,
		ts: 0,
		climb: 0,
		toughness: 35,
		armor: 8,
		mods: 40,
		crew: 1,
		cost: 10000000,
		energy_capacity: 0,
		provisions: 0
	},
	{
		size_label: "Titan",
		examples: "120 feet tall",
		strength: 17,
		pace: 8,
		size: 14,
		acc: 0,
		ts: 0,
		climb: 0,
		toughness: 35,
		armor: 8,
		mods: 50,
		crew: 1,
		cost: 20000000,
		energy_capacity: 0,
		provisions: 0
	}

);

var walker_modifications = Array(

	{
		name: "AMCM",
		description: "Anti-Missile Counter Measures are integrated jammers and decoys. They add +2 to Driving, Piloting or Knowledge (Electronics) rolls made to evade missile attacks.",
		get_max: function(selected_object) { return 1 },
		get_mod_cost: function(selected_object) {
			return 1;
		},
		get_cost: function(selected_object) {
			return 5000 * selected_object.size;
		},
	},

	{
		name: "Armor",
		description: "Increases a walker’s Armor value by +2. All walker Armor is considered Heavy Armor.",
		get_max: function(selected_object) { return selected_object.size },
		get_mod_cost: function(selected_object) {
			return 1;
		},
		get_cost: function(selected_object) {
			return 10000 * selected_object.size;
		},
		get_mod_effect: function(selected_object) {
			selected_object.armor++;
			selected_object.armor++;

			selected_object.toughness++;
			selected_object.toughness++;
		}
	},
	{
		name: "Close Combat Weapon",
		description: "Some walkers are equipped with chain- blades or swords designed to cut through the hard armor of rival mechs, buildings, or enemy tanks. They have AP equal to the mech’s Size and cause Str+2d10 damage (Heavy Weapon). The pilot uses the lower of his Fighting or Piloting to hit. The TN to hit an enemy mech or vehicle is 4, plus or minus normal speed or Size modifiers. Walkers aren’t subject to all the normal rules of close combat, but GMs can use those as the basis for situational modifiers based on specific circumstances (such as multiple mechs ganging up on a foe).",
		get_max: function(selected_object) { return 2 },
		get_mod_cost: function(selected_object) {
			return selected_object.size / 2;
		},
		get_cost: function(selected_object) {
			return 75000;
		},
	},
	{
		name: "Deflector Screens",
		description: "The vessel is protected by an energy field that deflects incoming ballistic attacks (it has no effect against lasers). Attackers must subtract –2 from their Shooting rolls. Mod cost is 2 for Small to Large walkers, and 3 for Huge to Gargantuan vessels.",
		get_max: function(selected_object) { return 1 },
		get_mod_cost: function(selected_object) {

			return 2;

		},
		get_cost: function(selected_object) {
			return 10000 * selected_object.size;
		},
	},
	{
		name: "Electromagnetic Shielding",
		description: "Adds +6 to the walker’s effective Toughness from EMP missiles (see page 25).",
		get_max: function(selected_object) { return "u" },
		get_mod_cost: function(selected_object) {
			return 2;
		},
		get_cost: function(selected_object) {
			return 5000 * selected_object.size;
		},
	},
	{
		name: "Jump Jets",
		description: "Powerful rockets give walkers the ability to propel themselves high in the air—to clear obstacles or perform “death from above” attacks on foes. To jump, the pilot uses an action to make a Piloting roll to both maneuver his walker and manage his power reserves. Each round spent jumping increases his height 50 feet for Light walkers, 30 feet for Mediums, and 20 feet for Heavies. Each subsequent round spent jumping (essentially flying) afterwards inflicts a –2 to the Piloting roll, cumulative to a maximum of –6. Failure means the walker descends immediately (a critical failure results in a fall—see Falling, page 59).",
		get_max: function(selected_object) { return 1 },
		get_mod_cost: function(selected_object) {
			return selected_object.size / 2;
		},
		get_cost: function(selected_object) {
			return 100000 * selected_object.size;
		},
	},
	{
		name: "Linked",
		description: "Up to four direct-fire weapons of the same type may be linked and fired as one, increasing the damage by +2 per weapon and reducing the total number of Mods required. Total all Linked weapons in a set first, then halve their required Mods. (If Linking Fixed weapons, halve the total.)",
		get_max: function(selected_object) { return "u" },
		hidden: 1,
		get_mod_cost: function(selected_object) {
			return 0;
		},
		get_cost: function(selected_object) {
			return 0;
		},
	},
	{
		name: "Missile Launcher",
		description: "Allows up to four Light or two Heavy (or AT) missiles to be fired at once.",
		get_max: function(selected_object) { return "u" },
		get_mod_cost: function(selected_object) {
			return 1;
		},
		get_cost: function(selected_object) {
			return 500000;
		},
		get_mod_effect: function(selected_object) {
			selected_object.has_missile_launcher = 1;
		}
	},
	{
		name: "Pace",
		description: "Increases the mech’s Pace by +4. (This cannot be taken with Speed Reduction.)",
		get_max: function(selected_object) { return 3 },
		get_mod_cost: function(selected_object) {
			return 1;
		},
		get_cost: function(selected_object) {
			return 5000 * selected_object.size;
		},
		get_mod_effect: function(selected_object) {
			selected_object.pace = selected_object.pace + 4;
		}
	},
	{
		name: "Passenger Compartment",
		description: "Cramped space for four passengers. Rescue mechs often use this Modification.",
		get_max: function(selected_object) { return 1 },
		get_mod_cost: function(selected_object) {
			return 1;
		},
		get_cost: function(selected_object) {
			return 5000;
		}
	},
	{
		name: "Reinforced Frame",
		description: "Increases Toughness of the chassis by +2.",
		get_max: function(selected_object) { return 3 },
		get_mod_cost: function(selected_object) {
			return 1;
		},
		get_cost: function(selected_object) {
			return 10000 * selected_object.size;
		},
		get_mod_effect: function(selected_object) {
			selected_object.toughness = selected_object.toughness + 2;
		}
	},
	{
		name: "Sensor Suite",
		description: "+4 Notice vs sound, motion, strong chemicals, radiation, or electrical fields up to 1000 yards.",
		get_max: function(selected_object) { return 1 },
		get_mod_cost: function(selected_object) {
			return 1;
		},
		get_cost: function(selected_object) {
			return 50000;
		}
	},
	{
		name: "Shields",
		description: "The walker is protected by an ablative energy field that absorbs 10×Size points of damage before it’s depleted. Apply all damage to the shield first, then any left over to the mech (AP counts as usual). Active shields detonate missiles and torpedoes before they hit, reducing their damage total by half. A walker may regenerate its Size in shield points if it makes no attacks in a round.",
		get_max: function(selected_object) { return 1 },
		get_mod_cost: function(selected_object) {
			return selected_object.size / 2;
		},
		get_cost: function(selected_object) {
			return 50000 * selected_object.size;
		},
	},
	{
		name: "Sloped Armor",
		description: "Non-energy, ballistic attacks against this vessel suffer a –2 penalty. It has no effect on energy attacks.",
		get_max: function(selected_object) { return 1 },
		get_mod_cost: function(selected_object) {
			return 2;
		},
		get_cost: function(selected_object) {
			return 5000 * selected_object.size;
		},
	},
	{
		name: "Speed Reduction",
		description: "The walker sacrifices speed for additional room. Subtract 2 from Pace and add half its Size in Mod slots (round down).",
		get_max: function(selected_object) { return 3 },
		get_mod_cost: function(selected_object) {
			return 0;
		},
		get_cost: function(selected_object) {
			return 20000 * selected_object.size;
		},
		get_mod_effect: function(selected_object) {
			selected_object.pace -=  2;
			selected_object.mods += selected_object.size / 2;
		}
	},
	{
		name: "Stealth System",
		description: "Radar-absorbing paint, heat baffles, scramblers, and other devices make the walker difficult to detect by vision or sensors. Those trying to attack or spot the mech subtract 4 from their rolls. The effect is triggered as a free action, but is negated any round in which the walker fires a weapon or emits some other non- cloakable signal such as radio signal or active sensor search.",
		get_max: function(selected_object) { return 1 },
		get_mod_cost: function(selected_object) {
			return selected_object.size;
		},
		get_cost: function(selected_object) {
			return 50000 * selected_object.size;
		}
	},
	{
		name: "Strength Enhancement ",
		description: "Add +2 to the walker’s Strength.",
		get_max: function(selected_object) { return 1 },
		get_mod_cost: function(selected_object) {
			return 1;
		},
		get_cost: function(selected_object) {
			return 5000 * selected_object.size;
		},
		get_mod_effect: function(selected_object) {
			selected_object.strength +=  2;
		}
	},
	{
		name: "Targeting System",
		description: "The walker’s internal sensors and computers are linked to all attached weapons. This compensates for movement, range, multi-actions, and the like, negating up to two points of Shooting penalties.",
		get_max: function(selected_object) { return 1 },
		get_mod_cost: function(selected_object) {
			return 1;
		},
		get_cost: function(selected_object) {
			return 10000  * selected_object.size;
		}
	}
);
