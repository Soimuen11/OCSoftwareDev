"use strict"

const players_props = [  
		{ name: "player1"},
		{ name: "player2"}
]; 

const weapon_props = [
		{name:'weapon0', damage:10},
		{name:'weapon1', damage:30},
		{name:'weapon2', damage:50},
		{name:'weapon3', damage:25},
		{name:'weapon4', damage:20},
];

class Game {
		constructor() {
				this.myboard = new Board(9, 9, players_props, weapon_props);   
				this.update_panel()
				this.start_game();
		}


		start_game(){
				let delay = setInterval(function (obj) {
						let position = obj.myboard.check_click() 
						if (position !== null) {
								obj.myboard.player_turn(position)
								// update panel
								obj.update_panel()
								if (obj.myboard.side_by_side() === true) {
										clearInterval(delay);
										obj.battle();
								}
						}
				}, 300, this)
		}
		battle(){
				let player1 = this.myboard.get_sq(this.myboard.positions['player1']).player;
				let player2 = this.myboard.get_sq(this.myboard.positions['player2']).player;

				$('#game_board').css("opacity", ".5");

				// enable buttons
				// enable events
				$('#atk1').on('click', function(event){
						if (player1.active === true) {
								// $('player0_info_panel p').css('color', 'green')
								let damage_coef = 1;
								if (player2.defense === true) {
										damage_coef = 0.5;
										player2.defense = false;
								}
								player2.life_points -= damage_coef * player1.weapon.damage;
								player1.active = !player1.active;
								player2.active = !player2.active;
						}
				});
				$('#def1').on('click', function(event){
						if (player1.active === true) {
								player1.defense = !(player1.defense);
								player2.defense = false; 
								player1.active = !player1.active;
								player2.active = !player2.active;
						}
				});
				$('#atk2').on('click', function(event){
						let damage_coef = 1;
						if (player1.defense === true) {
								damage_coef = 0.5
								player1.defense = false;
						}
						if (player2.active === true) {
								player1.life_points -= damage_coef * player2.weapon.damage;
								player1.active = !player1.active;
								player2.active = !player2.active;
						}
				});
				$('#def2').on('click', function(event){
						if (player2.active === true) {
								player2.defense = !(player2.defense);
								player1.defense = false; 
								player1.active = !player1.active;
								player2.active = !player2.active;
						}
				});

				let delay = setInterval(function (obj) {
						obj.update_panel()
						if (obj.check_win() === true) {
								clearInterval(delay)
								obj.end_game();
						}
				}, 300, this)
		}

		end_game() {
				// Print winner
				let player1 = this.myboard.get_sq(this.myboard.positions['player1']).player
				if (player1.life_points > 0) {
						$('#game_board').prepend('<div>Congratulations! Player1 HAS WON!</div>').css('font-size','2em')
				} else {
						$('#game_board').prepend('<div>Congratulations! Player2 HAS WON!</div>').css('font-size','2em')
				}
		}

		check_win() {
				let player1 = this.myboard.get_sq(this.myboard.positions['player1']).player;
				let player2 = this.myboard.get_sq(this.myboard.positions['player2']).player;
				return player1.life_points <= 0 || player2.life_points <= 0
		}

		update_panel(){ 
				let player1 = this.myboard.get_sq(this.myboard.positions['player1']).player;
				let player2 = this.myboard.get_sq(this.myboard.positions['player2']).player;

				//PANEL FOR PLAYER 1
				$("#life_1").html('Life Points: ' + player1.life_points);
				$("#atk_power_1").html('Attack Power: ' + player1.weapon.damage);
				$("#def_power_1").html('Defense:' + player1.defense);

				//PANEL FOR PLAYER 2
				$("#life_2").html('Life Points: ' + player2.life_points);
				$("#atk_power_2").html('Attack Power: ' + player2.weapon.damage);
				$("#def_power_2").html('Defense:' + player2.defense);

				if(player1.active === true) {
						$("#player1_info_panel").addClass('player_active');	
						$("#player2_info_panel").removeClass('player_active');	
				} else {
						$("#player2_info_panel").addClass('player_active');	
						$("#player1_info_panel").removeClass('player_active');	
				}
		}
}
