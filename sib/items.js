'use strict';

exports.BattleItems = {
	//super indigo bros//
	
	"vlayzernite": {
		id: "vlayzernite",
		name: "Vlayzernite",
		spritenum: 575,
		megaStone: "Infernape",
		megaEvolves: "Monferno",
		onTakeItem: false,
		zMove: "Sakuya's World",
		zMoveFrom: "One Punch Monferno",
		zMoveUser: ["Monferno", "Infernape"],
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 7,
	},
		"mrbotite": {
		id: "mrbotite",
		name: "MrBotite",
		spritenum: 575,
		megaStone: "Pikachu-PhD",
		megaEvolves: "Pikachu",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
	},
	"poliwratite": {
		id: "poliwratite",
		name: "Poliwratite",
		isUnreleased: true,
		spritenum: 575,
		megaStone: "Greninja-Ash",
		megaEvolves: "Poliwrath",
			onTakeItem: false,
		zMove: "Glacial Chaos",
		zMoveFrom: "Frog Shield",
		zMoveUser: ["Poliwrath","Greninja-Ash"],
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: 674,
		gen: 6,
		desc: "If holder is an Abomasnow, this item allows it to Mega Evolve in battle.",
	},
	"furretorb": {
		id: "furretorb",
		name: "Furret Orb",
		spritenum: 390,
		onSwitchIn: function (pokemon) {
			if (pokemon.isActive && pokemon.baseTemplate.species === "Sentret") {
				this.insertQueue({pokemon: pokemon, choice: "runPrimal"});
			}
		},
		onPrimal: function (pokemon) {
			let template = this.getTemplate("Furret");
			pokemon.formeChange(template);
			pokemon.baseTemplate = template;
			pokemon.details = template.species + (pokemon.level === 100 ? "" : ", L" + pokemon.level) + (pokemon.gender === "" ? "" : ", " + pokemon.gender) + (pokemon.set.shiny ? ", shiny" : "");
			if (pokemon.illusion) {
				pokemon.ability = ""; // Don"t allow Illusion to wear off
				this.add("-primal", pokemon.illusion);
			} else {
				this.add("detailschange", pokemon, pokemon.details);
				this.add("-primal", pokemon);
			}
			pokemon.setAbility(template.abilities["0"]);
			pokemon.baseAbility = pokemon.ability;
		},
		onTakeItem: function (item, source) {
			if (source.baseTemplate.baseSpecies === "Sentret") return false;
			return true;
		},
		num: 534,
		gen: 6,
		desc: "If holder is a Groudon, this item triggers its Primal Reversion in battle.",
	},
};