'use strict';

exports.BattleMovedex = {

  	 //MrLoser//
    away: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		id: "away",
		isNonstandard: true,
		isViable: true,
		name: "Away",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, mirror: 1,},
		self:{
		boosts:{
			def: 6, spd: 6,
		},
		},
		onHit: function (pokemon) {
			this.useMove("substitute", pokemon);
			this.useMove("lightscreen", pokemon);
			this.useMove("reflect", pokemon);
		},
		target: "self",
		type: "Flying",
	},
    //Avillez//
     icecu: {
		accuracy: 90,
		basePower: 120,
		category: "Physical",
		id: "icecu",
		isNonstandard: true,
		isViable: true,
		name: "Ice Cu",
		flags: {protect: 1, punch: 1,mirror: 1,},
		pp: 5,
		priority: 0,
	    self: {
			boosts: {
				atk: -2,
			},
		},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Ice Punch", target);

		},
		secondary: false,
		target: "normal",
		type: "Ice",
	},

	//Empo XV//
     lewdlick: {
		accuracy: 100,
		basePower: 80,
		category: "Special",
		id: "lewdlick",
		isNonstandard: true,
		isViable: true,
		flags: {protect: 1,mirror: 1,},
		name: "Lewd Lick",
		pp: 15,
		priority: 0,
	   secondary: {
			chance: 40,
			status: 'par',
		},
		onPrepareHit: function (target, source) {
			target.addVolatile('confusion');
			target.addVolatile('torment');
			target.addVolatile('healblock');
			target.addVolatile('attract');
			this.attrLastMove('[still]');
			this.add('-anim', source, "Dark Pulse", target);

		},
		target: "normal",
		type: "Dark",
	},

	//MarvelSix//
     ab00sebeam: {
		accuracy: 100,
		basePower: 80,
		category: "Special",
		id: "ab00sebeam",
		isNonstandard: true,
		isViable: true,
		name: "Ab00se Beam",
		pp: 15,
		forceSwitch: true,
		flags: {protect: 1,mirror: 1,},
		priority: -1,
	    secondary: {
			chance: 100,
			status: 'tox',
		},

		onPrepareHit: function (target, source) {
			target.addVolatile('taunt');
			this.attrLastMove('[still]');
			this.add('-anim', source, "Psycho Boost", target);
		   	this.add('c|Marvelsix|Sinta o poder do Ab00se!');
		},

		target: "normal",
		type: "Psychic",
	},

		//Halfway Crooks//
     banhammer: {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		id: "banhammer",
		isNonstandard: true,
		isViable: true,
		flags: {protect: 1, punch: 1,mirror: 1,},
		name: "BANHAMMER",
		pp: 10,
		priority: 0,
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Guardian of alola", target);
		   	this.add("raw|<div class=\"broadcast-red\"><b>Halfway Crooks baniu você</b></div>");
		},

		target: "normal",
		type: "Dark",
	},
	//Hunter of shadows//
     crasheioindigo: {
		accuracy: 100,
		category: "Status",
		id: "crasheioindigo",
		isNonstandard: true,
		isViable: true,
		name: "Crashei o indigo",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, authentic: 1},
		onHit: function (target) {
			if (target.deductPP(target.lastMove, 100)) {
				this.add("-activate", target, 'move: Crashei o indigo', this.getMove(target.lastMove).name, 100);
				return;
			}
			return false;
		},
		secondary: false,
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Hyperspace Hole", target);
		},

		target: "normal",
		type: "Ghost",
	},

	//Bluemander//
     banray: {
		accuracy: 80,
		category: "special",
		id: "banray",
		isNonstandard: true,
		isViable: true,
		basePower: 110,
		name: "Banray",
		pp: 15,
		flags: {protect: 1,mirror: 1,},
		priority: 0,
	   secondary: {
			chance: 10,
			boosts: {
				spd: -1,
			},
		},

		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Hyper Beam", target);
		},

		target: "normal",
		type: "Dark",
	},
	//Byenix lixo//
     roarofasheifasil: {
		accuracy: 100,
		basePower: 130,
		category: "special",
		id: "roarofasheifasil",
		isNonstandard: true,
		isViable: true,
		name: "Roar Of Ashei Fasil",
		pp: 10,
		flags: {protect: 1, sound:1,mirror: 1,},
		priority: 0,
	    self: {
			boosts: {
				spa: -1, spd: -1,
			},
		},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Roar Of Time", target);
			this.add('c|Byenix|Fassil');
		},

		target: "allAdjacent",
		type: "Dragon",
	},
	//Dr4xl3r//
     giantwatershuriken: {
		accuracy: 100,
		basePower: 90,
		category: "special",
		id: "giantwatershuriken",
		isNonstandard: true,
		isViable: true,
		name: "Giant Water Shuriken",
		pp: 10,
		flags: {protect: 1,mirror: 1,},
		priority: 0,
	    secondary: {
	    	chance: 20,
			volatileStatus: "flinch",
		},

		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Water Shuriken", target);
		},

		target: "normal",
		type: "Water",
	},
	//King1Sloth
	 pizzashield: {
		category: "status",
		id: "pizzashield",
		isNonstandard: true,
		isViable: true,
		name: "Pizza Shield",
		pp: 10,
		flags: {mirror: 1},
		volatileStatus: 'protect',
		priority: 4,
		stallingMove: true,
		onPrepareHit: function (pokemon) {
			return !!this.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit: function (pokemon) {
			pokemon.addVolatile('stall');
		},
		effect: {
			duration: 1,
			onStart: function (target) {
				this.add('-singleturn', target, 'Pizza Shield');
			}
		},

		onTryHit: function (source, pokemon) {

			if (pokemon.hp <= pokemon.maxhp / 4 || pokemon.maxhp === 1) {
				return false;
			}
			this.directDamage(source.maxhp / 4);
			this.useMove("stockpile",pokemon);
		},


		target: "self",
		type: "Normal",
	},
	//xArra comunista
	 superendeavor: {
		category: "physical",
		id: "superendeavor",
		isNonstandard: true,
		isViable: true,
		name: "Super Endeavor",
		pp: 10,
		priority: 0,
		multihit: 2,
		damage: 'level',
		secondaries: false,
		target: "normal",
		type: "Flying",
		flags: {mirror: 1,protect:1},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Endeavor", target);
		},
	},

		//cpt.lask//
     basscannon: {
		accuracy: 100,
		basePower: 100,
		category: "physical",
		id: "basscannon",
		isNonstandard: true,
		isViable: true,
		name: "Bass Cannon",
		pp: 15,
		flags: {protect: 1,mirror: 1,},
		priority: 0,
	    secondary: {
	    	chance: 25,
			volatileStatus: "flinch",
		},

		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
				this.add('-anim', source, "Aqua Jet", target);
			this.add('-anim', source, "Crabhammer", target);
		},

		target: "normal",
		type: "Water",
	},
	//vlayzer//
	 onepunchmonferno: {
		accuracy: 100,
		basePower: 130,
		category: "Physical",
		id: "onepunchmonferno",
		isNonstandard: true,
		isViable: true,
		name: "One Punch Monferno",
		target: "normal",
		type: "Fighting",
		pp: 5,
		flags: {protect: 1, punch: 1,mirror: 1,},
		priority: 0,
		effect: {
			duration: 1,
		},
		onPrepareHit: function (target, source) {
				this.attrLastMove('[still]');
			this.add('-anim', source, "Night Shade", target);
			this.add('-anim', source, "Dynamic Punch", target);

		},
		onAfterMove: function (pokemon, target, move) {
				if (target.hp <= 0){ 
				this.add('-anim', target, "Flash", target);
				this.add('-anim', target, "Explosion", target);
				}
			},
		},
	
		"sakuyasworld": {
		num: 604,
		accuracy: true,
		basePower: 0,
		category: "Status",
		id: "sakuyasworld",
		name: "Sakuya's World",
		pp: 10,
		priority: 3,
		flags: {},
		isZ: "vlayzernite",
		terrain: 'sakuyasworld',
		effect: {
				onFoeMaybeTrapPokemon: function (pokemon,source) {
				pokemon.maybeTrapped(true);
				source.maybeTrapped(true);
		},
			
			duration:3,
			onBeforeMove: function (pokemon) {
				if(pokemon.template.name === 'Monferno' || pokemon.template.name === 'Infernape'){
					return;
					
					}
				this.add('message', "In Sakuya's World, only Vlayzer can move!");
				return false;
		},
			onStart: function (battle, source, effect,target, move) {
					this.attrLastMove('[still]');
			        this.add('-anim', source, "Never Ending Nightmare", source);
					this.add('-fieldstart', "move: Sakuya's World");
					this.add("c|Vlayzer|Let's dance, until the end of our lives.");
			},
			onResidualOrder: 21,
			onResidualSubOrder: 2,
			onEnd: function () {
				this.add('-fieldend', "move: Sakuya's World");
			},
		},
		secondary: false,
		target: "all",
		type: "Normal",
		contestType: "Clever",
	},
	

	//inuchitai//
	 dragonknight: {
		accuracy: 95,
		basePower: 130,
		category: "physical",
		id: "dragonknight",
		isNonstandard: true,
		isViable: true,
		name: "Dragon Knight",
		pp: 10,
		flags: {protect: 1,mirror: 1,},
		priority: 0,
		boost: {  def:-1},
		onPrepareHit: function (target, source) {
				this.attrLastMove('[still]');
			this.add('-anim', source, "Outrage", target);

		},

		target: "normal",
		type: "Dragon",
	},
	//mrhaunted//
	 haterpower: {
		accuracy: 90,
		basePower: 100,
		category: "special",
		id: "haterpower",
		isNonstandard: true,
		isViable: true,
		name: "Hater Power",
		pp: 10,
		flags: {protect: 1,mirror: 1,},
		priority: 0,
		secondary: {  chance: 40, status: 'par'},
		onPrepareHit: function (target, source) {
				this.attrLastMove('[still]');
			this.add('-anim', source, "Thunder", target);

		},
		target: "normal",
		type: "Electric",
	},
	//i love peridot//
	youclod: {
		accuracy: 70,
		basePower: 100,
		category: "status",
		id: "youclod",
		isNonstandard: true,
		isViable: true,
		name: "YOU CLOD",
		pp: 10,
		flags: {protect: 1, reflectable: 1, mirror: 1, authentic: 1,sound:1},
		priority: 0,
		secondary: {  chance: 70, status: 'par'},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			target.addVolatile('confusion');
			target.addVolatile('torment');
			target.addVolatile('healblock');
			target.addVolatile('taunt');
			target.addVolatile('rage');
			this.add('-anim', source, "Boomburst", target);

		},
		target: "normal",
		type: "Bug",
	},
		//esse cara//
	yveltallvl200arrego: {
		accuracy: 100,
		basePower: 100,
		category: "status",
		id: "yveltallvl200arrego",
		isNonstandard: true,
		isViable: true,
		name: "yveltal lv 200 arrego",
		pp: 10,
		forceSwitch: true,
		flags: {reflectable: 1, mirror: 1, sound: 1, authentic: 1},
		priority: 0,
		secondary: { chance: 20, status: 'par'},
		onPrepareHit: function (target, source) {
			this.add('-anim', source, "Focus Blast", target);
		},
		target: "normal",
		type: "Fighting",
	},
		//Queju Bot//
	lolificacao: {
		accuracy: 100,
		basePower: 60,
		category: "special",
		id: "lolificacao",
		isNonstandard: true,
		isViable: true,
		name: "Lolificacao",
		pp: 10,
     	flags: {protect: 1, reflectable: 1, mirror: 1, authentic: 1},
		priority: 0,
		onHit: function (target, source) {
		this.add('-formechange', target, 'Kirlia', '[msg]');
		},
		onPrepareHit: function (target, source) {
				this.attrLastMove('[still]');
			this.add('-anim', source, "Scary Face", target);
		},
		target: "normal",
		type: "Dark",
	},
	//sekkei//
		haxpower: {
		accuracy: 100,
		category: "Status",
		id: "haxpower",
		isNonstandard: true,
		isViable: true,
		name: "Hax Power",
		pp: 10,
		volatileStatus: 'confusion',
		status: 'brn',
     	flags: {protect: 1, reflectable: 1, mirror: 1, authentic: 1},
		priority: 0,
		onPrepareHit: function (target, source) {
				this.attrLastMove('[still]');
			this.add('-anim', source, "Confuse Ray", target);
		},
		target: "normal",
		type: "Dark",
	},
		//mariobros2//
		cheesefirepunch: {
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		id: "cheesefirepunch",
		isNonstandard: true,
		isViable: true,
		name: "Cheese Fire Punch",
		pp: 15,
		secondary: {
			chance: 100,
			status: 'par'
		},
     	flags: {protect: 1, punch:1,mirror: 1,},
		priority: 1,
		onPrepareHit: function (target, source) {
		this.add('-anim', source, "Mach Punch", target);
		},
		target: "normal",
		type: "Fighting",
	},
	//mih//
	    "cm44rra": {
		category: "Status",
		id: "cm44rra",
		isNonstandard: true,
		isViable: true,
        name:"cm² -44rra",
        pp: 10,
		priority:0,
		accuracy: 100,
		target: "normal",
		type: "Dark",
		volatileStatus: 'confusion',
		status: 'par',
		boosts: {
			atk: 6,
		},
	    flags: {mirror: 1,protect:1,contact:1},
		onPrepareHit: function (target, source) {
		this.attrLastMove('[still]');
		this.add('-anim', source, "Foul Play", target);
		},

	   },
		//gslure
	thunderboost: {
		category: "Special",
		id: "thunderboost",
		basePower: 110,
		isNonstandard: true,
		isViable: true,
		name: "Thunder Boost",
		pp: 15,
     	flags: {protect:1,mirror: 1,},
		boost:{spa: 1, spd:1},
		target: "normal",
		type: "Electric",
		priority:0,
		onPrepareHit: function (target, source) {
			this.add('-anim', source, "Thunder", target);
		},

	},
	//hyogafodex//
		execucaoaurora: {
		category: "Special",
		id: "execucaoaurora",
		isNonstandard: true,
		isViable: true,
		name: "Execucao Aurora",
		basePower: 130,
		accuracy: 90,
		pp: 5,
		weather: 'hail',
     	flags: {protect:1, mirror: 1},
		secondary: {
			chance: 50,
			status: 'frz',
		},
		priority:0,
		target: "normal",
		type: "Ice",
		onPrepareHit: function (target, source) {
				this.attrLastMove('[still]');
			this.add('-anim', source, "Hail", target);
			this.add('-anim', source, "Quiver Dance", target);
			this.add('-anim', source, "Quiver Dance", target);
			this.add('-anim', source, "Blizzard", target);
		},

	},
		//powergens//
		ronaldofenomeno: {
		category: "Status",
		id: "ronaldofenomeno",
		isNonstandard: true,
		isViable: true,
		name: "Ronaldo Fenomeno",
		pp: 10,
		priority: 4,
     	flags: {snatch:1},
		boost: {
			chance: 50,
		atk:1,
		},
		target: "self",
		type: "Fire",
		onHit: function (target, source) {
			source.side.addSideCondition('lightscreen');
          	source.side.addSideCondition('reflect');
          	this.useMove("Protect",source);
		},
		onPrepareHit: function (target, source) {
			this.add('-anim', source, "Protect", target);
		},

	},
		//felipesoullx//
		earrape: {
		category: "Special",
		id: "earrape",
		basePower:120,
		accuracy:90,
		isNonstandard: true,
		isViable: true,
		priority: 0,
		name: "Ear Rape",
		pp: 15,
        flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
		boost: {
			chance: 20,
		volatileStatus: 'flinch',
		},
			target: "allAdjacent",
		type: "Flying",
		onPrepareHit: function (target, source) {
          	this.boost({spa:-2}, target, source);
          		this.attrLastMove('[still]');
			this.add('-anim', source, "Boomburst", target);
		},
		},
		//supercanarinho//
		divulgacao: {
		category: "Status",
		id: "divulgacao",
		basePower:120,
		accuracy:90,
		isNonstandard: true,
		isViable: true,
		name: "Divulgacao",
		forceSwitch: true,
		priority:0,
		pp: 5,
        flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
		secondary: {
		status: 'slp',
		},
		self: {
			boosts: {
				spa: -2,
			},
		},
			target: "allAdjacent",
		type: "Flying",
		onPrepareHit: function (target, source) {
          		this.attrLastMove('[still]');
			this.add('-anim', source, "Boomburst", target);
		},

	},
	//luckyryu//
		frogshield: {
		category: "Status",
		id: "frogshield",
		isNonstandard: true,
		isViable: true,
		name: "Frog Shield",
		pp: 5,
		priority: 4,
		flags: {mirror: 1},
		target: "self",
		type: "Water",
		stallingMove: true,
		volatileStatus: 'protect',
		secondary: false,
		onPrepareHit: function (pokemon) {
			return !!this.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit: function (pokemon) {
			pokemon.addVolatile('stall');
		},
		effect: {
			duration: 1,
			onStart: function (target) {
				this.add('-singleturn', target, 'Frog Shield');
			}
		},
		onHit: function (target) {
			if (target.hp <= target.maxhp / 4 || target.boosts.spa >= 6) {
				this.add('-fail', target, 'move: Frog Shield', '[weak]');
				return null;
			}
			this.directDamage(target.maxhp / 4);
			this.boost({spa: 1, spe:1}, target);
		},

		onTryHitPriority: 3,
			onTryHit: function (target, source, move) {
				if (target.hp <= target.maxhp / 4 || target.boosts.spa >= 6) {
				this.add('-fail', target, 'move: Frog Shield', '[weak]');
				return null;
			}
			else if (!move.flags['protect']) return;
				this.add('-activate', target, 'move: Frog Shield');

				return null;
		},
		onPrepareHit: function (target, source) {
				this.attrLastMove('[still]');
			this.add('-anim', source, "Protect", target);
		},

	},
	"glacialchaos": {
		num: 695,
		accuracy: true,
		basePower: 185,
		category: "Special",
		desc: "No additional effect.",
		shortDesc: "No additional effect.",
		id: "glacialchaos",
		name: "Glacial Chaos",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "poliwratite",
		secondary: false,
		target: "normal",
		type: "Ice",
		contestType: "Cool",
		
			onPrepareHit: function (target, source) {
				this.attrLastMove('[still]');
			this.add('-anim', source, "Extreme Evoboost", source);
			this.add('-anim', source, "Blizzard", target);

		},
	},

	// MacOSX//
		quedeliciacara: {
		category: "Status",
		id: "quedeliciacara",
		isNonstandard: true,
		isViable: true,
		name: "Que delicia cara",
		pp: 10,
		flags: {protect:1, mirror: 1},
		priority:0,
       boosts: {spa: 2},
		target: "self",
		type: "Fairy",
		onHit: function (target, source) {
			this.useMove("Substitute",source);
		},
		onPrepareHit: function (target, source) {
			this.add('-anim', source, "Tail Glow", target);
		},

	},
	//siirin//
		manyjewels: {
		category: "Special",
		id: "manyjewels",
		isNonstandard: true,
		isViable: true,
		name: "Many Jewels",
		pp: 10,
		target: "allAdjacent",
		flags: {protect:1,mirror:1},
		priority:0,
		type: "Dark",
		basePower: 75,
		accuracy:95,
		secondary: {
			chance: 100,
			spa: -1,
		},
		onPrepareHit: function (target, source) {
				this.attrLastMove('[still]');
			this.add('-anim', source, "Diamond Storm", target);
		},

	},
	//Cloud Monteiro//
		bulletrage: {
		category: "Physical",
		id: "bulletrage",
		isNonstandard: true,
		isViable: true,
		name: "Bullet Rage",
		pp: 10,
		target: "normal",
		type: "Steel",
		basePower: 30,
		flags: {protect:1, punch:1},
		multihit: 2,
		priority: 1,
		accuracy:100,
		secondary: {
			chance: 50,
			def: -1, spd: -1,
		},
		onPrepareHit: function (target, source) {
				this.attrLastMove('[still]');
			this.add('-anim', source, "Outrage", source);
			this.add('-anim', source, "Fairy Lock", target);
		},

	},
		//CssGabriel1200//
		potuguesvanish: {
		category: "Status",
		id: "potuguesvanish",
		isNonstandard: true,
		isViable: true,
		name: "Potugues Vanish",
		pp: 10,
		target: "self",
		flags: {snatch:1},
		priority:0,
		type: "Fighting",
		boosts:
			{
			atk: 1, spe:1, spa:1,
			},


		onPrepareHit: function (target, source) {
				this.attrLastMove('[still]');
			this.add('-anim', source, "Sacred Sword", source);
		},

	},
	//Darkmetaldragon simão fantasma bundao//
		largatixaimpact: {
		category: "Physical",
		id: "largatixaimpact",
		isNonstandard: true,
		isViable: true,
		name: "Largatixa Impact",
		pp: 15,
		accuracy: 95,
		basePower: 100,
		target: "normal",
		type: "Dragon",
		flags: {mirror:1,protect:1},
	    drain:[1,2],
		onPrepareHit: function (target, source) {
				this.attrLastMove('[still]');
			this.add('-anim', source, "Dragon Rush", target);
		},

	},
	//Chorume/
		eaecaralhow: {
		category: "Special",
		id: "eaecaralhow",
		isNonstandard: true,
		isViable: true,
		name: "EAE CARALHOW",
		pp: 15,
		accuracy: 95,
		basePower: 100,
		target: "normal",
		type: "Water",
	    drain:[1,2],
	    flags:{protect:1, mirror:1},
	    onEffectiveness: function (typeMod, type) {
		if (type === 'Water') return 1;
		},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('c| CHORUME|EAE CARALHOW');
			this.add('-anim', source, "Draco Meteor", target);
		},

	},
		//Waifuzinha/
		waifuguard: {
		category: "Status",
		id: "waifuguard",
		isNonstandard: true,
		isViable: true,
		name: "Waifu Guard",
		pp: 15,
		priority: 3,
		status: 'slp',
		accuracy: 80,
		target: "allAdjacentFoes",
		type: "Fairy",
	     flags: {protect: 1, mirror: 1, authentic: 1},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
				this.useMove('protect', source, target);
			this.add('-anim', source, "Protect", target);
		},

	},
	   //Pedro Greg/
		'determinacaododragao': {
		category: "Special",
		id: "determinacaododragao",
		isNonstandard: true,
		isViable: true,
		name: "Determinacao do Dragao",
		pp: 5,
		accuracy: 95,
		priority: 0,
		basePower: 100,
		target: "normal",
		type: "Dragon",
		willCrit:true,
	    flags:{protect:1, mirror:1},
	    secondary: {
			chance: 10,
			self: {
				boosts: {
					atk: 1,
					def: 1,
					spa: 1,
					spd: 1,
					spe: 1,
				},
			},
		},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Dragon Pulse", target);
		},

	},
	//VdK/
		vdd: {
		category: "Status",
		id: "vdd",
		isNonstandard: true,
		isViable: true,
		name: "Vdd",
		pp: 10,
		priority:0,
		target: "self",
		type: "Poison",
	    flags: {protect: 1, mirror: 1, authentic: 1},
	    self:{ boosts:{spa:2,spe:2,atk:2,def:2,spd:2}, },
		onPrepareHit: function (target, source) {
		this.add('c|VdK|vdd');
		this.attrLastMove('[still]');
		this.add('-anim', source, "Taunt", target);
		},

	   },
	   	//Zyne/
		kamikaze: {
		category: "Physical",
		id: "kamikaze",
		isNonstandard: true,
		isViable: true,
		name: "Kamikaze",
		pp: 10,
		priority:5,
		accuracy: 100,
		target: "allAdjacentFoes",
		ignoreEvasion: true,
		ignoreDefensive: true,
		type: "Dark",
	    flags: {authentic: 1},
	   	basePower: 9999999,
  		selfdestruct: "always",
		onPrepareHit: function (target, source, pokemon) {
				this.attrLastMove('[still]');
		this.add('-anim', source, "Explosion", target);
		},

	   },
	   	//Mr beam/
		vaiseduder: {
		category: "Special",
		id: "vaiseduder",
		isNonstandard: true,
		isViable: true,
		name: "Vai se Duder",
		pp: 10,
		priority:0,
		basePower:90,
		target: "normal",
		type: "Fire",
	     flags: {mirror: 1,protect:1},
	     secondary:{
	     	chance: 20, spd:-1,atk:-1,spe:-1,def:-1,
	     },
		onPrepareHit: function (target, source) {
				this.attrLastMove('[still]');
		this.add('-anim', source, "Overheat", target);
		},

	   },
	   //Clippy //
		lock: {
		category: "Special",
		id: "lock",
		isNonstandard: true,
		isViable: true,
		name: "Lock",
		pp: 10,
		priority:0,
		basePower: 120,
		target: "normal",
		type: "Steel",
	     flags: {mirror: 1,protect:1},
		onPrepareHit: function (target, source) {
				this.attrLastMove('[still]');
				let hazards = ['stealthrock','spikes','toxicspikes'].randomize();
				target.side.addSideCondition(hazards[0]);
				target.side.addSideCondition(hazards[1]);
		this.add('-anim', source, "Tri Attack", target);
		},

	   },
	   
	   //ggspok
	opafion: {
		category: "Special",
		id: "opafion",
		basePower: 110,
		isNonstandard: true,
		isViable: true,
		name: "Opa Fion",
		pp: 15,
     	flags: {protect:1, mirror: 1,},
		secondary: {
			chance: 100,
			self: {
				boosts: {
					spa: 1, spd:1,
				},
			},
		},
		target: "normal",
		type: "Water",
		priority:0,
		onPrepareHit: function (target, source) {
			this.add('-anim', source, "Origin Pulse", target);
		},

	},
	
	 bullyingarte: {
		accuracy: 80,
		category: "Status",
		id: "bullyingarte",
		isNonstandard: true,
		isViable: true,
		name: "Bullying Arte",
		pp: 15,
		flags: {protect: 1, reflectable: 1, mirror: 1, authentic: 1},
		priority: 0,
		self:{
		boosts: { spa:1,spe:1},
		},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
				target.addVolatile('taunt');
			this.add('-anim', source, "Taunt", target);
		},

		target: "normal",
		type: "Dark",
	},
	//leysa//
	hotkiss: {
		category: "Special",
		id: "hotkiss",
		isNonstandard: true,
		isViable: true,
		name: "Hot Kiss",
		basePower: 90,
		pp: 10,
		priority:0,
     	flags: {protect:1, mirror: 1,},
		secondary: {
			chance: 40,
			volatileStatus: "attract"},
		target: "normal",
		type: "Fire",
		onEffectiveness: function (typeMod, type) {
		if (type === 'Water') return 1;
		},
		onPrepareHit: function (target, source) {
			this.add('-anim', source, "Blue Flare", target);
		},

	},
		secretweb: {
		category: "Status",
		id: "secretweb",
		isNonstandard: true,
		isViable: true,
		name: "Secret Web",
		pp: 10,
		priority:0,
     	flags: {protect:1, mirror: 1,},
		effect: {
			onStart: function (side) {
				this.add('-sidestart', side, 'move: Sticky Web');
				this.add('-sidestart', side, 'move: Stealth Rock');
			},
			onSwitchIn: function (pokemon) {
				if (!pokemon.isGrounded()) return;
				this.add('-activate', pokemon, 'move: Sticky Web');
				this.boost({spe: -1}, pokemon, pokemon.side.foe.active[0], this.getMove('stickyweb'));
				
				let typeMod = this.clampIntRange(pokemon.runEffectiveness('Rock'), -6, 6);
				this.damage(pokemon.maxhp * Math.pow(2, typeMod) / 8);
			},
		},
			onHit: function (target) {
			target.clearBoosts();
			this.add('-clearboost', target);
		},
		target: "normal",
		type: "Bug",
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "String Shot", target);
		},

	},
	//okira//
	"okirapunch": {
		num: 187,
		accuracy: true,
		basePower: 0,
		category: "Status",
		id: "okirapunch",
		name: "OKIRA PUNCH",
		pp: 10,
		priority: 0,
		flags: {snatch: 1},
		onHit: function (target) {
			if (target.hp <= target.maxhp / 2 || target.boosts.spa >= 6) { 
				return false;
			}
				target.addVolatile('endure');
			this.directDamage(target.maxhp * 3 / 4);
			this.boost({spa: 12}, target);
		},
		secondary: false,
		target: "self",
		type: "Normal",
		zMoveEffect: 'heal',
		contestType: "Cute",
			onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Fire Punch", source);
		},
	},
	   
	   	//wiw roxie //
		tirodelixotopper: {
		category: "Physical",
		id: "tirodelixotopper",
		isNonstandard: true,
		isViable: true,
		name: "Tiro de Lixo Topper",
		pp: 15,
		priority:0,
		basePower: 110,
		target: "normal",
		type: "Poison",
		effect: {
			onStart: function (side) {
				this.add('-sidestart', side, 'Spikes');
				this.add('-sidestart', side, 'Toxic Spikes');
				this.effectData.layers = 1;
			},
			onRestart: function (side) {
				if (this.effectData.layers >= 3) return false;
				this.add('-sidestart', side, 'Spikes');
				this.effectData.layers++;
			},
			onSwitchIn: function (pokemon) {
				if (!pokemon.isGrounded()) return;
				let damageAmounts = [0, 3, 4, 6]; // 1/8, 1/6, 1/4
				this.damage(damageAmounts[this.effectData.layers] * pokemon.maxhp / 24);
			},
		},
	     flags: {mirror: 1,protect:1},
			onPrepareHit: function (target, source) {
				this.attrLastMove('[still]');
			this.add('-anim', source, "Gunk Shot", target);
		},

	   },
	    //Lord Vinny 18//
		"juukenhouhakkerokujuuyonshou": {
		category: "Physical",
		id: "juukenhouhakkerokujuuyonshou",
		isNonstandard: true,
		isViable: true,
		name: "Juukenhou Hakke Rokujuuyon Shou",
		pp: 15,
		priority:1,
		accuracy: 100,
		basePower: 110,
		target: "normal",
		type: "Bug",
		secondaries: [
			{
				chance: 30,
				status: 'par',
			}, {
				chance: 100,
				volatileStatus: 'taunt',
			},

		],
			self: {
			boosts: {
				atk: 1, def:1,
			},
		},
	    flags: {mirror: 1,protect:1},
		onPrepareHit: function (target, source) {
				this.attrLastMove('[still]');
		this.add('-anim', source, "Geomancy", source);
		this.add('-anim', source, "Geomancy", source);
		this.add('-anim', source, "Close Combat", target);
		},

	   },
	   //Loro Jomse//
		puraskill: {
		category: "Status",
		id: "puraskill",
		isNonstandard: true,
		isViable: true,
		name: "Pura Skill",
		pp: 5,
		priority:0,
		basePower: 110,
		target: "normal",
		type: "Flying",
		accuracy: 80,
		secondary:
			{
				chance: 30,
				status: 'par',
			},
	    flags: {mirror: 1,protect:1, sound:1},
		onPrepareHit: function (target, source) {
		this.useMove('substitute', source, source);
			this.attrLastMove('[still]');
		this.add('-anim', source, "Chatter", target);
		},

	   },

	    //Slayer Berserk//
		punhetaquadrupla: {
		category: "Physical",
		id: "punhetaquadrupla",
		isNonstandard: true,
		isViable: true,
		name: "Punheta Quadrupla",
		pp: 5,
		priority:0,
		basePower: 120,
		target: "normal",
		type: "Fighting",
		accuracy: 100,
		recoil: [1,4],
		secondary: {
			chance: 100,
			self: {
				boosts: {
					spe: 1, spd: 1
				}
			}
		},
	    flags: {mirror: 1,protect:1},
		

	   },
	    //Demmonic//
		sarradalendaria: {
		category: "Physical",
		id: "sarradalendaria",
		isNonstandard: true,
		isViable: true,
		name: "Sarrada Lendária",
		pp: 5,
		priority:0,
		basePower: 130,
		target: "normal",
		type: "Fighting",
		accuracy: 85,
		recoil:[1,4],
    	secondary: {
			chance: 100,
			self: {
				boosts: {
				atk: 1, def: 1, spe: -1,
				}
			}
		},
	    flags: {mirror: 1,protect:1},
		onPrepareHit: function (target, source) {
		this.attrLastMove('[still]');
		this.add('-anim', source, "Superpower", target);
		},
	   },

	     //Hanako Ikezawa//
		ikezawaignition: {
		category: "Special",
		id: "ikezawaignition",
		isNonstandard: true,
		isViable: true,
		name: "Ikezawa Ignition",
		pp: 10,
		priority:0,
		basePower: 180,
		target: "normal",
		type: "Fire",
		accuracy: 95,
		flags: {protect: 1, mirror: 1},
		self: {
			boosts: {
				spe: -1,
				def: -1,
				spd: -1,
			},
		},
		onPrepareHit: function (target, source) {
		this.attrLastMove('[still]');
		this.add('-anim', source, "Fire Blast", target);
		},

	   },
	    //dblast//
	    portugahaxspike: {
		category: "Physical",
		id: "portugahaxspike",
		isNonstandard: true,
		isViable: true,
		name: "Portuga Hax Spike",
		pp: 15,
		priority:0,
		basePower: 60,
		target: "normal",
		type: "Fire",
		accuracy: 95,
	    secondaries: [
			{
				chance: 40,
				status: 'par',
			},
			{
				chance: 40,
				status: 'slp',
			},
			{
				chance: 40,
				status: 'frz',
			},
			{
				chance: 40,
				status: 'tox',
			},
			{
				chance: 40,
				status: 'brn',
			},
			{
				chance: 40,
				status: 'psn',
			},
			{
				chance: 30,
				volatileStatus: 'flinch',
			},
		],
	    flags: {mirror: 1,protect:1, contact:1},
		onPrepareHit: function (target, source) {
		this.attrLastMove('[still]');
		this.add('-anim', source, "Flare Blitz", target);
		},

	   },
	    //feioso ou sky dust//
	   "abraco": {
		num: 303,
		accuracy: true,
		basePower: 0,
		category: "Status",
		id: "abraco",
		isViable: true,
		name: "Abraco",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		heal: [1, 2],
		secondary: false,
		target: "self",
		type: "Water",
		volatileStatus: 'ingrain',
		volatileStatus: 'aquaring',
		sideCondition: 'safeguard',
	},
	  //Rezyalv//
	    mirrorglitch: {
		category: "Status",
		accuracy: true,
		basePower: 0,
		id: "mirrorglitch",
		isNonstandard: true,
		isViable: true,
		name: "Mirror Glitch",
		pp: 2.5,
		priority:5,
		target: "self",
		type: "Fighting",
	    flags: {},
	    stallingMove: true,
	    secondary: false,
	    recoil: [1,4],
		volatileStatus: 'mirrorglitch',
		onPrepareHit: function (pokemon) {
			return !!this.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit: function (pokemon,target) {
			pokemon.addVolatile('stall');
		},

		effect: {
			duration: 1,
			onStart: function (target) {
				this.add('-singleturn', target, 'Mirror Glitch');
			},
			onTryHitPriority: 3,
			onTryHit: function (target, source, move,pokemon) {
				if (!move.flags['protect']) return;
				this.add('-activate', target, 'Mirror Glitch');
				if (move.flags['mirror'] || !target.lastMove || !this.getMove(target.lastMove).flags['mirror']) {
			this.useMove(move, this.effectData.target, source, target, this.getMove("Mirror Glitch"));
				}
				var lockedmove = source.getVolatile('lockedmove');
				if (lockedmove) {
					// Outrage counter is reset
					if (source.volatiles['lockedmove'].duration === 2) {
						delete source.volatiles['lockedmove'];
					}
				}
				return null;


			},

		},

	    },

		//dragon500//
	    amvmaistriste: {
		category: "Status",
		id: "amvmaistriste",
		isNonstandard: true,
		isViable: true,
		name: "AMV mais triste",
		pp: 10,
		priority:0,
		target: "normal",
		type: "Flying",
		accuracy: 100,
		status: 'slp',
	    flags: {mirror: 1,protect:1},
		onPrepareHit: function (target, source) {
		this.attrLastMove('[still]');
		this.add('-anim', source, "Spore", target);
		this.add('c|dragon500|https://www.youtube.com/watch?v=zGTvOSve3dU');
		},

	   },
	   //Aurorra//
	    divinestar: {
		category: "Status",
		id: "divinestar",
		isNonstandard: true,
		isViable: true,
		name: "Divine Star",
		pp: 5,
		priority:0,
		target: "self",
		type: "Fairy",
	    flags: {mirror: 1,protect:1},
		onPrepareHit: function (target, source) {
				this.useMove('aromatherapy', target, target);
				 this.useMove('softboiled', target, target);
				  this.useMove('calm mind', target, target);
		this.attrLastMove('[still]');
		this.add('-anim', source, "wish", target);
		},

	   },
	   //Dragoniru//
	    randompower: {
		category: "Physical",
		id: "randompower",
		isNonstandard: true,
		isViable: true,
		name: "Random Power",
		pp: 10,
		priority:0,
		basePower: 80,
		target: "normal",
		type: "Normal",
	    flags: {mirror: 1,protect:1, contact:1},
	    	secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		onPrepareHit: function (target, source) {
		this.attrLastMove('[still]');
		this.add('-anim', source, "Double Edge", target);
		},

	   },
	    //cara que n sei falar o nome//
	    supercoolglasses: {
		category: "Physical",
		id: "supercoolglasses",
		isNonstandard: true,
		isViable: true,
		name: "Super Cool Glasses",
		pp: 10,
		priority:0,
		basePower: 120,
		target: "normal",
		type: "Dark",
		recoil: [1,4],
	    flags: {mirror: 1, contact:1},
	    self: {
			boosts: {
				def: -1,
			},
		},
			onAfterHit: function (target, source) {
			if (source.hp) {
				let item = target.takeItem();
				if (item) {
					this.add('-enditem', target, item.name, '[from] move: Super Cool Glasses', '[of] ' + source);
				}
			}
		},
		onPrepareHit: function (target, source) {
		this.attrLastMove('[still]');
		this.add('-anim', source, "Scary Face", target);
		this.add('-anim', source, "Brutal Swing", target);
		},

	   },
	   //ggggd//
	    pipidance: {
		category: "Status",
		id: "pipidance",
		isNonstandard: true,
		isViable: true,
		name: "Pipi Dance",
		pp: 15,
		priority:4,
		target: "self",
		type: "Dark",
	    flags: {mirror: 1,protect:1},
		onPrepareHit: function (target, source) {
		this.useMove('shiftgear', target, target);
		this.useMove('protect', target, target);
		this.attrLastMove('[still]');
		this.add('-anim', source, "Dragon Dance", target);
		},

	   },
	   //closedbeta//
	    marlborostrike: {
		category: "Physical",
		id: "marlborostrike",
		isNonstandard: true,
		isViable: true,
		name: "Marlboro Strike",
		pp: 5,
		priority:0,
		basePower: 120,
		accuracy: 100,
		target: "normal",
		type: "Poison",
		volatileStatus:'gastroacid',
	    flags: {mirror: 1,protect:1},
	    secondary: {chance: 100, status:'tox',},
	    onTryHit: function (pokemon) {
			let bannedAbilities = {multitype:1, stancechange:1};
			if (bannedAbilities[pokemon.ability]) {
				return false;
			}
		},
		effect: {
			onStart: function (pokemon) {
				this.add('-endability', pokemon);
				this.singleEvent('End', this.getAbility(pokemon.ability), pokemon.abilityData, pokemon, pokemon, 'gastroacid');
			},
		},
		onPrepareHit: function (target, source) {
		this.attrLastMove('[still]');
		this.add('-anim', source, "Poison Jab", target);
		},

	   },
	   //zikafeliped//
	    vireimod: {
		category: "Special",
		id: "vireimod",
		isNonstandard: true,
		isViable: true,
		name: "Virei Mod",
		pp: 10,
		priority:0,
		basePower: 100,
		accuracy:100,
		target: "normal",
		type: "Bug",
	    flags: {mirror: 1,protect:1, sound:1},
	    secondary: {chance: 100, status:'tox',},
		onPrepareHit: function (target, source) {
		this.attrLastMove('[still]');
		this.add('-anim', source, "Bug Buzz", target);
		},

	   },
	   //lukesweep//
	    mindexplosion: {
		category: "Special",
		id: "mindexplosion",
		isNonstandard: true,
		isViable: true,
		name: "Mind Explosion",
		pp: 15,
		priority:0,
		basePower: 120,
		accuracy:100,
		target: "allAdjacentFoes",
		type: "Fighting",
	    flags: {mirror: 1,protect:1},
		onPrepareHit: function (target, source) {
		this.attrLastMove('[still]');
		this.add('-anim', source, "Psycho Boost", target);
		},

	   },
	    //crat comuna//
	    praisearceus: {
		category: "Status",
		id: "praisearceus",
		isNonstandard: true,
		isViable: true,
		name: "Praise Arceus",
		pp: 10,
		priority:0,
		target: "self",
		type: "Normal",
	    flags: {mirror: 1,protect:1},
	    boosts: {atk: 1, def:1, spa:1, spd:1},
		onPrepareHit: function (target, source) {
		this.attrLastMove('[still]');
		this.add('-anim', source, "Morning Sun", target);
		},

	   },
	    //zepanda//
	    troslei: {
		category: "Status",
		id: "troslei",
		isNonstandard: true,
		isViable: true,
		name: "Troslei",
		pp: 5,
		priority:0,
		target: "self",
		type: "Dark",
	    flags: {mirror: 1,protect:1},
	    boosts: {def:2,spd:2},
		onPrepareHit: function (target, source) {
		this.attrLastMove('[still]');
		this.add('-anim', source, "Taunt", target);
		},

	   },
	     //mb shadowmaze//
	    veriputaco: {
		category: "Physical",
		id: "veriputaco",
		isNonstandard: true,
		isViable: true,
		name: "Veri Putaco",
		pp: 15,
		basePower: 110,
		priority:0,
		target: "normal",
		type: "Steel",
	    flags: {mirror: 1,protect:1,contact:1},
	    secondary: {
			chance: 30,
			self: {
				boosts: {
					spe: 1
				}
			}
		},
		onPrepareHit: function (target, source) {
		this.attrLastMove('[still]');
		this.add('-anim', source, "Iron Head", target);
		},

	   },
	   //cheshire//
	    maldicaodapernacabeluda: {
		category: "Status",
		id: "maldicaodapernacabeluda",
		isNonstandard: true,
		isViable: true,
		name: "MALDICAO DA PERNA CABELUDA",
		pp: 10,
		priority:0,
		target: "normal",
		type: "Ghost",
		volatileStatus: 'disable',
		 flags: {mirror: 1,protect:1},
		onPrepareHit: function (target, source) {
		this.attrLastMove('[still]');
			target.addVolatile('encore');
		this.add('-anim', source, "Oblivion Wing", target);
		},

	   },
	    //brunov8//
	    penisplay: {
		category: "Physical",
		id: "penisplay",
		isNonstandard: true,
		isViable: true,
		name: "Penis Play",
		pp: 15,
		basePower: 100,
		priority:0,
		target: "normal",
		type: "Steel",
	    flags: {mirror: 1,protect:1,contact:1},
	    secondary: {
			chance: 30,
			self: {
				boosts: {
					spe: 1
				}
			}
		},
		onPrepareHit: function (target, source) {
		this.attrLastMove('[still]');
		this.add('-anim', source, "Meteor Mash", target);
		},

	   },
	    //mula shiny//
	    dormeporra: {
		category: "Status",
		id: "dormeporra",
		isNonstandard: true,
		isViable: true,
		name: "DORME PORRA",
		pp: 10,
		priority:0,
		target: "normal",
		type: "Normal",
	    flags: {mirror: 1,protect:1},
	    status: 'slp',
	    secondary:{volatileStatus:'torment'},
		onPrepareHit: function (target, source) {
		this.attrLastMove('[still]');
		this.add('-anim', source, "Dark Void", target);
		},

	   },
	   //Spl4sh//
	    splashersrevenge: {
		category: "Status",
		id: "splashersrevenge",
		isNonstandard: true,
		isViable: true,
		name: "Splashers Revenge",
		pp: 20,
		priority:0,
		basePower: 8,
		accuracy: 85,
		target: "normal",
		type: "Flying",
	    flags: {mirror: 1,protect:1,contact:1},
	   secondary: {
			chance: 40,
			self: {
				boosts: {
					atk: 1,
					def: 1,
					spa: 1,
					spd: 1,
					spe: 1,
				},
			},
		},
		onMoveFail: function (target, source, move) {
			this.damage(source.maxhp / 4, source, source, 'splashersrevenge');
		},
		onPrepareHit: function (target, source) {
		this.attrLastMove('[still]');
		this.add('-anim', source, "Splash", target);
		},

	   },


        //w ding gaster//
	    gasterblaster: {
		category: "Special",
		id: "gasterblaster",
		isNonstandard: true,
		isViable: true,
		name: 'Gaster Blaster',
		pp: 10,
		priority:0,
		accuracy: 85,
		basePower:120,
		target: "normal",
		type: "Dark",
	    flags: {mirror: 1,protect:1},
	    secondary:{chance:100, status:'tox'},
		onPrepareHit: function (target, source) {
		this.attrLastMove('[still]');
		this.add('-anim', source, "Hyper Beam", target);
		},

	   },
       //sonic213//
	    velocidadedaluz: {
		category: "Physical",
		id: "velocidadedaluz",
		isNonstandard: true,
		isViable: true,
        name:"Velocidade Da Luz",
        pp: 10,
		priority:3,
		accuracy: 95,
		basePower:70,
		volatileStatus: 'flinch',
		target: "normal",
		type: "Flying",
	    flags: {mirror: 1,protect:1},
	    secondary: {
			chance: 50,
			self: {
				boosts: {
					spe: 1
				}
			}
		},
	    onTry: function (pokemon, target) {
			if (pokemon.activeTurns > 1) {
				this.add('-fail', pokemon);
				this.add('-hint', "Velocidade da luz only works on your first turn out.");
				return null;
			}
		},
		onPrepareHit: function (target, source) {
		this.attrLastMove('[still]');
		this.add('-anim', source, "Extreme Speed", target);
		this.add('-anim', target, "Hurricane", target);
		},

	   },
	   //Mixell//
	    cvblast: {
		category: "Physical",
		id: "cvblast",
		isNonstandard: true,
		isViable: true,
        name:"CV Blast",
        pp: 10,
		priority:0,
		accuracy: 80,
		basePower:100,
		target: "normal",
		type: "Fire",
	    flags: {mirror: 1,protect:1,contact:1},
	    secondary:{chance:80, volatiteStatus:'flinch'},
		onPrepareHit: function (target, source) {
		this.attrLastMove('[still]');
		this.add('-anim', source, "V Create", target);
		},

	   },
       //MrBot//
	    zerotol: {
		category: "Physical",
		id: "zerotol",
		isNonstandard: true,
		isViable: true,
        name:"zerotol",
        pp: 10,
		priority:0,
		accuracy: 100,
		basePower: 120,
		target: "normal",
		type: "Fairy",
		ignoreAbility: true,
		ignoreEvasion: true,
		ignoreDefensive: true,
		recoil: [1,4],
		secondary: false,
	    flags: {mirror: 1,protect:1,contact:1},
		onPrepareHit: function (target, source) {
		this.attrLastMove('[still]');
		this.add('-anim', source, "Play Rough", target);
		},

	   },
	   //germinha//
	    corrupto: {
		category: "Physical",
		id: "corrupto",
		isNonstandard: true,
		isViable: true,
        name:"CORRUPTO",
        pp: 10,
		priority:0,
		accuracy: 50,
		target: "normal",
		type: "Dark",
		ohko: true,
		secondary: false,
	    flags: {mirror: 1,protect:1,contact:1},
		onPrepareHit: function (target, source) {
		this.attrLastMove('[still]');
		this.add('-anim', source, "Final Gambit", target);
		},
        onMoveFail: function (target, source, move) {
			this.damage(source.maxhp / 1, source, source, 'corrupto');
		},
	   },
       //MarcoDiNatale//
        tempestaitaliana: {
		category: "Special",
		id: "tempestaitaliana",
		isNonstandard: true,
		isViable: true,
		name: "Tempesta Italiana",
		pp: 15,
		priority:0,
		basePower: 10,
		target: "normal",
		type: "Dark",
		onPrepareHit: function (target, source,pokemon) {
				this.attrLastMove('[still]');
		 this.add('-anim', source, "Draco Meteor", target);
		this.useMove('sludgebomb', source, target);
		this.useMove('thunder',source, target);
		this.useMove('fireblast', source, target);
		},
		
		//doremifacuzi//
		 argumentosdeesquerda: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		id: "argumentosdeesquerda",
		isViable: true,
		name: "Argumentos de Esquerda",
		pp: 10,
		priority: 4,
		flags: {},
		stallingMove: true,
		volatileStatus: 'argumentosdeesquerda',
		onTryHit: function (pokemon) {
			return !!this.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit: function (pokemon) {
			pokemon.addVolatile('stall');
		},
		effect: {
			duration: 1,
			onStart: function (target) {
				this.add('-singleturn', target, 'Protect');
			},
			onTryHitPriority: 3,
			onTryHit: function (target, source, move, pokemon) {
				if (!move.flags['protect'] || move.category === 'Status') return;
				this.add('-activate', target, 'move: Protect');
				let lockedmove = source.getVolatile('lockedmove');
				if (lockedmove) {
					if (source.volatiles['lockedmove'].duration === 2) {
						delete source.volatiles['lockedmove'];
					}
				}
				if (move.flags['protect']) {
					this.useMove('thunderwave', target,source);
				   	this.useMove('stockpile', target,source);
					this.boost({atk:-1,spa:-1, spe:-1}, source, target, this.getMove("Argumentos de Esquerda"));
				}
				return null;
			},
		},
		secondary: false,
		target: "self",
		type: "Steel",
	},
 "soulsave": {
		category: "Special",
		id: "soulsave",
		isViable: true,
        name:"Soul Save",
        pp: 10,
		priority:0,
		accuracy: 100,
		basePower: 55,
		target: "normal",
		type: "Grass",
		multihit: [1,2],
		secondary: false,
		volatileStatus: 'leechseed',
	    flags: {mirror: 1,protect:1,contact:1},
		onPrepareHit: function (target, source) {
		this.attrLastMove('[still]');
	 	this.add('c|xInsrew|Souls that have been trapped.');
	 	this.add('c|xInsrew|Imprisoned and embarrassed.');
	 	this.add('c|xInsrew|Tormented and mocked.');
	 	this.add('c|xInsrew|Maddened with frustration.');
	 	this.add('c|xInsrew|Now is the time to rise!');
	 	this.add('c|xInsrew|Your saviour is here!');
	 	this.add('c|xInsrew|Run with the speed of one thousand ponies and be free!');
		this.add('-anim', source, "Never Ending Nightmare", target);
		},

	   },
	  	"crash": {
		num: 161,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		desc: "Has a 20% chance to either burn, freeze, or paralyze the target.",
		shortDesc: "20% chance to paralyze or burn or freeze target.",
		id: "triattack",
		isViable: true,
		name: "Tri Attack",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 20,
			onHit: function (target, source) {
				let result = this.random(3);
				if (result === 0) {
					target.trySetStatus('brn', source);
				} else if (result === 1) {
					target.trySetStatus('par', source);
				} else {
					target.trySetStatus('frz', source);
				}
			},
		},
		target: "normal",
		type: "Normal",
		zMovePower: 160,
		contestType: "Beautiful",
	},
	"haxmonsterrain": {
		num: 604,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "For 5 turns, the terrain becomes haxmons terrain. During the effect, the power of Electric-type attacks made by grounded Pokemon is multiplied by 1.5 and grounded Pokemon cannot fall asleep; Pokemon already asleep do not wake up. Camouflage transforms the user into an Electric type, Nature Power becomes Thunderbolt, and Secret Power has a 30% chance to cause paralysis. Fails if the current terrain is haxmons terrain.",
		shortDesc: "5 turns. Grounded: +Electric power, can't sleep.",
		id: "haxmonsterrain",
		name: "haxmons terrain",
		pp: 10,
		priority: 0,
		flags: {nonsky: 1},
		terrain: 'haxmonsterrain',
		effect: {
		onModifyMove: function (move) {
			if (move.accuracy !== true && move.accuracy < 100) move.accuracy = 0;
			move.willCrit = true;
			if (move.secondaries) {
				for (var i = 0; i < move.secondaries.length; i++) {
					move.secondaries[i].chance = 100;
				}
			}
		},
			onStart: function (battle, source, effect) {
				if (effect && effect.effectType === 'Ability') {
					this.add('-fieldstart', 'move: haxmons terrain', '[from] ability: ' + effect, '[of] ' + source);
				} else {
					this.add('-fieldstart', 'move: haxmons terrain');
				}
			},
			onResidualOrder: 21,
			onResidualSubOrder: 2,
			onEnd: function () {
				this.add('-fieldend', 'move: haxmons terrain');
			},
		},
		secondary: false,
		target: "all",
		type: "Electric",
		zMoveBoost: {spe: 1},
		contestType: "Clever",
	},
	  
},
};


