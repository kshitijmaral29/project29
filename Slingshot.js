class slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness: 0.05,
        length :10
        }
        this.sling = Constraint.create(options);
this.pointB = pointB;
World.add(world,this.sling);

    }
    fly(){
        this.sling.bodyA = null;

    }

    display(){

        if(this.sling.bodyA){
        const pointA = this.sling.bodyA.position;
        const pointB = this.pointB;
        push();
        strokeWeight(3);
        stroke("red");
        line(pointA.x,pointA.y,pointB.x,pointB.y);
pop();
        }
    }
}
    
