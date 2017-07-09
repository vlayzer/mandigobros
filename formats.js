'use strict';

// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.js

exports.Formats = [

    	{
		name: "[Gen 7] Super Indigo Bros",
		section: "Vermilion Metagames",
	    team: 'randomSeasonalRegStaff',
		mod: 'sgssb', 
		ruleset: ['PotD','Random','Pokemon','HP Percentage Mod','Cancel Mod', 'Freeze Clause Mod','Sleep Clause Mod' ],
		onBegin: function () {
			this.add('message', "Chegou o fim dos tempos no Indigo! Escolha seu lado e vá a luta!");
			this.add("raw|<div class='broadcast-green'>Mas o que todos esses movimentos estranhos fazem??<br><b>Dica:a descrição deles está <a href='http://s15.zetaboards.com/Vermilions/topic/8547403/1/?x=0#post8477702' target='_blank'>AQUI</a>!</b></div>");
			this.convoPlayed = false;

            if (toId(this.p1.pokemon[0].name) === 'vlayzer') {
				this.add('c|Vlayzer|Pq diabos eu estou de Lead? ah, tanto faz.');
				this.p1.pokemon[0].isLead = true;
			}
			if (toId(this.p2.pokemon[0].name) === 'vlayzer') {
				this.add('c|Vlayzer|Pq diabos eu estou de Lead? ah, tanto faz.');
				this.p2.pokemon[0].isLead = true;
			}
			// This code here is used for the renaming of moves showing properly on client.
			let globalRenamedMoves = {
			};
			let customRenamedMoves = {
				"cathy": {
				}
			};
			let allPokemon = this.p1.pokemon.concat(this.p2.pokemon);

			for (let i = 0, len = allPokemon.length; i < len; i++) {
				let pokemon = allPokemon[i];
				let last = pokemon.moves.length - 1;
				if (pokemon.moves[last]) {
					pokemon.moves[last] = toId(pokemon.set.signatureMove);
					pokemon.moveset[last].move = pokemon.set.signatureMove;
					pokemon.baseMoveset[last].move = pokemon.set.signatureMove;
				}
				for (let j = 0; j < pokemon.moveset.length; j++) {
					let moveData = pokemon.moveset[j];
					if (globalRenamedMoves[moveData.id]) {
						pokemon.moves[j] = toId(pokemon.set.signatureMove);
						moveData.move = globalRenamedMoves[moveData.id];
						pokemon.baseMoveset[j].move = globalRenamedMoves[moveData.id];
					}

					let customRenamedSet = customRenamedMoves[toId(pokemon.name)];
					if (customRenamedSet && customRenamedSet[moveData.id]) {
						pokemon.moves[j] = toId(pokemon.set.signatureMove);
						moveData.move = customRenamedSet[moveData.id];
						pokemon.baseMoveset[j].move = customRenamedSet[moveData.id];
					}
				}
			}
		},
		
		
        onUpdate: function (pokemon) {
 			let name = toId(pokemon.name);
 			if (pokemon.template.isMega) {
 				if (name === 'siirin' && pokemon.getAbility().id === 'magicbounce') {
 					pokemon.setAbility('prankbounce');
 					this.add('-ability', pokemon, pokemon.ability);
 				}
 				if (name === 'cloudmonteiro' && pokemon.getAbility().id === 'technician') {
 					pokemon.setAbility('speedboost');
 					this.add('-ability', pokemon, pokemon.ability);
 				}
 				if (name === 'lukesweep' && pokemon.getAbility().id === 'adaptability') {
 					pokemon.setAbility('inteligenceexpanse');
 					this.add('-ability', pokemon, "inteligenceexpanse");
 				}
				if (name === 'darkmetaldragon' && pokemon.getAbility().id === 'sandforce') {
 					pokemon.setAbility('arenatrap');
 					this.add('-ability', pokemon, pokemon.ability);
 				}
 			}
 			if (!this.shownTip) {
 			}
 		},
		onSwitchInPriority: 1,
		onSwitchIn: function (pokemon) {
			
			let name = toId(pokemon.illusion ? pokemon.illusion.name : pokemon.name);
			let oldAbility = pokemon.ability;
			if (pokemon.template.isMega) {
				
				if (pokemon.mulaTransformed) {
				pokemon.name = 'Mula Shiny';
				pokemon.mulaTransformed = false;
			}
			} else {
				pokemon.canMegaEvo = this.canMegaEvo(pokemon); // Ultrapassa o limite de 1 mega.
			}
		
                
		let sentences = [];
			let sentence = '';
	        //Mensagens de entrada
	      
			if (name === 'vlayzer') {
			this.add('c|Vlayzer|Me chamaram?');
			}
			if (name === 'rezyalv') {
			this.add('c|Rezyalv|💣♏ 👍���♋❍♋❒♋❍✍');
			}
			if (name === 'xarra') {
			this.add('c|xArra|vo te quebra todin');
			}
			if (name === 'mrloser') {
				this.add("c|MrLoser|/me voltou");
			}
			if (name === 'halfwaycrooks') {
				this.add("c|Halfway Crooks|#PAZ");
			}	
			if (name === 'king1sloth') {
				this.add("c|King1Sloth|Esse é dubom. Cof cof. Dei pala. Cof cof"); 
			}
			if (name === 'bluemander') {
				this.add('c|BlueMander|vendo bolo');
			}
			if (name === '12EC') {
				this.add('c|12EC|ta saindo da jaula o monstro');
			}
			if (name === 'dr4xl3r') {
				this.add('c|Dr4xl3r|nego perdeu a noção do perigo');
			}
			if (name === 'inuchitai') {
				this.add('c|InuChitai|Hora do Show Porra!');
			}
			if (name === 'iloveperidot') {
				this.add('c|I Love Peridot|MINHA VEZ,SE ME MATAR É GUEI');
			}
			if (name === 'sekkei') {
			    this.add('c|Sekkei|prepare-se para ser haxeado >;v');
	     	}
	     	if (name === 'Netjerk') {
			    this.add('c|Netjerk|Oi,amiguinhos');
	     	}
	     	if (name === 'mrhaunted') {
			    this.add('c|Mr. Haunted|Okay, agr não me use');
	     	}
	     	if (name === 'luckyryu') {
			    this.add('c|LuckyRyu|É 14 ANOS CARALHO');
	     	}
	     	if (name === ' MacOSX') {
			    this.add('c| MacOSX|Era essa peça que você queria?');
	     	}
	     	if (name === 'vinnyhunter') {
			    this.add('c|vinny_hunter|Que Pernão heim... que horas abre?');
	     	}
	     	if (name === 'hyogafodex') {
			    this.add('c| Hyogafodex|Sdds indigo antigo');
	     	}
	     	if (name === 'byenix') {
			    this.add('c|Byenix|sua main é minha otaro');
	     	}
	     	if (name === 'cptlask') {
			    this.add('c|Cpt.Lask|The legend never dies');
	     	}
	     	if (name === 'maleficlover') {
			    this.add('c|MaleficLover|O mindingo chegou');
	     	}
	     	if (name === 'avillez') {
			this.add('c|Avillez|Boas peçoal');
			}
			if (name === 'powergens') {
			this.add('c| powergens🐒|Ô adriano ta me ouvindo');
			}
			if (name === 'empoxv') {
			this.add('c|Empo XV|Então tá, né?');
			}
			if (name === 'supercanarinho') {
			this.add('c| Super Canarinho|Sabe por que? **Porque eu sou o Super Canarinho!**');
			}
			if (name === 'vdk') {
			this.add('c| VdK|vdd');
			}
			if (name === 'ilopes') {
			this.add('c| ilopes|Hora de ser julgado pelo Bird Mito!');
			}
			if (name === 'zyne') {
			this.add('c| Zyne|Minhas beyblade');
			}
			if (name === 'clppy') {
			this.add('c|Clіppy|Precisa de ajuda?');
			}
			if (name === 'lordvinny18') {
			this.add('c| Lord Vinny18|Bia cum ganço !!!');
			}
			if (name === 'lorojomse') {
			this.add('c| loro jomse🐒|▄︻┻═┳一 fica esperto!');
			}
			if (name === 'skylinn') {
			this.add('c| Sky Linn|THE SKY LINN HAS BEEN PLANTED');
			}
			if (name === 'Demmonic') {
			this.add('c| Demmonic|vem que eu vou te tacar o piru');
			}
			if (name === 'cssgabriel1200') {
			this.add("c|CSSGabriel1200|My Body is Ready");
			}
			if (name === 'darkmetaldragon') {
			this.add('c| Darkmetaldragon|UFO POOOORNO!!!');
			}
			if (name === 'mrbeam') {
			this.add('c| Mr Beam|Vc é meu melhor amigo ta');
			}
			if (name === 'gslure') {
			this.add('c|gslure|Fight me irl');
			}
			if (name === 'blackhurricane') {
			this.add('c|Black Hurricane|Ala poke mó bosta esse ae, gg izi');
			}
			if (name === 'dblasthd') {
			this.add('c| DBlastHD|Cabrão');
			}
			if (name === 'shuthegamer007') {
			this.add('c|Shuthegamer007|VEM MONXTRO');
			}
			if (name === 'carlos2345') {
			this.add('c|Carlos2345♠✳|amiga chegay');
			}
			if (name === 'leysa') {
			this.add('c|Leysa|Oiii galeraa... Chegueii...');
			}
			if (name === 'kaitomusic') {
			this.add('c| KaitoMusic|Annyeong.');
			}
			if (name === 'guguzinxv') {
			this.add('c| GuguzinXV|vamo clan.');
			}
			if (name === 'eldergamer011') {
			this.add('c|Eldergamer011|Thanks got their fags');
			}
			if (name === 'ggspok') {
			this.add('c| ggspok|VC N ME VIU CHEGANDO?');
			}
			if (name === 'chorume') {
			this.add('c| CHORUME|EAE CARALHOW');
			}
			if (name === 'saraii') {
			this.add("c|Saraii|EL DIABLO ESTA CHEGANDO EM SU SKATE, SINTA EL FLIPE");
			} 
			if (name === 'sagadegemeos') {
			this.add("c|Saga de Gemeos|Morre Diabo!");
			}
			if (name === 'skydust') {
			this.add("c| sky dust|Oi pessoas bonitas");
			}
			if (name === 'wiwroxie') {
			this.add("c| wiw roxie|finge que eu vim montado em uma meganium");
			}
			if (name === 'mariobros2') {
			this.add("c| Mariobros2|VAI ARSENAL");
			}
			if (name === 'dragon500') {
			this.add("c| dragon500|é hora do AMV baby");
			}
			if (name === 'waifuzinha') {
			this.add("c| Waifuzinha|Mwahahah! Você irá perder pra Waifuzinha, a melhor jogadora de Pokémon do universo! >:3");
			}
			if (name === 'aurorra') {
			this.add("c| Aurorra|Oi... Cheguei para brilhar!!");
			}
			if (name === 'dragoniru') {
			this.add("c| Dragoniru|Sou randão memu.");
			}
			if (name === 'siirin') {
			this.add("c|Siirin|fassil");
			}
			if (name === 'hanakoikezawa') {
			this.add('c| Hаnаko Ikezаwа|Grr..');
			}
			if (name === 'ggggd') {
			this.add('c| ggggd|Tudi Biem?');
			}
			if (name === 'felipesoullx') {
			this.add('c| Felipe SoullX|Git gud');
			}
			if (name === 'closedbeta') {
			this.add('c| Closed_Beta|Opa fion');
			}
			if (name === 'zicafeliped') {
			this.add('c| zicafeliped|Sou o zica e sou zika');
			}
			if (name === 'lukesweep') {
			this.add('c|LukeSweep|Olá, caro '+ pokemon.side.foe.name +'');
			}
			if (name === 'cratthew') {
			this.add('c|Cratthew|Sintam o meu foder');
			}
			if (name === 'cratthew') {
			this.add('c|Cratthew|Digo, poder');
			}
			if (name === 'zepanda') {
			this.add('c| zepanda|O troll chegou');
			}
			if (name === 'mbshadowmaze') {
			this.add('c| MB ShadowMaze|Eu shipo KeldoRyu');
			}
			if (name === 'cheshirec') {
			this.add('c| Cheshire C|Vou vingar o antigo Indicu');
			}
			if (name === 'brunov8') {
			this.add('c| BrunoV8|Vendo meu cú');
			}
			if (name === 'mulashiny') {
			this.add('c|Mula Shiny|Smeargle mais forte q jesus');
			}
			if (name === 'spl4sh') {
			this.add('c|Spl4sh|Splash porra imo');
			}
			if (name === 'wdinggaster') {
			this.add('c|W.Ding Gaster|✌☹✌ ✈🕆☜ ⚐❄✌☼✋⚐📪😐☺😐☺😐☺😐☺😐☺');
			}
			if (name === 'sonic213') {
			this.add("c|Sonic213|It's time for Rock 'n Roll");
			}
			if (name === 'queju') {
			this.add('c|Queju|xupingole xarra');
			}
			if (name === 'marvelsix') {
			this.add('c|MarvelSix|Minha vai mão decolar e vai banir a tua cara!');
			}
			if (name === 'mixell') {
			this.add('c|Mixell_Konzern|COMANDO VERMELHO CHEGOU TÁ DOIS TÁ CALMO!!!!!');
			}
			if (name === 'lure') {
			this.add('c|Lure|tudo pode acontecer');
			}
			if (name === 'xinsrew') {
			this.add("c|xInsrew|What's that coming over the hill?");
			}
			if (name === 'marcodinatale') {
			this.add("c|Marco Di Natale|Forza Itália!");
			}
			if (name === 'doremifacuzi') {
			this.add("c|Doremifacuzi|eu sai do meu terraria pra isso ;`-´;");
			}
				if (name === 'wheitron') {
			this.add("c|Wheitron |FUCK LELE!");
			}
			///////////////////////////////
		},
	
		// Frase de faint para o mula
		onFaint: function (pokemon) {
			if (pokemon.mulaTransformed) {
				pokemon.name = 'Mula Shiny';
				pokemon.mulaTransformed = false;
			}
			let name = toId(pokemon.name);
			let sentences = [];
			let sentence = '';

			// MSG MANDIGO DE FAINT.
				if (name === 'wheitron') {
			this.add("c|Wheitron |The Based Lord Does Not Aways Win!");
			}
			
			if (name === 'mrloser') {
				this.add("c|MrLoser|/me está ausente");
			}
	    	if (name === 'halfwaycrooks') {
				this.add('c|Halfway Crooks|VAI TOMAR NO CU');
			}
			if (name === 'king1sloth') {
				this.add('c|King1Sloth|Vo caga.');
			
			}
			if (name === 'bluemander') {
				this.add('c|BlueMander|vendo panico nas xoxotinhas alagoanas 1 e gozando no jacentinho por 10,99 interessados mandem pm.');
			}
			if (name === '12EC') {
				this.add('c|12EC|SE ENXERGA PORRA... VAI TOMAR NO MEIO DA ÍRIS DO OLHO DO TEU  SEU FILHO DUMA VENDEDORA DE PIROCÓPTERO.! SEU PAI VENDE BILHETE DE LOTERIA ESPORTIVA NA FRENTE DA SAPATARIA SEU FILHO DUMA PUTA DO CARALHO.! TOMARA Q SUA VÓ ESCORREGUE NO BOX ENQTO TIVER TOMANDO BANHO E CAIA DE TESTA NA SABONETEIRA SEU CORNO DO CARALHO.! QUERO MAIS EH QUE VC SE FODA JUNTO COM TODA A SUA FAMÍLIA AKELE BANDO DE CATADOR DE GARRAFA DO CENTRO COMUNITÁRIO.! SUA MÃE DA AULA DE MAMULENGO PROS PRESIDIÁRIOS DO CARANDIRÚ SEU FILHO DA PUTA.! SEU PAI ANDA PUXANDO UMA CARROÇA PELA CIDADE CATANDO PAPELÃO PRA DEPOIS FAZER UM PACOTÃO E VENDER TUDO POR 1 REAL! SUA MÃE ENCAPA SEUS LIVROS E CADERNOS COM SACO DE ARROZ TIO JOÃO SEU FILHO DUMA LAVADERA DO CARALHO.! SEU PAI VENDE REDE NO FAROL SEU FILHO DA PUTA.! SEU VÔ CONSERTA PANELA DE PRESSÃO E AMOLA FACA DE PORTA EM PORTA SEU FILHU DUM PÉ DE AIPIM.! SEU PAI FAZ CARRETO DE KOMBI PORRA... CARALHO.! VAI TOMA NO  SEU FILHO DA PUTA EH ESSA PORRA DESSE CARALHO ESPACIAL VUANU ATRÁS DE VOCÊ PORRA VAI TOMA NO  CARALHO.! QUERO MAIS EH Q VC SE FODA E QUE A TOWNER Q SEU PAI USA PRA TRABALHAR (PERUEIRO FILHO DA PUTA) PEGUE FOGO COM VC, SUA MÃE, SUA IRMÃ, SUA VÓ E MAIS 3 CLIENTES... SEM CONTAR TBM Q QUERO Q TENHA INFILTRAÇÃO NO SEU BARRACO TODO.! QUERO Q SUA FAMÍLIA TODA SEJA VÍTIMA DUMA EPIDEMIA DE MALÁRIA E FEBRE AMARELA.! E DIGO MAIS! DESEJO QUE VOCÊ TENHA CANCER NO CÉREBRO E QUE SUA MÃE CAIA COM O  NA QUINA DA MESA DA SALA.! SUA MÃE GUARDA PÉ DE MOLEQUE E SUSPIRO QUE ELA FAZ PRA VENDE EM PACOTE DE MANTEIGA CAMPESINA SEU FILHO DUMA BISCATE RAMPEIRA E SEM DONO DO CARALHO QUERO MAIS EH Q VC MORRA JUNTO COM TODA SUA FAMÍLIA PORRA CARALHO VAI TOMA NO  MERDA VAI SE FUDER... FILHO DUM SACO DE ADUBO MANAH...! SEU PAI FAZ GLOBO DA MORTE DE BARRAFORTE COM SUA MÃE NA GARUPA FILHO DA PUTA.! SUA MÃE AGUENTA A TORCIDA TODA DO CORINTHIANS E DO FLAMENGO SOZINHA E AINDA PEDE BIS SEU CORNO DO CARALHO, FILHO DA PUTA! SEU PAI É FEIRANTE AQUELE CORNO VENDEDOR DE ALFACE! SUA MÃE PEDE ESMOLA JUNTO COM TEUS TIOS NA FAROL AQUELA MULAMBA DO CARALHO!...SEU MÃE VENDE AMENDOIM SEM CAMISA NO ESTADIO DE FUTEBOL SEU FILHO DUMA VAGABUNDA VADIA! SEU PAI É GAY IGUAL A VOCE SEU FILHO DUMA CADELA SARNENTA, PEGUEI ELE NA GRAVAÇÃO DO PROGRAMA DO LEÃO LOBO PARTICIPANDO DE UMA SURUBA JUNTO COM O CLODOVIL SUA BICHA ENRUSTIDA DO CARALHO!...SUA MÃE É UMA PISTOLEIRA, (E DAS BOAS) FEZ SERVIÇO COMPLETO PRA MIM E PRA MINHA GALERA, SEU FILHO DE UMA VERDADEIRA PUTA MALDITA!...SEU PAI AQUELE CORNO DO CACETE É GARI, E SUA MÃE É VARREDORA DE RUA SEU FILHO DO CAPETA!...ESPERO QUE VOCE SE FODA, MAS QUE SE FODA MESMO, E QUE VOCE SEJA ATROPELADO POR UM TREM, E QUANDO SEUS PEDAÇOS CHEGAREM NO IML, O LEGISTA AINDA COMA SEU  HAHAHAHA, ATÉ MORTO SE TA DANDO O RABO RAPAIZ...SE FODE FILHO DE UMA RAPARIGA DO MATO...SUA MÃE DIRIGI CAMINHÃO COM AS TETAS DE FORA, AQUELA VACA GORDA FILHA DA PUTA! ...SEU PAI TEM CARTEIRINHA VIP NO GALA GAY AQUELE TRANSFORMISTA DO CARALHO...PORRA! VAI SE FUDE SEU NERD DO CARALHO!...VOCE NÃO NASCEU, VOCE FOI CAGADO SEU MONTE DE MERDA DE CAVALO!...SUA MÃE AQUELA VAGABA DO CARALHO FOI PEGA ROUBANDO UM PACOTE DE BOLACHA MARIA, DO SUPERMERCADO AQUELA DETENTA DO CARALHO! SE ENCHERGA SEU PORRA!...VOCE NÃO PASSA DE UM GRANDE FILHO DA PUTA!...SUA FAMILIA TODA TEM PASSAGEM PELA POLICIA, ESSA QUADRILHA DEDESGRAÇADOS!...QUANDO VOCE SAIR DE CASA PARA IR NA PADARIA COMPRAR BAGUETE, PARA ENFIAR NAQUELE ** ARROMBADO DA SUA MÃE, SEU PAI AQUELE CARRETERO DESGRAÇADO VAI TE ATROPELAR COM A CARROÇA DELE!...TU TEM QUE MORRER SEU MERDA, SEU CLANDESTINO FILHO DA PUTA!...');
			}
			if (name === 'dr4xl3r') {			
				this.add('c|Dr4xl3r|nem to mad');
			}
			if (name === 'inuchitai') {
				this.add('c|Inuhitai|vc é bme horrivel');
			}
			
			if (name === 'iloveperidot') {
				this.add('c|I Love Peridot|Vou pedir pro Jay fazer um BO por agressão >;(');
			}
			if (name === 'mrhaunted') {
			    this.add('c|Mr. Haunted|Parabains, você me matou, para mais informações consulte: www.hauntedenoob.com');
	     	}
			if (name === 'vlayzer') {
			this.add('c|Vlayzer|No '+ pokemon.side.name + '-dono yamate!');
			}
			if (name === 'rezyalv') {
			this.add('c| Rezyalv|💧♏ ◻❒♏♍♓⬧♋❒♏❍ ♎♏ ❍♓❍ ♏⬧⧫♋❒♏♓ ⧫□♍♋■♎□ □ ❍♏■□❒ ❖♓□●♓■□ ♎□ ❍◆■♎□📪♋♎♏◆⬧');
			}
			if (name === 'xarra') {
				this.add('c|xArra|odeio '+ pokemon.side.foe.name +'s e vou matalos');
			}
			if (name === 'sekkei') {
				this.add('c|Sekkei|o hax dele é mais forte que o meu :c');
			}
			if (name === 'Netjerk') {
			    this.add('c|Netjerk|trolou');
	     	}
	     	if (name === 'luckyryu') {
			    this.add('c| LuckyRyu|sad ;-;');
	        }   
	        if (name === ' MacOSX') {
			    this.add('c|  MacOSX|/me foi danificado!');
	     	}
	     	if (name === 'ashketchumgamer') {
			    this.add('c|Ash KetchumGamer|.fomos bem');
	     	}
	     	if (name === 'vinnyhunter') {
			    this.add('c|vinny_hunter|MODERE COM MODERAÇÃO');
	     	}
	     	if (name === 'hyogafodex') {
			    this.add('c| Hyogafodex|Nego ruim eh foda');
	     	}
	     	if (name === 'okira') {
			    this.add('c|okir ͜͡a 💃ツ|turururu');
	     	}
	     	if (name === 'byenix') {
			    this.add('c|Byenix|Fodaci');
	     	}
	     	if (name === 'cptlask') {
			    this.add('c|Cpt.Lask|lol git gud scrub');
	     	}
	     	if (name === 'maleficlover') {
			    this.add('c|MaleficLover|Vc fede');
	     	}
	     	if (name === 'powergens') {
			this.add('c| powergens🐒|Que absurdo da sociedade brasileira');
			}
			if (name === 'empoxv') {
			this.add("c|Empo XV|Faire quoi? C'est la vie de merde");
			}
			if (name === 'supercanarinho') {
			this.add("c| Super Canarinho|Me fizeram impitman! **NÃO AO GOLPE!**");
			}	
			if (name === 'vdk') {
			this.add("c| Vdk| Stronk");
			}
			if (name === 'ilopes') {
			this.add('c| ilopes|Eu fui humilde com você, deixando você vencer!');
			}
			
			if (name === 'zyne') {
			this.add('c| Zyne|rage quit');
			}
			if (name === 'clppy') {
			this.add('c|Clіppy|Péssimo usuário, nota 9.');
			}
			if (name === 'queju') {
			this.add('c|Queju|eu já esperava por isso');
			}
			if (name === 'wiwroxie') {
			this.add("c| wiw roxie|agora finge que ela ta me carregando desmaiado");
			}
			if (name === 'lordvinny18') {
			this.add('c| Lord Vinny18|Eu o subs-timei !!!');
			}
			if (name === 'lorojomse') {
			this.add('c| loro jomse🐒|pelo menos da like :(' );
			}
			if (name === 'skylinn') {
			this.add('c| Sky Linn|CABALO IMUNDO DO KRL');
			}
			if (name === 'Demmonic') {
			this.add('c| Demmonic|CABALO IMUNDO DO KRL');
			}
			if (name === 'cssgabriel1200') {
			this.add("c|CSSGabriel1200|RIP Potugues");
			}
			if (name === 'darkmetaldragon') {
			this.add('c| Darkmetaldragon| nós se ve por ai');
			}
			if (name === 'mrbeam') {
			this.add('c| Mr Beam|Vai se duder babaca');
			}
			if (name === 'gslure') {
			this.add('c|gslure|H A X');
			}
			if (name === 'blackhurricane') {
			this.add('c|Black Hurricane|Orra viado');
			}
			if (name === 'dblasthd') {
			this.add('c| DBlastHD|Life is pointless anyway just kill yourself too you whortless piece of shit fuck boy');
			}
			if (name === 'shuthegamer007') {
			this.add('c|Shuthegamer007|Sem lavadora brastemp,sou ninguém');
			}
			if (name === 'carlos2345') {
			this.add('c|Carlos2345♠✳|já acabou jéssica');
			}
			if (name === 'leysa') {
			this.add('c|Leysa|:/ Só no Hax... Bjimmm... fuiii...');
			}
			if (name === 'kaitomusic') {
			this.add('c| KaitoMusic|Hyung nunca vai te notar ;-;');
			}
			if (name === 'guguzinxv') {
			this.add('c| GuguzinXV|procede clan?');
			}
		    if (name === 'ggspok') {
			this.add('c| ggspok|Opa fion');
			}
			if (name === 'eldergamer011') {
			this.add('c|Eldergamer011|Bye Bye');
			}
			if (name === 'chorume') {
			this.add("c| CHORUME|OCAL, IXO, AACA, OTAO, ORRIVEL, IIOTA!! e por isso que oce ao e zika o patao, johmsom do aralho.");
			this.add('-message', 'CHORUME was muted by Clippy for 1 hour.');
			}
			if (name === 'saraii') {
			this.add("c|Saraii|OH NO EL DIABLO CAIU DE SU SKATE, RALOU LAS NADEGAS MAS VORVERÁ OUTRA UÊRA!");
			}
			if (name === 'sagadegemeos') {
			this.add("c|Saga de Gemeos|faleci");
			}
			if (name === 'skydust') {
			this.add("c| sky dust|q");
			}
			if (name === 'skydust') {
			this.add("c| sky dust|jo");
			}
			if (name === 'skydust') {
			this.add("c| sky dust|morri pq me trolei");
			}
			if (name === 'mariobros2') {
			this.add("c| Mariobros2|perdi");
			}
			if (name === 'dragon500') {
			this.add("c| dragon500|VRUUUUM");
			}
			if (name === 'waifuzinha') {
			this.add("c| Waifuzinha|Oh.. eu preciso treinar mais ;-;");
			}
			if (name === 'aurorra') {
			this.add("c| Aurorra|Pareçe que o jogo acabou para mim. :/ ");
			}
			if (name === 'dragoniru') {
			this.add("c| Dragoniru|Randão dead");
			}
			if (name === 'siirin') {
			this.add('c|Siirin|aprende a jogar '+ pokemon.side.foe.name +'');
			}
			if (name === 'hanakoikezawa') {
			this.add('c| Hаnаko Ikezаwа|'+ pokemon.side.foe.name +' sua waifu é puta');
			}
			if (name === 'ggggd') {
			this.add('c| ggggd|Fui o melhor leader da historia do Vermilion, bjs haters.');
			}
			if (name === 'felipesoullx') {
			this.add('c| Felipe SoullX|Pelo menos to realmente quase pegando a mina');
			}
			if (name === 'closedbeta') {
			this.add('c| Closed_Beta|Ctz que é hax, seu falho');
			}
			if (name === 'zicafeliped') {
			this.add('c| zicafeliped|foi hax');
			}
			if (name === 'cratthew') {
			this.add('c|Cratthew|etaporra');
			}
			if (name === 'zepanda') {
			this.add('c| zepanda|R.I.P o melhor trollador');
			}
			if (name === 'mbshadowmaze') {
			this.add('c| MB ShadowMaze|Esto es apenas un ensayo');
			}
			if (name === 'cheshirec') {
			this.add('c| Cheshire C|A Cafeteria está fechada');
			}
			if (name === 'brunov8') {
			this.add('c| BrunoV8|Alguem quer meu cú?');
			}
			if (name === 'mulashiny') {
			this.add('c|Mula Shiny|Toma no seu cu');
			}
			if (name === 'spl4sh') {
			this.add('c|Spl4sh|quer me foder paga jantar');
			}
			if (name === 'wdinggaster') {
			this.add('c|W.Ding Gaster|☞⚐👎✌📫💧☜ ☜💧💧✌ 💣☜☼👎✌📪✞✌✋ ❄⚐💣✌☼ ☠⚐ 👍🕆 ✞⚐👍☜ ✈🕆☜ ✞☜✋⚐ ❄☼✌👎🕆☪✋☼ ✋💧💧⚐📪❄☼⚐✠✌');
			}
			if (name === 'sonic213') {
			this.add("c|Sonic213|You're gonna crash,AH!");
			}
		    if (name === 'marvelsix') {
			this.add('c|MarvelSix|FOI GOLPE!');
			}
			if (name === 'mixell') {
			this.add('c|Mixell_Konzern|ADA NÃÃÃÃÃÃÃOOOOOO');
			}
			if (name === 'xinsrew') {
			this.add("c|xInsrew|It's a spaceship up our eyes.. x.x");
			}
			if (name === 'marcodinatale') {
			this.add("c|Marco Di Natale|Mamma mia, che figlio di una cagna!");
			}
			if (name === 'germinha') {
			this.add('c|germinha|vai se fuder doremi');
			}
			if (name === 'doremifacuzi') {
			this.add('c|Doremifacuzi|vo joga terraria xau(pau no cu do germinha)');
			}
			////////////////////////////////
		},
]
