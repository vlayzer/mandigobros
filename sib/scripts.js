// Custom Vermilion scripts.
'use strict';

exports.BattleScripts = {
	randomSeasonalRegStaffTeam: function (side) {
		let userid = toId(side.name);
		let team = [];
		let sets = {
			'Avillez': {
				species: 'Sneasel', ability: 'Contrary', item: 'Eviolite', gender: 'M',
				moves: ['skyuppercut', 'knockoff', 'iceshard'],
				baseSignatureMove: 'Ice Cu', signatureMove: "Ice Cu",
				evs: {spe:252, spd:4, atk:252}, nature: 'Adamant'
			},
			
			'Empo XV': {
				species: 'Empoleon', ability: 'Serene Grace', item: 'Leftovers', gender: 'M',
				moves: ['roost', 'steameruption', 'airslash'],
				baseSignatureMove: 'Lewd Lick', signatureMove: "Lewd Lick",
				evs: {hp:252, def:4, spd:252}, nature: 'Modest'
			},
			'Hunter of Shadows': {
				species: 'Gengar', ability: 'Magic Levitate', item: 'Focus Sash', gender: 'M',
				moves: ['shadowball', 'sludgewave', 'destinybond'],
				baseSignatureMove: 'Crashei o indigo', signatureMove: "Crashei o indigo",
				evs: {spa:252,spe:252,hp:4}, nature: 'Timid'
			},

		//Leaders Indigo
		    'Dr4xl3r': {
				species: 'Greninja', ability: 'Adaptean', item: 'Expert Belt', gender: 'M',
				moves: ['searingshot', 'sludgewave', 'secretsword'],
				baseSignatureMove: 'Giant Water Shuriken', signatureMove: "Giant Water Shuriken",
				evs: {hp:4, spa:252, spe:252}, nature: 'Timid'
			},
			
			'Halfway Crooks': {
				species: 'Arceus', ability: 'Pressure', item: 'Life Orb', gender: 'M',
				moves: ['earthquake','extremespeed', 'closecombat'],
				baseSignatureMove: 'BANHAMMER', signatureMove: "BANHAMMER",
				evs: {hp:4, atk:252, spe:252}, nature: 'Adamant'
			},
			
			'Vlayzer': {
				species: 'Monferno', ability: 'Hero Pride', item: 'Vlayzernite', gender: 'M',
				moves: ['vcreate','spectralthief','extremespeed'],
				baseSignatureMove: 'One Punch Monferno', signatureMove: "One Punch Monferno",
				evs: {atk:252, def:4, spe:252}, nature: 'Naive'
			},
			
			'BlueMander': {
				species: 'Hoopa-Unbound', ability: 'No Guard', item: 'Choice Scarf', gender: 'M',
				moves: ['focusblast', 'psyshock', 'moonblast'],
				baseSignatureMove: 'BANRAY', signatureMove: "BANRAY",
				evs: {hp:4, spe:252, spa:252}, nature: 'Hasty'
			},
			
			
	    //Mods Indigo
		
			//é pra ficar tipo assim
			'xArra': {
				species: 'Taillow', ability: 'Trolzin', item: 'Eviolite', gender: 'M',
				moves: [['kingsshield','Baneful Bunker'][this.random(2)], 'extremespeed', 'shadowstrike'],
				baseSignatureMove: 'Super Endeavor', signatureMove: "Super Endeavor",
				evs: {spd:252,hp:252,atk:4}, nature: 'adamant' //porra arra
			},		
			
			
			'Cpt.Lask': {
			    species: 'Crawdaunt', ability: 'Serene Grace', item: 'Lum Berry', gender: 'M',
				moves: ['knockoff', 'playrough', 'shiftgear'],
				baseSignatureMove: 'Bass Cannon', signatureMove: "Bass Cannon",
				evs: {hp:4, atk:252, spe:252}, nature: 'Jolly'
			},
			//não trocar esse//
			'Byenix': {
			    species: 'Dialga', ability: 'Tinted Lens', item: 'Choice Specs', gender: 'M',
				moves: ['earthpower', 'flamethrower', 'flashcannon'],
				baseSignatureMove: 'Roar Of Ashei Fasil', signatureMove: "Roar Of Ashei Fasil",
				evs: {spd:4, spa:252, hp:252}, nature: 'Modest'
			},
			'Mr. Haunted': {
			    species: 'Raikou', ability: 'Useless', item: 'Life Orb', gender: 'M',
				moves: ['earthpower', 'airslash', 'flamethrower'],
				baseSignatureMove: 'Hater Power', signatureMove: "Hater Power",
				evs: {def:4, spa:252, spe:252}, nature: 'Timid'
			},
		//Drivers Indigo	
			'I Love Peridot': {
				species: 'Genesect', ability: 'Fiery Vision', item: 'Life Orb', gender: 'M',shiny: true,
				moves: ['ironhead','xscissor', 'earthquake'], name: 'ishiplapidot',
				baseSignatureMove: 'YOU CLOD', signatureMove: "YOU CLOD",
				evs: {atk:252, spe:252, def:4}, nature: 'Hasty'
			},
			///não trocar esse///
			'Esse Cara': {
				species: 'Slowking', ability: 'Regenerator', item: 'Leftovers', gender: 'M',
				moves: ['steameruption', 'psystrike', 'fierydance'], name: 'Esse Cara',
				baseSignatureMove: 'yveltallvl200arrego', signatureMove: "yveltal lvl 200 arrego",
				evs: {hp:252, def:4, def:252}, nature: 'Calm'
			},
			
			'Queju': {
				species: 'Cofagrigus', ability: 'baixarhentai.net', item: 'Leftovers', gender: 'M',
				moves: ['sludgewave', 'earthpower', 'healingwish'],
				baseSignatureMove: 'Lolificacao', signatureMove: "Lolificacao",
				evs: {spa:252, def:112, hp:144}, nature: 'Modest'
			},
			
			'Sekkei': {
				species: 'Gourgeist-Super', ability: 'Hax is Real', item: 'Leftovers', gender: 'F', shiny: true,
				moves: ['leechseed', 'shadowsneak', 'substitute'],
				baseSignatureMove: 'Hax Power', signatureMove: "Hax Power",
				evs: {hp:252, def:4, atk:252}, nature: 'Impish'
			},
			
			///não trocar esse//
			'Netjerk': {
				species: 'Bewear', ability: 'Unaware', item: 'Lum Berry', gender: 'F',
				moves: ['playrough', 'recover', 'drainpunch'],
				baseSignatureMove: 'cm44rra', signatureMove: "cm² -44rra",
				evs: {atk:156, def:156, spd:156}, nature: 'Lax'
			},
			'Siirin': {
				species: 'Sableye', ability: 'Prank Bounce', item: 'Sablenite', gender: 'M',
				moves: ['calmmind', 'willowisp', 'recover'],
				baseSignatureMove: 'Many Jewels', signatureMove: "Many Jewels",
				evs: {hp:252, spd:144, def:112}, nature: 'Careful'
			},
			
		//Voices Indigo	
			'gslure': {
			    species: 'Thundurus-Therian', ability: 'No Guard', item: 'Life Orb', gender: 'M',
				moves: ['uturn', 'hurricane', 'roost'],
				baseSignatureMove: 'Thunder Boost ', signatureMove: "Thunder Boost ",
				evs: {hp:4, spa:252, spe:252}, nature: 'Timid'
			},
			'CLOUDMONTEIRO': {
			    species: 'Scizor', ability: 'Speed Boost', item: 'Scizorite', gender: 'M',
				moves: ['swordsdance', 'brickbreak', 'uturn'],
				baseSignatureMove: 'BULLET RAGE', signatureMove: "BULLET RAGE",
				evs: {spd:4, atk:252, spe:252}, nature: 'Adamant'
			},
			'LukeSweep': {
			    species: 'Lucario', ability: 'Inner Focus', item: 'Lucarionite', gender: 'M',
				moves: ['nastyplot', 'vacuumwave', 'flashcannon'],
				baseSignatureMove: 'Mind Explosion', signatureMove: "Mind Explosion",
				evs: {spe:252,spa:252,spd:4}, nature: 'Timid'
			},
			'Mula Shiny': {
			    species: 'Smeargle', ability: 'Shadow Prank', item: 'Focus Sash', gender: 'M',
				moves: ['recover', 'transform', 'substitute'],
				baseSignatureMove: 'DORME PORRA', signatureMove: "DORME PORRA",
				evs: {spe:252,hp:252,spd:4}, nature: 'Timid'
			},
			'Cratthew': {
				species: 'Dugtrio', ability: 'ewe Water', item: 'Focus Sash', gender: 'M',
				moves: ['fly', 'dig', 'triattack'],
				baseSignatureMove: 'Praise Arceus', signatureMove: "Praise Arceus",
				evs: {spa:252,atk:252,spe:4}, nature: 'docile'
			},
			'Mariobros2': {
				species: 'Magmortar', ability: 'Burned Aura', item: 'Life Orb', gender: 'M',
				moves: ['firepunch', 'earthquake', 'rockslide'],
				baseSignatureMove: 'Cheese Fire Punch', signatureMove: "Cheese Fire Punch",
				evs: {hp:140,atk:244,spe:120,def:4}, nature: 'Adamant'
			},
		//Users normais
			///não trocar esse//
			'powergens': {
			    species: 'Torkoal', ability: 'tafareeeeel', item: 'Mental Herb', gender: 'M',
				moves: ['sacredfire', 'thousandarrows', 'recover'],
				baseSignatureMove: 'Ronaldo Fenomeno', signatureMove: "Ronaldo Fenomeno",
				evs: {spa:4, def:252, spd:252}, nature: 'Sassy'
			},
			'FelipeSoullx': {
			    species: 'Noivern', ability: 'Aerilate', item: 'Choice Scarf', gender: 'M',
				moves: ['extremespeed', 'trick', 'dracometeor'],
				baseSignatureMove: 'EAR RAPE', signatureMove: "EAR RAPE",
				evs: {atk:2,hp:2, spa:252, spe:252}, nature: 'Hasty'
			},
			///não trocar esse//
		    'detonados jay': {
				species: 'Lilligant', ability: 'Sheer Force', item: 'Life Orb', gender: 'M',
				moves: ['energyball', 'moonblast', 'earthpower'],
				baseSignatureMove: 'Que delicia cara', signatureMove: "Que delicia cara",
				evs: {spe:252, def:4, spa:252}, nature: 'Timid'
			},
			'King1Sloth': {
				species: 'snorlax', ability: 'Lard Shield', item: 'Leftovers', gender: 'M',
				moves: ['slackoff', 'crunch', 'seismictoss',],
				baseSignatureMove: 'Pizza Shield', signatureMove: "Pizza Shield",
				evs: {hp:252, def:252, spdef:4}, nature: 'Impish'
			},
			///não trocar esse//
			'InuChitai': {
				species: 'Kyurem-Black', ability: 'Dragon Soul', item: 'Choice Scarf', gender: 'M',
				moves: ['earthquake', 'icepunch', 'fusionbolt'],
				baseSignatureMove: 'Dragon Knight', signatureMove: "Dragon Knight",
				evs: {atk:252, def:4, spe:252}, nature: 'Jolly'
			},
			'Hyogafodex': {
				species: 'Regice', ability: 'Regenerator', item: 'Life Orb', gender: 'M',
				moves: ['thunderbolt', 'focusblast', 'icebeam'],
				baseSignatureMove: 'Execucao Aurora', signatureMove: "Execucao Aurora",
				evs: {def:4, spa:252, hp:252}, nature: 'Modest'
			},
			'Super Canarinho': {
				species: 'Zapdos', ability: 'Sabe por que?', item: 'Leftovers', gender: 'M', shiny: true,
				moves: ['thunder', 'blueflare', 'protect'],
				baseSignatureMove: 'Divulgacao', signatureMove: "Divulgacao",
				evs: {def:20, spa:250, hp:238},ivs: {atk:0, def:30}, nature: 'Modest'
			},
			'VdK': {
				species: 'Kakuna', ability: 'Arena Trap', item: 'Focus Sash', gender: 'M',
				moves: ['gunk shot', 'megahorn', 'batonpass'],
				baseSignatureMove: 'vdd', signatureMove: "vdd",
				evs: {hp:4, atk:250, spe:252}, nature: 'Adamant'
			},
			'zyne': {
				species: 'Wobbuffet', ability: 'Shadow Tag', item: 'Leftovers', gender: 'M',
				moves: ['toxic', 'slackoff', 'taunt'],
				baseSignatureMove: 'Kamikaze', signatureMove: "Kamikaze",
				evs: {hp:200, spd:120,def:120,spa:5, spe:50}, nature: 'Timid'
			},
			'Lord Vinny18': {
				species: 'Mienfoo', ability: 'Prankster', item: 'Eviolite', gender: 'M',
				moves: ['highjumpkick', 'playrough', 'roost'],
				baseSignatureMove: 'Juukenhou Hakke Rokujuuyon Shou', signatureMove: "Juukenhou Hakke Rokujuuyon Shou",
				evs: {atk:252,spe:252}, nature: 'Jolly'
			},
			'loro jomse🐒': {
				species: 'Chatot', ability: 'Prankster', item: 'Leftovers', gender: 'M',
				moves: ['chatter', 'boomburst', 'roost'],
				baseSignatureMove: 'Pura Skill', signatureMove: "Pura Skill",
				evs: {spa:252,spe:252}, nature: 'Timid'
			},
			'Sky Linn': {
				species: 'Machamp', ability: 'No Guard', item: 'Assault Vest', gender: 'M',
				moves: ['dynamicpunch', 'highjumpkick', 'knockoff'],
				baseSignatureMove: 'Punheta Quadrupla', signatureMove: "Punheta Quadrupla",
				evs: {atk:252,hp:252,spd:4}, nature: 'Adamant'
			},
		    'LuckyRyu': {
				species: 'Poliwrath', ability: 'Sapo Sipero', item: 'Poliwratite', gender: 'M',
				moves: ['freezedry', 'steameruption', 'secretsword'],
				baseSignatureMove: 'Frog Shield', signatureMove: "Frog Shield",
				evs: {spe:252, def:4, spa:252}, nature: 'Hasty'
			},
            'CSSGabriel1200': {
				species: 'Keldeo-Resolute', ability: 'Break Through', item: 'Leftovers', gender: 'M',
				moves: ['aquajet', 'steameruption', 'secretsword'],
				baseSignatureMove: 'Potugues Vanish', signatureMove: "Potugues Vanish",
				evs: {atk:4, spe:252, spa:252}, nature: 'Hasty'
			},
		    'Hanako Ikezawa': {
				species: 'Chandelure', ability: 'Filter', item: 'Leftovers', gender: 'M',
				moves: ['flamethrower', 'earthpower', 'shadowball'],
				baseSignatureMove: 'Ikezawa Ignition', signatureMove: "Ikezawa Ignition",
				evs: {spa:252,spe:252,spd:4}, nature: 'Modest'
			},
			
			'Darkmetaldragon': {
				species: 'Garchomp', ability: 'Arena Trap', item: 'Garchompite', gender: 'M',
				moves: ['swordsdance', 'ironhead', 'flareblitz'],
			//	baseSignatureMove:'largatixaimpact', 
				signatureMove: "Largatixa Impact",
				evs: {atk:252,spe:252,spd:4}, nature: 'Jolly'
			},
			'Waifuzinha': {
				species: 'Vivillon', ability: 'Magic Guard', item: 'Focus Sash', gender: 'F',
				moves: ['quiverdance', 'lightofruin', 'bugbuzz'],
				baseSignatureMove: 'Waifu Guard', signatureMove: "Waifu Guard",
				evs: {spa:252,spe:252,spd:4}, nature: 'Timid'
			},
			'DBlastHD': {
				species: 'Arcanine', ability: 'Serene Grace', item: 'Leftovers', gender: 'M',
				moves: ['sunnyday', 'morningsun', 'closecombat'],
				baseSignatureMove: 'Portuga Hax Spike ', signatureMove: "Portuga Hax Spike ",
				evs: {hp:252,spe:252,def:4}, nature: 'Adamant'
			},
			'sky dust': {
				species: 'Gastrodon', ability: 'Prankster', item: 'Power Herb', gender: 'M',
				moves: ['geomancy', 'earthpower', 'steameruption'],
				baseSignatureMove: 'Abraco', signatureMove: "Abraco",
				evs: {spa:252,spe:252,hp:4}, nature: 'Timid'
			},
			'ggspok': {
				species: 'Manectric', ability: 'Magic Bounce', item: 'Manectite', gender: 'M',
				moves: ['thunderbolt', 'blueflare', 'freezedry'],
			//	baseSignatureMove: 'Opa fion',
				signatureMove: "Opa fion",
				evs: {spe:252,spa:252,spe:4}, nature: 'Timid'
			},
			'CHORUME': {
				species: 'Blastoise', ability: 'Regenepenis', item: 'Lum Berry', gender: 'M',
				moves: ['darkpulse', 'aurasphere', 'rapidspin'],
				baseSignatureMove: 'EAE CARALHOW', signatureMove: "EAE CARALHOW",
				evs: {hp:20,atk:96,def:68,spd:96,spa:112,spe:116}, nature: 'Timid'
			},
			'Rezyalv': {
				species: 'Missingno', ability: 'Corrupted Data', item: 'Life Orb', gender: 'M',
				moves: ['shadowforce', 'aquajet', 'highjumpkick'],
				baseSignatureMove: 'Mirror Glitch', signatureMove: "Mirror Glitch",
				evs: {spe:252,atk:252,hp:4}, nature: 'Brave'
			},
			'ggggd': {
				species: 'Corphish', ability: 'Chico Bioca', item: 'Eviolite', gender: 'M',
				moves: ['crabhammer', 'knockoff', 'recover'],
				baseSignatureMove: 'Pipi Dance', signatureMove: "Pipi Dance",
				evs: {hp:44,spe:252,atk:20,def:104,spd:88}, nature: 'jolly'
			},
			'Closed_Beta': {
				species: 'Mankey', ability: 'Opa fion', item: '', gender: 'M',
				moves: ['batonpass', 'encore', 'substitute'],
				baseSignatureMove: 'Marlboro Strike', signatureMove: "Marlboro Strike",
				evs: {hp:252,spe:252}, nature: 'jolly'
			},
			'zicafeliped': {
				species: 'Yanmega', ability: 'Speed Breaker', item: 'Leftovers', gender: 'M',
				moves: ['nastyplot', 'oblivionwing', 'paleowave'],
				baseSignatureMove: 'VIREI MOD', signatureMove: "VIREI MOD",
				evs: {spa:252,spe:252}, nature: 'modest'
			},
			'zepanda': {
				species: 'Pancham', ability: 'speedboost', item: 'Eviolite', gender: 'M',
				moves: ['bellydrum', 'crunch', 'drainpunch'],
				baseSignatureMove: 'troslei', signatureMove: "troslei",
				evs: {spe:252,atk:252,hp:4}, nature: 'adamant'
			},
			'MB ShadowMaze': {
				species: 'Bisharp', ability: 'Adaptability', item: 'Life Orb', gender: 'M',
				moves: ['knockoff', 'suckerpunch', 'swordsdance'],
			//	baseSignatureMove: "200veriputaco", 
				signatureMove: "Veri Putaco",
				evs: {spe:252,atk:252,hp:4}, nature: 'jolly'
			},
			'BrunoV8': {
				species: 'Metagross', ability: 'Clear Body', item: 'Metagrossite', gender: 'M',
				moves: ['earthquake', 'icepunch', 'bulletpunch'],
			//	baseSignatureMove: 'Penis Play',
				signatureMove: "Penis Play",
				evs: {spe:252,atk:252,spe:4}, nature: 'jolly'
			},
			'Spl4sh': {
				species: 'Gyarados', ability: 'Intimidate', item: 'Gyaradosite', gender: 'M',
				moves: ['thousandarrows', 'roost', 'crunch'],
				baseSignatureMove: 'Splashers Revenge', signatureMove: "Splashers Revenge",
				evs: {spe:252,atk:252,hp:4}, nature: 'adamant'
			},
			'W Ding Gaster': {
				species: 'Spiritomb', ability: 'Trace', item: 'Leftovers', gender: 'M',
				moves: ['recover', 'doomdesire', 'magmastorm'],
				baseSignatureMove: 'Gaster Blaster', signatureMove: "Gaster Blaster",
				evs: {hp:252,def:252,spe:4}, nature: 'modest'
			},
			'MarvelSix': {
				species: 'Gardevoir', ability: 'Ab00ser Shield', item: 'Gardevoirite', gender: 'F',shiny : true,
				moves: ['hypervoice', 'recover', 'healbell'],
				baseSignatureMove: 'Ab00se Beam', signatureMove: "Ab00se Beam",
				evs: {spa:252,spe:252,spe:4}, nature: 'timid'
			},
			'Mixell': {
				species: 'Victini', ability: 'Simple', item: 'Assault Vest',shiny : true,
				moves: ['diamondstorm', 'poweruppunch', 'knockoff'],
				baseSignatureMove: 'CV Blast', signatureMove: "CV Blast",
				evs: {hp:148,atk:108,def:252}, nature: 'impish'
			},
			'MrBot': {
				species: 'Pikachu', ability: 'Magic Bounce', item: 'MrBotite', gender: 'M',
				moves: ['volttackle', 'bravebird', 'suckerpunch'],
				baseSignatureMove: 'zerotol', signatureMove: "zerotol",
				evs: {atk:252,spe:252,hp:4}, nature: 'jolly'
			},
			'germinha': {
				species: 'Jirachi', ability: 'Regenerator', item: 'Leftovers', shiny: true,
				moves: ['sunsteelstrike', 'sacredfire', 'uturn'],
				baseSignatureMove: 'corrupto', signatureMove: "Corrupto",
				evs: {atk:252,spe:252,hp:4}, nature: 'jolly'
			},
			'Marco Di Natale': {
				species: 'Crobat', ability: 'Lasanha Boost', item: 'Black Sludge', gender: 'M',
				moves: ['bravebird', 'roost', 'poisonjab'],
				baseSignatureMove: 'tempestaitaliana', signatureMove: "Tempesta Italiana",
				evs: {atk:252,spe:252,hp:4}, nature: 'jolly'
			},
			'Doremifacuzi': {
				species: 'Gliscor', ability: 'Tretar', item: 'Toxic Orb',
				moves: ['recover', 'infestation', 'leechseed'],
			//	baseSignatureMove: 'Argumentos De Esquerda',
				signatureMove: "Argumentos De Esquerda",
				evs: {hp:252,spe:252,hp:4}, nature: 'jolly'
			},
			'xInsrew': {
				species: 'Tangrowth', ability: 'Funky Riddim', item: 'Leftovers', gender: 'M',
				moves: ['shoreup', 'nuzzle', 'freezedry'],
				//baseSignatureMove: 'Soul Save',
				signatureMove: "Soul Save",
		    	evs: {hp: 192,def:100,spd:216,}, nature: 'sassy'
			},
			'Wheitron ': {
				species: 'Krookodile', ability: 'Tough Claws', item: 'Black Glasses', gender: 'M',
				moves: ['dragondance', 'thousandarrows', 'zenheadbutt'],
				baseSignatureMove: 'supercoolglasses', signatureMove: "Super Cool Glasses",
				evs: {atk: 252,spe:252,spd:4}, nature: 'jolly'
			},
			'Vermilion': {
				species: 'Sentret', ability: 'Haxmons Surge', item: 'Furret Orb', gender: 'M',shiny: true,
				moves: ['shadowbone', 'extremespeed', 'acupressure'],
			//	baseSignatureMove: 'crash', 
				signatureMove: 'Crash',
				evs: {atk: 252,spe:252,spd:4}, nature: 'jolly'
			},
			'Cheshire C': {
				species: 'Banette', ability: 'Prankster', item: 'Banettite', gender: 'M',
				moves: ['willowisp', 'shadowbone', 'destinybond'],
		        signatureMove: "MALDICAO DA PERNA CABELUDA",
				evs: {hp:252,atk:252,spe:4}, nature: 'adamant'
				
			},
			'Leysa': {
			    species: 'Milotic', ability: 'naochoranaoquerido', item: 'Power Herb', gender: 'F',
				moves: ['recover', 'steameruption', 'geomancy'],
				baseSignatureMove: 'Hot Kiss', signatureMove: "Hot Kiss",
				evs: {hp:252, def:252, spe:4}, nature: 'Bold'
			},
			'Pedrogreg': {
			    species: 'Goodra', ability: 'Filter', item: 'Lum Berry', gender: 'M',
				moves: ['fireblast', 'muddywater', 'sludgebomb'],
			    signatureMove: "Determinacao do Dragao",
				evs: {def:4, spa:252, spe:252}, nature: 'Timid'
			},
			'KaitoMusic': {
				species: 'Accelgor', ability: 'Solid Rock', item: 'Life Orb', gender: 'M',
				moves: ['surf', 'bugbuzz', 'thunderbolt'],
				baseSignatureMove: 'Secret Web', signatureMove: "Secret Web",
				evs: {spe:252, def:4, spa:252}, nature: 'Timid'
			},
			'Mr Beam': {
				species: 'Flareon', ability: 'Speed Boost', item: 'Leftovers', gender: 'M',
				moves: ['flamethrower', 'spacialrend', 'aurasphere'],
				baseSignatureMove: 'Vai se Duder', signatureMove: "Vai se Duder",
				evs: {spa:252,spe:252,spd:4}, nature: 'Modest'
			},
			'wiw roxie': {
				species: 'Garbodor', ability: 'Sai daqui meo', item: 'Black Sludge', gender: 'M',
				moves: ['rest', 'sleeptalk', 'roar'],
				baseSignatureMove: 'tiro de lixo topper', signatureMove: "tiro de lixo topper",
				evs: {hp:252,def:252}, nature: 'Impish'
			},
			
			'Dragoniru': {
				species: 'Ambipom', ability: 'Speed Boost', item: 'Leftovers', gender: 'M',
				moves: ['fakeout', 'flareblitz', 'return'],
				baseSignatureMove: 'Random Power', signatureMove: "Random Power",
				evs: {spe:252,atk:252,hp:4}, nature: 'adamant'
			},
			'Sonic213': {
				species: 'Blaziken', ability: 'Speed Force', item: 'Air Balloon', gender: 'M',
				moves: ['flareblitz', 'swordsdance', 'closecombat'],
				baseSignatureMove: 'Velocidade da Luz', signatureMove: "Velocidade da Luz",
				evs: {atk:252,spe:252,spe:4}, nature: 'adamant'
			},
			'okira': {
			    species: 'Typhlosion', ability: 'Desolate Land', item: 'Salac Berry', gender: 'M',
				moves: ['flamethrower', 'solarbeam', 'secretsword'],
				baseSignatureMove: 'OKIRA PUNCH', signatureMove: "OKIRA PUNCH",
				evs: {hp:4, spa:252, spe:252}, nature: 'Timid'
			},
			'Aurorra': {
				species: 'Togekiss', ability: 'Divine Shield', item: 'Leftovers', gender: 'F',
				moves: ['moonblast', 'hurricane', 'flashcannon'],
				baseSignatureMove: 'Divine Star', signatureMove: "Divine Star",
				evs: {def:252,spd:252,hp:4}, nature: 'Bold'
			},
			'dragon500': {
				species: 'Charizard', ability: 'Magic Guard', item: 'Charizardite Y', gender: 'M',
				moves: ['solarbeam', 'blastburn', 'quiverdance'],
				baseSignatureMove: 'AMV mais triste', signatureMove: "AMV mais triste",
				evs: {spe:252,spa:252,hp:4}, nature: 'timid'
			},
			'MrLoser': {
				species: "Farfetch'd", ability: 'Hide', item: 'Red Card', gender: 'M',happiness: 0,
				moves: ['frustration', 'mirrormove', 'taunt'],
				baseSignatureMove: 'Away', signatureMove: "Away",
				evs: {hp:252, spd:4, def:252},nature: 'Careful'
			},
		};
		// convert moves to ids.
		for (let k in sets) {
			sets[k].moves = sets[k].moves.map(toId);
			sets[k].baseSignatureMove = toId(sets[k].baseSignatureMove);
		}

		// Generate the team randomly.
		let pool = Object.keys(sets);
		for (let i = 0; i < 6; i++) {
			let name = this.sampleNoReplace(pool);
			let set = sets[name];
			set.level = 100;
			set.name = name;
			if (!set.ivs) {
				set.ivs = {
					hp: 31,
					atk: 31,
					def: 31,
					spa: 31,
					spd: 31,
					spe: 31,
				};
			} else {
				for (let iv in {
					hp: 31,
					atk: 31,
					def: 31,
					spa: 31,
					spd: 31,
					spe: 31,
				}) {
					set.ivs[iv] = iv in set.ivs ? set.ivs[iv] : 31;
				}
			}
			// Assuming the hardcoded set evs are all legal.
			if (!set.evs) {
				set.evs = {
					hp: 84,
					atk: 84,
					def: 84,
					spa: 84,
					spd: 84,
					spe: 84,
				};
			}
			set.moves = [this.sampleNoReplace(set.moves), this.sampleNoReplace(set.moves), this.sampleNoReplace(set.moves)].concat(set.signatureMove);
			team.push(set);
		}
		return team;
	},
	
};
