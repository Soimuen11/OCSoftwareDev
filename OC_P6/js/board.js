"use strict"

class Board {
		constructor(nb_rows, nb_cols, player_props, weapon_props){
				this.nb_rows = nb_rows;
				this.nb_cols = nb_cols;
				this.model = this.create_model();
				this.positions = {};
				this.draw();
				this.dimmed_loc(15);
				this.weapon_loc(weapon_props);
				this.player_loc(player_props);
				while (this.side_by_side() === true){
						this.get_sq(this.positions['player1']).player = null
						this.get_sq(this.positions['player2']).player = null
						this.player_loc(player_props);
				}
				//initializing board for active player 
				this.valid_squares = this.find_valid_squares();
				this.highlight_valid_sq();
		}

		player_turn(position) {
				this.move_player(position.row, position.col)
				this.model[position.row][position.col].clicked = false
				this.switch_weapon();
				this.unhighlight_valid_sq();
				if (this.side_by_side() === false) {
						this.switch_player();
						this.find_valid_squares();
						this.highlight_valid_sq();
				}
		}

		check_click() {
				let position = null
				let clicked = false
				for (let i=0; i<=this.nb_rows && !clicked; i++){
						for (let j=0; j<=this.nb_cols && !clicked; j++) {
								if (this.model[i][j].clicked === true){
										clicked = true;
										position = {row: i, col: j};
								}
						}
				}
				return position	
		}
		create_model(){
				var model = [];  
				for (let i=0; i<=this.nb_rows; i++) {
						model.push( [] );  
						for (let j=0; j<=this.nb_cols; j++) {
								let sqId = `${i}-${j}`;
								model[i].push(new Square(sqId));  
						}
				}
				return model;
		}

		draw(){
				let grid = $('<table>');
				for (let i = 0; i <= this.nb_rows; i++){
						let trElem = $("<tr>");
						for (let j = 0; j <= this.nb_cols; j++){
								let tdId=`${i}-${j}`;	
								$('<td>')
										.attr('id', tdId)
										.appendTo(trElem);
						}
						$(grid).append(trElem); 
				}
				$("#game_board").html(grid);  
		}

		dimmed_loc(nb_dimmed){ 
				while (nb_dimmed > 0){
						//Selecting unavailable squares
						let rows = Math.floor(Math.random()*(this.nb_rows + 1)); 
						let cols = Math.floor(Math.random()*(this.nb_cols + 1)); 
						let sq = this.model[rows][cols];
						if (!sq.dimmed){
								sq.dimmed = true;
								nb_dimmed--;
						}
				} 
		}

		weapon_loc(weapon_props){ 
				let props_copy = weapon_props.slice(); // make an actual copy of the array
				//no need to generate default weapon on board (=> so >1)
				while (props_copy.length > 1){
						//Find an empty square to place a weapon
						let rows = Math.floor(Math.random()*(this.nb_rows + 1)); 
						let cols = Math.floor(Math.random()*(this.nb_cols + 1)); 
						let sq = this.model[rows][cols];
						if (!sq.dimmed && !sq.weapon){
								let props = props_copy.pop(); // props is an object with the various properties of weapon
								sq.weapon = new Weapon(props.name, props.damage); 
						}
				}
		}

		player_loc(player_props){ 
				let props_copy = player_props.slice(); //make an actual copy of the array
				while (props_copy.length > 0){
						//Find an empty square to place a player
						let rows = Math.floor(Math.random()*(this.nb_rows + 1)); 
						let cols = Math.floor(Math.random()*(this.nb_cols + 1)); 
						let sq = this.model[rows][cols];
						if (!sq.dimmed && !sq.weapon && !sq.player){
								let props = props_copy.pop(); // props is an object with the various properties of player
								sq.player = new Player(props.name, props.weapon); 
								//this sets the default active player to player 1
								if (props_copy.length == 0){
										sq.player.active = true;
								}
								this.positions[sq.player.name] = {
										row: rows,
										col: cols
								}								
						}
				}
		}

