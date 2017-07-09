 'use strict'
 exports.BattleAbilities = {
 //Vlayzer//
      "heropride": {
		onAfterEachBoost: function (boost, target, source) {
			if (!source || target.side === source.side) {
				return;
			}
			var statsLowered = false;
			for (var i in boost) {
				if (boost[i] < 0) {
					statsLowered = true;
				}
			}
			if (statsLowered) {
				this.boost({atk: 2});
			}
		},
		onBasePower: function (basePower, attacker, defender, move) {
			if (move.flags["punch"]) {
				return this.chainModify(1.5);
			}
		},
		onAfterDamage: function (damage, target, source, move) {
			if (!target.hp) return;
			if (move && move.effectType === "Move" && move.crit) {
				target.setBoost({spe: 6, atk: 6});
				this.add("-setboost", target, "spe", 12,"atk", 12, "[from] ability: Hero Pride");
				this.add("-ability", pokemon, "Hero Pride");
			}		
		},
	    
		id: "heropride",
		isNonstandard: true,
		name: "Hero Pride",
	},
	
	//Sekkei//
	"haxisreal": {
		onModifyPriority: function (priority, pokemon, target, move) {
			if (move && move.category === 'Status') {
				return priority + 1;
			}
		},
		onModifyMove: function (move) {
			if (move && move.category === 'Status') {
				move.pranksterBoosted = true;
			}
		},
		onSwitchOut: function (pokemon) {
			pokemon.heal(pokemon.maxhp / 3);
		},
		id: "haxisreal",
		isNonstandard: true,
		name: "Hax is Real",
	},
	//Siirin//
	"prankbounce": {
			onModifyPriority: function (priority, pokemon, target, move) {
			if (move && move.category === 'Status') {
				return priority + 1;
			}
		},
		onModifyMove: function (move) {
			if (move && move.category === 'Status') {
				move.pranksterBoosted = true;
			}
		},
		onDamage: function (damage, target, source, effect) {
			if (effect.effectType !== "Move") {
				return false;
			}
		},
		id: "prankbounce",
		isNonstandard: true,
		name: "Prank Bounce",
	},
	//Dr4xl3r//
	"adaptean": {
		onPrepareHit: function (source, target, move) {
			var type = move.type;
			if (type && type !== "???" && source.getTypes().join() !== type) {
				if (!source.setType(type)) return;
				this.add("-start", source, "typechange", type, "[from] Adaptean");
			}
		},
		onModifyMove: function (move) {
			move.stab = 2;
		},
		id: "adaptean",
		isNonstandard: true,
		name: "Adaptean",
	},
	//I Ship Lapidot//
		"fieryvision": {
		onTryHit: function (target, source, move) {
			if (target !== source && move.type === "Fire") {
				if (!this.boost({spe:1})) {
					this.add("-immune", target, "[msg]");
				}
				return null;
			}
		},
		onSourceAccuracy: function (accuracy) {
			if (typeof accuracy !== "number") return;
			this.debug("compoundeyes - enhancing accuracy");
			return accuracy * 1.3;
		},
		id: "fieryvision",
		isNonstandard: true,
		name: "Fiery Vision",
	},
	
	//Mr Haunted//
	"useless": {
		onModifyMove: function (move) {
			if (move.secondaries && move.id !== "secretpower") {
				this.debug("doubling secondary chance");
				for (var i = 0; i < move.secondaries.length; i++) {
					move.secondaries[i].chance *= 2;
				}
			}
		},
		onModifyMove: function (move) {
			move.stab = 2;
		},
		id: "useless",
		isNonstandard: true,
		name: "Useless",
	},
	
	//xArra miseravi// eu buffei uns bagulhos pq ele tava mto fraco
	"trolzin": {
		onSourceModifyDamage: function (damage, source, target, move) {
			if (target.hp >= target.maxhp) {
				this.debug("Trolzin weaken");
				return this.chainModify(0.4);
			}
		},
		onResidual: function (pokemon) {
			this.heal(pokemon.maxhp / 6);
		},
		onModifyMove: function (move) {
			if (!move || !move.flags["contact"]) return;
			if (!move.secondaries) {
				move.secondaries = [];
			}
			move.secondaries.push({
				chance: 10,
				status: "par"
			});
		},
	onBeforeSwitchIn: function (pokemon) {
			pokemon.illusion = null;
			let i;
			for (i = pokemon.side.pokemon.length - 1; i > pokemon.position; i--) {
				if (!pokemon.side.pokemon[i]) continue;
				if (!pokemon.side.pokemon[i].fainted) break;
			}
			if (!pokemon.side.pokemon[i]) return;
			if (pokemon === pokemon.side.pokemon[i]) return;
			pokemon.illusion = pokemon.side.pokemon[i];
		},
		// illusion clearing for damage is hardcoded in the damage
		// function because mold breaker inhibits the damage event
		onEnd: function (pokemon) {
			if (pokemon.illusion) {
				this.debug('illusion cleared');
				pokemon.illusion = null;
				let details = pokemon.template.species + (pokemon.level === 100 ? '' : ', L' + pokemon.level) + (pokemon.gender === '' ? '' : ', ' + pokemon.gender) + (pokemon.set.shiny ? ', shiny' : '');
				this.add('replace', pokemon, details);
				this.add('-end', pokemon, 'Illusion');
			}
		},
		onFaint: function (pokemon) {
			pokemon.illusion = null;
		},
		id: "trolzin",
		name: "Trolzin"
	},
	//InuChitai//
		"dragonsoul": {
	onTryHit: function (target, source, move) {
			if (target !== source && move.type === "Dragon") {
				if (!this.heal(target.maxhp / 4)) {
					this.add("-immune", target, "[msg]");
				}
				if (!this.boost({atk:1})) {
					this.add("-immune", target, "[msg]");
				}
				return null;
			}
		},
		id: "dragonsoul",
		isNonstandard: true,
		name: "Dragon Soul",
	},
	//Cratthew//
		"ewewater": {
	onTryHit: function (target, source, move) {
			if (target !== source && move.type === "Water") {
				if (!this.heal(target.maxhp / 4)) {
					this.add("-immune", target, "[msg]");
				}
				if (!this.boost({spe:1})) {
					this.add("-immune", target, "[msg]");
				}
				return null;
			}
		},
		id: "ewewater",
		isNonstandard: true,
		name: "ewe Water",
	},
	
	//ElderGamer011//
		"lockcritical": {
		
		onModifyDef: function (def) {
			return this.chainModify(1);
		},
		id: "lockcritical",
		name: "lock critical",
	    isNonstandard: true,
	},
	
	//CHORUME//
	"regenepenis": {
		shortDesc: "This Pokemon restores 1/3 of its maximum HP, rounded down, when it switches out.",
		onStart: function (pokemon) {
		this.useMove("substitute", pokemon);
		},
		onSwitchOut: function (pokemon) {
			pokemon.heal(pokemon.maxhp / 4);
		},
		id: "regenepenis",
		name: "Regenepenis",
		isNonstandard: true,
	},
	
	//Hunter of Shadows//
	"magiclevitate": {
		onDamage: function (damage, target, source, effect) {
			if (effect.effectType !== "Move") {
				return false;
			}
		},
		onImmunity: function (type) {
			if (type === "Ground") return false;
		},
		id: "magiclevitate",
		name: "Magic Levitate",
		isNonstandard: true,
	},
	
	//Luckyryu//
	
	"saposipero": {
		onTryHit: function (target, source, move) {
			if (target !== source && move.type === "Grass") {
				if (!this.boost({spa:1})) {
					this.add("-immune", target, "[msg]");
				}
				return null;
			}
		},
		id: "saposipero",
		name: "Sapo Sipero",
		isNonstandard: true,
	},
	//WiW Roxie//
	"saidaquimeo": {
		onStart: function(pokemon){
				this.add("-ability", pokemon, "Sai daqui meo");
		},
		forceSwitch: true,
		onAfterDamage: function (damage, target, source, move) {
			
			if (move && move.flags["contact"]) {
				if (this.random(10) < 3) {
					forceSwitch: true,
					source.addVolatile("attract", target);
				}
			}
		},
		onAfterMoveSecondary: function (target, source, move) {
			if (source && source !== target && source.hp && target.hp && move && move.category !== "Status") {
				if (!source.isActive || !this.canSwitch(source.side) || target.forceSwitchFlag) return;
					if (this.runEvent("DragOut", source, target, move)) {
						this.dragIn(source.side, source.position);
					
					}
		
			}
		},
		id: "saidaquimeo",
		name: "Sai daqui meo",
		isNonstandard: true,
		forceSwitch: true,
	},
	//Powergens//
	"tafareeeeel": {
		onUpdate: function (pokemon) {
			if (pokemon.volatiles["confusion"]) {
				pokemon.removeVolatile("confusion");
			}
		},
		onImmunity: function (type, pokemon) {
			if (type === "confusion") {
				this.add("-immune", pokemon, "confusion");
				return false;
			}
		},
		onFoeModifyPokemon: function (pokemon) {
			if (!this.isAdjacent(pokemon, this.effectData.target)) return;
			if (pokemon.isGrounded()) {
				pokemon.tryTrap(true);
			}
		},
		onFoeMaybeTrapPokemon: function (pokemon, source) {
			if (!source) source = this.effectData.target;
			if (!this.isAdjacent(pokemon, source)) return;
			if (pokemon.isGrounded()) {
				pokemon.maybeTrapped = true;
			}
		},
		id: "tafareeeeel",
		name: "tafareeeeel",
		isNonstandard: true,
	},
	
	//Mariobros2//
	"burnedaura": {
		onStart: function (pokemon) {
			var foeactive = pokemon.side.foe.active;
			var totaldef = 0;
			var totalspd = 0;
			for (var i = 0; i < foeactive.length; i++) {
				if (!foeactive[i] || foeactive[i].fainted) continue;
				totaldef += foeactive[i].getStat("def", false, true);
				totalspd += foeactive[i].getStat("spd", false, true);
			}
			if (totaldef && totaldef >= totalspd) {
				this.boost({def:1,spe:1});
				
			} else if (totalspd) {
				this.boost({def:1,spe:1});
			}
		},
		onTryHit: function (target, source, move) {
			if (target !== source && move.type === "Water") {
				if (!this.heal(target.maxhp / 4)) {
					this.add("-immune", target, "[msg]");
				}
				return null;
			}
		},
		id: "burnedaura",
		isNonstandard: true,
		name: "Burned Aura",
	},
	   //Leysa//
		"naochoranaoquerido": {
		onTryHit: function (target, source, move) {
			if (target !== source && move.type === "Electric") {
				if (!this.boost({spa:1})) {
					this.add("-immune", target, "[msg]");
				}
				return null;
			}
		},
		onAnyRedirectTargetPriority: 1,
		onAnyRedirectTarget: function (target, source, source2, move) {
			if (move.type !== "Electric") return;
			if (this.validTarget(this.effectData.target, source, move.target)) {
				return this.effectData.target;
			}
		},
		id: "naochoranaoquerido",
		isNonstandard: true,
		name: " Nao chora nao querido",
	},
	
	//King1Sloth//
	"lardshield": {
		onDamage: function (damage, target, source, effect) {
			if (effect.effectType !== "Move") {
				return false;
			}
		},
		id: "lardshield",
		isNonstandard: true,
		name: "Lard Shield",
	},
	
	//MrLoser//
	"hide": {
onAfterMoveSecondary: function (target, source, move) {
			if (!target.hp) return;
			let type = move.type;
			if (target.isActive && move.effectType === 'Move' && move.category !== 'Status' && type !== '???' && !target.hasType(type)) {
				if (!target.setType(type)) return false;
				this.add('-start', target, 'typechange', type, '[from] Hide');

				if (target.side.active.length === 2 && target.position === 1) {
					// Curse Glitch
					const decision = this.willMove(target);
					if (decision && decision.move.id === 'curse') {
						decision.targetLoc = -1;
					}
				}
			}
		},
			onModifySecondaries: function (secondaries) {
			this.debug('Hide previne efeitos secundários');
			return secondaries.filter(effect => !!(effect.self || effect.dustproof));
		},
		id: "hide",
		isNonstandard: true,
		name: "Hide",
	},
	
	//Rezyalv//
	"corrupteddata": {
		shortDesc: "This Pokemon restores 1/3 of its maximum HP, rounded down, when it switches out.",
		onStart: function (pokemon) {
		this.add("-ability", pokemon, "Corrupted Data");
		this.useMove("spore", pokemon);
		this.useMove("topsyturvy", pokemon);
		},
		onSwitchOut: function (pokemon) {
			pokemon.heal(pokemon.maxhp / 4);
		},
		id: "corrupteddata",
		name: "Corrupted Data",
		isNonstandard: true,
	},
	
	//itsora//
	"divineshield": {
			onStart: function (pokemon) {
		this.useMove("defog", pokemon);
		},
		onAnyModifyBoost: function (boosts, target) {
			var source = this.effectData.target;
			if (source === target) return;
			if (source === this.activePokemon && target === this.activeTarget) {
				boosts["def"] = 0;
				boosts["spd"] = 0;
				boosts["evasion"] = 0;
			}
			if (target === this.activePokemon && source === this.activeTarget) {
				boosts["accuracy"] = 0;
			}
		},
		id: "divineshield",
		name: "Divine Shield",
		isNonstandard: true,
	},
	
	//Desnomeado//
    "sonicpower": {
		onStart: function (pokemon) {
			var foeactive = pokemon.side.foe.active;
			var totaldef = 0;
			var totalspd = 0;
			for (var i = 0; i < foeactive.length; i++) {
				if (!foeactive[i] || foeactive[i].fainted) continue;
				totaldef += foeactive[i].getStat("def", false, true);
				totalspd += foeactive[i].getStat("spd", false, true);
			}
			if (totaldef && totaldef >= totalspd) {
				this.boost({spe:2});
			} else if (totalspd) {
				this.boost({spe:2});
			}
		},
		id: "sonicpower",
		isNonstandard: true,
		name: "Sonic Power",
	},
	
	//Closed_Beta//
	"opafion": {
			onStart: function (pokemon) {
			var foeactive = pokemon.side.foe.active;
			for (var i = 0; i < foeactive.length; i++) {
				if (!foeactive[i] || !this.isAdjacent(foeactive[i], pokemon)) continue;
				if (foeactive[i].volatiles["substitute"]) {
					// does it give a message?
					this.add("-activate", foeactive[i], "Substitute", "ability: Opa Fion", "[of] " + pokemon);
				} else {
					this.add("-ability", pokemon, "Opa Fion", "[of] " + foeactive[i]);
					this.boost({accuracy: -2}, foeactive[i], pokemon);
				}
			}
				var foeactive = pokemon.side.foe.active;
			var totaldef = 0;
			var totalspd = 0;
			for (var i = 0; i < foeactive.length; i++) {
				if (!foeactive[i] || foeactive[i].fainted) continue;
				totaldef += foeactive[i].getStat("def", false, true);
				totalspd += foeactive[i].getStat("spd", false, true);
			}
			if (totaldef && totaldef >= totalspd) {
				this.boost({evasion:2});
			} else if (totalspd) {
				this.boost({evasion:2});
			}
				this.useMove("taunt", pokemon);
		},
		id: "opafion",
		isNonstandard: true,
		name: "Opa Fion",
	},
	//ggggd//
		"chicobioca": {
		onStart: function (pokemon) {
		this.useMove("cosmicpower", pokemon);
		},
		onModifyMove: function (move) {
			move.stab = 2;
		},
		id: "chicobioca",
		isNonstandard: true,
		name: "Chico Bioca",
	},
	//Zikafeliped//
		"speedbreaker": {
		oonResidualSubOrder: 1,
		onResidual: function (pokemon) {
			if (pokemon.activeTurns) {
				this.boost({spe:1});
			}
		},
		onStart: function (pokemon) {
			this.add("-ability", pokemon, "Speed Breaker");
		},
		stopAttackEvents: true,
		id: "speedbreaker",
		isNonstandard: true,
		name: "Speed Breaker",
	},
	
	//CSSgabriel1200//
		"breakthrough": {
		oonResidualSubOrder: 1,
	onModifyMove: function (move) {
			move.stab = 1;
		},
		onStart: function (pokemon) {
			this.add("-ability", pokemon, "Break Through");
		},
		stopAttackEvents: true,
		id: "breakthrough",
		isNonstandard: true,
		name: "Break Through",
	},
	
	//Saraii//
	"arenadeldiablo": {
		onAnyAccuracy: function (accuracy, target, source, move) {
			if (move && (source === this.effectData.target || target === this.effectData.target)) {
				return true;
			}
			return accuracy;
		},
		onFoeMaybeTrapPokemon: function (pokemon, source) {
			if (!source) source = this.effectData.target;
			if (!pokemon.hasAbility("shadowtag") && this.isAdjacent(pokemon, source)) {
				pokemon.maybeTrapped = true;
			}
		},
		id: "arenadeldiablo",
		isNonstandard: true,
		name: "Arena del Diablo",
	},
	
	//Queju, caso o maldito volte eu vou ficar puto com isso//
	"baixarhentainet": {
		onStart: function (pokemon) {
			var foeactive = pokemon.side.foe.active;
			var totaldef = 0;
			var totalspd = 0;
			for (var i = 0; i < foeactive.length; i++) {
				if (!foeactive[i] || foeactive[i].fainted) continue;
				totaldef += foeactive[i].getStat("atk", false, true);
				totalspd += foeactive[i].getStat("spa", false, true);
			}
			if (totaldef && totaldef >= totalspd) {
				this.boost({def:1});
			} else if (totalspd) {
				this.boost({spd:1});
			}
		},
		effect: {
			duration: 1,
			onBasePowerPriority: 8,
			onBasePower: function (basePower) {
				if (this.effectData.hit) {
					return this.chainModify(0.5);
				} else {
					this.effectData.hit = true;
				}
			}
		},
		id: "baixarhentainet",
		isNonstandard: true,
		name: "baixarhentai.net",
	},
	
	//LukeSweep//
"inteligenceexpanse": {
		onStart: function (pokemon) {
			var foeactive = pokemon.side.foe.active;
			var totaldef = 0;
			var totalspd = 0;
			for (var i = 0; i < foeactive.length; i++) {
				if (!foeactive[i] || foeactive[i].fainted) continue;
				totaldef += foeactive[i].getStat("spe", false, true);
				totalspd += foeactive[i].getStat("spa", false, true);
			}
			if (totalspd && totalspd >= totaldef) {
				this.boost({spa:1});
			} else if (totaldef) {
				this.boost({spe:1});
			}
		},
		id: "inteligenceexpanse",
		isNonstandard: true,
		name: "Inteligence Expanse",
    },
    //Mula Shiny//
    "shadowprank": {
		onModifyPriority: function (priority, pokemon, target, move) {
			if (move && move.category === "Status") {
				return priority + 1;
			}
		},
		onFoeModifyPokemon: function (pokemon) {
			if (!pokemon.hasAbility("shadowtag") && this.isAdjacent(pokemon, this.effectData.target)) {
				pokemon.tryTrap(true);
			}
		},
		onFoeMaybeTrapPokemon: function (pokemon, source) {
			if (!source) source = this.effectData.target;
			if (!pokemon.hasAbility("shadowtag") && this.isAdjacent(pokemon, source)) {
				pokemon.maybeTrapped = true;
			}
		},
		id: "shadowprank",
		isNonstandard: true,
		name: "Shadow Prank",
    },
    //Super Canarinho//
    "sabeporque": {
		onStart: function (pokemon) {
		this.useMove("swagger", pokemon);
		},
		id: "sabeporque",
		isNonstandard: true,
		name: "Sabe por que?",
    },
    //Black Hurricane//
    "coldnesscoat": {
		onSourceModifyDamage: function (damage, source, target, move) {
			if (move.typeMod > 0) {
				this.debug("Filter neutralize");
				return this.chainModify(0.75);
			}
		},
		onModifyDefPriority: 6,
		onModifyDef: function (def) {
			return this.chainModify(2);
		},
		id: "coldnesscoat",
		name: "Coldness Coat"
	},
	//Sonic213//
	 "speedforce": {
	onTryHit: function (target, source, move) {
			if (target !== source && move.type === "Flying") {
				if (!this.heal(target.maxhp / 4)) {
					this.add("-immune", target, "[msg]");
				}
				if (!this.boost({spe:1})) {
					this.add("-immune", target, "[msg]");
				}
				return null;
			}
		},
		id: "speedforce",
		isNonstandard: true,
		name: "Speed Force ",
	},
	"ab00sershield": {
			onStart: function (pokemon) {
			var foeactive = pokemon.side.foe.active;
			var totaldef = 0;
			var totalspd = 0;
			for (var i = 0; i < foeactive.length; i++) {
				if (!foeactive[i] || foeactive[i].fainted) continue;
				totaldef += foeactive[i].getStat("atk", false, true);
				totalspd += foeactive[i].getStat("spa", false, true);
			}
			if (totaldef >= totalspd) {
				this.useMove("Reflect",pokemon);
			} else if (totalspd) {
				this.useMove("Light Screen",pokemon);
			}
		},
		id: "ab00sershield",
		name: "Ab00ser Shield",
	},
		"lasanhaboost": {
			onStart: function (pokemon) {
		this.useMove("toxic", pokemon);
		},
		onResidual: function (pokemon) {
			if (pokemon.activeTurns) {
				this.boost({spe:1});
			}
		},
		id: "lasanhaboost",
		name: "Lasanha Boost",
		isNonstandard: true,
		},
		//doremifacuzi//
			"tretar": {
		onBoost: function (boost, target, source, effect) {
			if (source && target === source) return;
			let showMsg = false;
			for (let i in boost) {
				if (boost[i] < 0) {
					delete boost[i];
					showMsg = true;
				}
			}
			if (showMsg && !effect.secondaries) this.add("-fail", target, "unboost", "[from] ability: Tretar", "[of] " + target);
		},
		onDamage: function (damage, target, source, effect) {
			if (effect.id === "psn" || effect.id === "tox") {
				this.heal(target.maxhp / 8);
				return false;
			}
		},
		onTryHit: function (target, source, move) {
			if (this.effectData.target.activeTurns) return;

			if (target === source || move.hasBounced || !move.flags["reflectable"]) {
				return;
			}
			let newMove = this.getMoveCopy(move.id);
			newMove.hasBounced = true;
			this.useMove(newMove, target, source);
			return null;
		},
		onAllyTryHitSide: function (target, source, move) {
			if (this.effectData.target.activeTurns) return;

			if (target.side === source.side || move.hasBounced || !move.flags["reflectable"]) {
				return;
			}
			let newMove = this.getMoveCopy(move.id);
			newMove.hasBounced = true;
			this.useMove(newMove, this.effectData.target, source);
			return null;
		},
		effect: {
			duration: 1,
		},
		id: "tretar",
		name: "Tretar",
	},
	//xins
	"funkyriddim": {
		onStart: function (pokemon) {
			let foeactive = pokemon.side.foe.active;
			let activated = false;
			for (let i = 0; i < foeactive.length; i++) {
				if (!foeactive[i] || !this.isAdjacent(foeactive[i], pokemon)) continue;
				if (!activated) {
					this.add("-ability", pokemon, "Funky Riddim", "boost");
					activated = true;
				}
				if (foeactive[i].volatiles["substitute"]) {
					this.add("-immune", foeactive[i], "[msg]");
				} else {
					this.boost({atk: -1}, foeactive[i], pokemon);
					this.boost({spd: 1}, pokemon, pokemon);
				}
			}
		},
		id: "funkyriddim",
		name: "Funky Riddim",
		rating: 3.5,
		num: 22,
	},
		"haxmonssurge": {
	onStart: function (source) {
			this.setTerrain("haxmonsterrain");
		},
		id: "haxmonssurge",
		name: "Haxmons Surge",
		rating: 3.5,
		num: 22,
	},
	};