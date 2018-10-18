// module aliases
const pn=25;
let f=0;
let particles=[];
const sw=25;
function setup(){
    createCanvas(200,200,WEBGL);
    background(0);
    
    /*for(i=0;i<pn;i++){
        particles.push(new Particle(width/2,height-(r/2)));
    }*/
}

function draw(){
    frameRate(60);
    background(0);
    translate(-width/2, -height/2);
    for(i=0;i<30;i++)
    particles.push(new Particle(width/2+f,height-(r/2)+f));
    f=random(-sw,sw);
    for(i=0;i<particles.length;i++){
      particles[i].show();
        if(particles[i].color<=0){
            
            particles.splice(i,1);
        }

        //console.log(particles.length);
    }
}


