var Mover = function(){
    this.location = createVector(random(width),random(height));
    this.velocity = createVector(0,0);
    this.accelaration = createVector(0,0);
    this.text = 'hiya';

    this.render = function(){
        stroke(150);
        strokeWeight(2);
        fill(0, 0, 255);

        //Draw an ellipse at this.location (random)
        text(this.text, this.location.x,this.location.y,20,20);

    }


    this.update = function(){
        //adding speed to our velocity
        this.velocity.add(this.accelaration);
        //Give the speed a limit so it doesn't get faster and faster
        this.velocity.limit(10);
        //Adding motion to the mover in a particular direction
        this.location.add(this.velocity);
    }

    this.container = function(){
        if(this.location.x < 0 || this.location.x > width){
            this.velocity.x = this.velocity.x * -1;
        }

        if(this.location.y < 0 || this.location.y > height){
            this.velocity.y = this.velocity.y * -1;
        }
    }

    this.applyForce = function(force){
        this.accelaration = force;
    }


}
