const r=10;
const vx=0.5;
const vy=0.8;
const ax=0.005;
const ay=0.005;
class Particle{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.vx=vx;
        this.vy=vy
        this.fade=0.4;
        this.color=100;
    }
    move(){
        this.x+=random(-this.vx,this.vx);
        this.y-=random(this.vy)
        this.vx+=ax;
        this.vy+=ay;
        this.color-=this.fade;
    }
    show(){
        fill(this.color);
        noStroke();
        ellipse(this.x, this.y,r);
        this.move();
        
    }
}