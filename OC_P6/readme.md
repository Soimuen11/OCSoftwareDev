#OC P6
This is the PROJECT 6 of open-classrooms front-end developer path. it consists in creating a board game with HTML5/CSS3, and JQuery.

#Game rules

		1. Navigation mode
		2. Battle mode

1. ![](https://user-images.githubusercontent.com/44770966/72439434-3830a680-37a7-11ea-8e3a-7f76ec847022.png)

At the beginning of the game, you have 2 players. By default, player 1 always starts first. 
You can see that it is the active player thanks to the green color added to its player panel, on
the left-hand side of the screen. The active player has the possibility to move 3 squares UP/DOWN,
LEFT/RIGHT. The valid squares are determined by 2 factors: whether there is a player next 
to the active player, and whether there are blocked squares around it.

To move your player, you simply click on a valid square, these being highlighted in yellow. They are 
also circle-shaped. In this mode, you fist want to get the best possible weapon:

![](https://user-images.githubusercontent.com/44770966/72439662-a2e1e200-37a7-11ea-88fc-ec847f957eee.png)
- Bomb = 50 points of damage (Best weapon available)
- Gun = 30 points of damage
- Knife = 20 points of damage
- Claws = 10 points of damage (default weapon at game start)

Then you want to find the other player and engage the battle first! To do so, you need to position 
your player next to the other player. Whenever you pick up a weapon, you will be able to see your attack
power changing in your player panel.

2.BATTLE MODE

![](https://user-images.githubusercontent.com/44770966/72439797-dcb2e880-37a7-11ea-8ee6-3a8c873085f9.png)

You enter battle mode when your 2 players are side by side. The board's opacity becomes 0.5 
and you can't click on it anymore. The player engaging the battle has the honor to hit first. 
No need to say that, if you have the bomb, your opponent will be slain swiftly. 
At the end of each turn, you'll also notice that your panel has been updated. If you click on defense, your defense 
mode will be activated, so switched to 'true'. Otherwise, it will remain 'false'. If you enable defense mode, your damage 
will be significantly reduced. It's then up to you to determine whether you wanna kill or be killed. 


