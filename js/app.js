// Enemies our player must avoid
var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x=x;
    this.y=y;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.width= 75;
    this.height= 30;

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    enemy1.x+=(Math.floor(Math.random()*100)+40)*dt
    enemy2.x+=(Math.floor(Math.random()*100)+30)*dt
    enemy3.x+=(Math.floor(Math.random()*100)+50)*dt
    enemy4.x+=(Math.floor(Math.random()*100)+55)*dt


    if(this.x>490){

        this.x=Math.floor(Math.random()*100+100)*(-1)
    }



};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player{
    constructor(){
        this.x=200;
        this.y=400;
        this.sprite='images/char-boy.png';
        this.width= 25;
        this.height=30;
}



    update(){

        for(var i=0; i<allEnemies.length; i++){
            if(this.x < allEnemies[i].x+allEnemies[i].width &&
            this.x + player.width > allEnemies[i].x &&
            this.y<allEnemies[i].y + allEnemies[i].height &&
            this.height + this.y > allEnemies[i].y){
                player.y=400;
                player.x=200;  //go back to start !

                randomGems();  // rearrange gems on the grid
            }

        }

    }



    win(){
        setTimeout(()=>{
            this.y=400;
            randomGems();
            alert(`         You have reached the watter and saved yourself,
                if you wish to try again, PRESS "OK"--->`)
            },500)

        }



    render(){
        ctx.drawImage(Resources.get(this.sprite),this.x,this.y)

    }

    handleInput(key){

        switch (key){
            case "right":
                if(this.x!=400){
                    this.x+=100;
                }

            break;

            case "left":
                if(this.x!=0){
                    this.x-=100;
                }

            break;

            case "up":
                if(this.y>300){
                    this.y-=100;
                }else if(this.y>0){
                this.y-=87;
                }

                if(this.y<0 && gem.x===-500 && gem2.x===-500){
                    this.win();

                }

            break;

            case "down":
            if(this.y<300){
                this.y+=87;
            }else if(this.y!=400){
                this.y+=100;
            }

            break;

        }

    }



}

class Gem{
    constructor(x,y){
        this.x= x;
        this.y= y;
        this.sprite='images/Gem Green.png';

        this.height=100;
        this.width=100;
    }

    render(){
        ctx.drawImage(Resources.get(this.sprite),this.x,this.y)

    }

    update(){
        if(this.x < player.x+player.width &&
        this.x + this.width > player.x &&
        this.y<player.y + player.height &&
        this.height + this.y > player.y){
            this.x=-500;  //gem is collected
    }

}
}

const gem= new Gem(0,200);
const gem2= new Gem(300,400);



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var player = new Player;
var enemy1= new Enemy(-100,310);
var enemy2= new Enemy(-130,225);
var enemy3= new Enemy(-111,145);
var enemy4= new Enemy(-140,60);

const allEnemies=[enemy1,enemy2,enemy3,enemy4];


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


function randomGems(){
    const randomx=[0,100,200,300,400]
    gem.x=randomx[Math.floor(Math.random()*4)];
    gem.y=Math.random()*200;
    gem2.x=randomx[Math.floor(Math.random()*4)];
    gem2.y=Math.random()*200;
    }

const button= document.querySelector(".start")
const prozor=document.querySelector(".window")
button.addEventListener('click',()=>{
    prozor.style.display="none";
})
