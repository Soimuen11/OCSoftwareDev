"use strict"

class Square {
		constructor(id) {
				this.id = id;
				this._clicked = false;
				this._dimmed = false;
				this._highlighted = false;
				this._player = null;
				this._weapon = null;
		}

		get clicked(){
				return this._clicked;
		}

		set clicked(bool){
				this._clicked = bool;
				let td = $('#' + this.id)[0]
				if (bool){
						$(td).addClass('clicked');	
				}else{
						$(td).removeClass('clicked');
				}
		}

		get highlighted(){
				return this._highlighted;
		}

		set highlighted(bool){
				this._highlighted = bool;
				let td = $('#' + this.id)[0];
				if (bool){
						$(td).on('click', this, function(event){
								event.data._clicked = true
						});
						$(td).addClass('highlighted');
				}else{
						$(td).off('click');
						$(td).removeClass('highlighted');
				}
		}

		get dimmed(){
				return this._dimmed;
		}

		set dimmed(bool){
				this._dimmed = bool;
				let td = $('#' + this.id)[0];
				if (bool){
						$(td).addClass('dimmed');
				}else{
						$(td).removeClass('dimmed');
				}
		}

		get weapon(){
				return this._weapon;
		}

		set weapon(_weapon){
				if (_weapon === null) {
						let td = $('#' + this.id)[0];
						$(td).removeClass('weapon ' + this._weapon.name);
						this._weapon = null
				} else {
						let td = $('#' + this.id)[0];
						if (this._weapon !== null){
								$(td).removeClass('weapon ' + this._weapon.name); 
						}
						this._weapon = _weapon;
						$(td).addClass('weapon ' + this._weapon.name); 
				}
		}

		get player(){
				return this._player;
		}
		set player(_player){
				if (_player === null || _player === undefined) {
						if (this._player !== null){
								let td = $('#' + this.id)[0];
								$(td).removeClass('player ' + this._player.name);
								this._player = null
						}
				} else {
						this._player = _player;
						let td = $('#' + this.id)[0];
						$(td).addClass('player ' + this._player.name);
				}
		}
}