		find_valid_squares(){
				//LOOKS THROUGH THE GRID IN ALL 4 DIRECTIONS STARTING FROM THE PLAYER'S LOCATION
				let valid_squares = [];
				let active_player_position = this.get_player_position(true);

				//UP
				for (let range=1;range<=3;range++){
						let checked_row = active_player_position.row-range; 
						let bool = this.square_exists(checked_row, active_player_position.col);
						if (bool === false){
								break;
						}
						let sq = this.model[checked_row][active_player_position.col];
						if (sq.dimmed === false && sq.player === null){
								valid_squares.push(sq);	
						} else {
								break;
						}
				}


				//DOWN
				for (let range=1;range<=3;range++){
						let checked_row = active_player_position.row+range; 
						let bool = this.square_exists(checked_row, active_player_position.col);
						if (bool === false){
								break;
						}
						let sq = this.model[checked_row][active_player_position.col];
						if (sq.dimmed === false && sq.player === null){
								valid_squares.push(sq);	
						}else{
								break;
						}
				}

				//LEFT
				for (let range=1;range<=3;range++){
						let checked_col = active_player_position.col-range; 
						let bool = this.square_exists(active_player_position.row, checked_col);
						if (bool === false){
								break;
						}
						let sq = this.model[active_player_position.row][checked_col];
						if (sq.dimmed === false && sq.player === null)
						{
								valid_squares.push(sq);	
						}else{
								break;
						}
				}

				//RIGHT
				for (let range=1;range<=3;range++){
						let checked_col = active_player_position.col+range; 
						let bool = this.square_exists(active_player_position.row, checked_col);
						if (bool === false){
								break;
						}
						let sq = this.model[active_player_position.row][checked_col];
						if (sq.dimmed === false && sq.player === null){
								valid_squares.push(sq);	
						}else {
								break;
						}
				}

				//IT RETURNS AN ARRAY OF SQUARES FROM THE MODEL
				this.valid_squares = valid_squares
				return valid_squares;
		}

		get_player_position(active){
				//IS THIS THE ACTIVE PLAYER AND IF YES GET ROW AND COL:
				//PLAYER 1 IS ACTIVE BY DEFAULT AT THE BEGINNING OF THE GAME (defined in player_loc)
				let position = this.positions["player1"]
				// console.log(position)
				let sq = this.model[position.row][position.col];
				if (sq.player.active != active){
						position = this.positions['player2'];
				}
				return position;
		}

		//DETERMINE WHETHER A SQUARE IS WITHIN THE BOARD OR OUTSIDE OF IT
		square_exists(row, col){
				if (row < 0 || col < 0){
						return false;
				}else if (row > this.nb_rows ||  col > this.nb_cols ){
						return false;
				}else{
						return true;
				}
		}

		highlight_valid_sq(){
				for (let sq of this.valid_squares){
						sq.highlighted = true;
				}
		}
		unhighlight_valid_sq(){
				for (let sq of this.valid_squares){
						sq.highlighted = false;
				}
		}

		//GAME LOOP
		move_player(row, col){
				let position = this.get_player_position(true);
				let player = this.model[position.row][position.col].player
				this.model[row][col].player = player;
				this.model[position.row][position.col].player = null;
				this.positions[player.name] = {row: row, col: col}
		}

		switch_weapon(){
				let position = this.get_player_position(true);
				let sq = this.model[position.row][position.col] 
				let player = this.model[position.row][position.col].player
				if (sq.weapon !== null){
						let old_sq_weapon = sq.weapon;
						let old_player_weapon = player.weapon;
						player.weapon = old_sq_weapon;
						sq.weapon = old_player_weapon;
				}
		}

		switch_player(){
				let position_active = this.get_player_position(true);
				let position_inactive = this.get_player_position(false);
				let sq_active = this.model[position_active.row][position_active.col];
				let sq_inactive = this.model[position_inactive.row][position_inactive.col];
				sq_active.player.active = !sq_active.player.active;
				sq_inactive.player.active = !sq_inactive.player.active;
		}

		side_by_side(){
				let position_player1 = this.positions['player1']
				let position_player2 = this.positions['player2'] 
				//LEFT
				if (position_player1.row - 1 == position_player2.row
						&& position_player1.col == position_player2.col){
						return true;
				}
				//RIGHT
				else if(position_player1.row + 1 == position_player2.row    
							&& position_player1.col == position_player2.col){
						return true;
				}
				//UP
				else if(position_player1.col - 1 == position_player2.col    
							&& position_player1.row == position_player2.row){
						return true;
				}
				//DOWN
				else if(position_player1.row + 1 == position_player2.row    
							&& position_player1.col == position_player2.col){
						return true;
				}
				else if(position_player1.col + 1 == position_player2.col    
							&& position_player1.row == position_player2.row){
						return true;
				}
				return false;

		}

		get_sq(position) {
				return this.model[position.row][position.col]
		}
}

