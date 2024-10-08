import { distanceToSpeech } from "DistanceToSpeech";

declare namespace globalThis {
    let distanceToSpeech : distanceToSpeech
}

@component
export class NewScript extends BaseScriptComponent {
    @input()
    user: SceneObject;
    @input()
    person: SceneObject;
    
    distancePrev: number = 1000;
    isWarned: boolean = false;
    has_entered: boolean = false;
    
    
    onAwake() {
        this.createEvent("UpdateEvent").bind(this.onUpdate)
    
    
    }
    
    onUpdate = () => {
            let posUser = this.user.getTransform().getWorldPosition();
            let posPerson = this.person.getTransform().getWorldPosition();
              
            let distance = posUser.distance(posPerson);
            // generate a distanceGauge -> message determing if they are near someone
            //let distanceGauge = globalThis.distanceToSpeech.getMeterMessage(distance);
            // call the text to speech method 
            //globalThis.distanceToSpeech.textToSpeech(distanceGauge);
            
            /*
                // Note: This is a saved copy 
            if ((distance < 290.0) && (this.isWarned == false)){
                this.isWarned = true;   
                printMet
            } else if (distance > 300.0){
                this.isWarned = false;
                //print("out of range")
            }
        
            this.distancePrev = distance;
        */
            //let has_entered = false;
            print(distance);            
            if (distance <= 350.0){
                print("distance in range");
                if(this.has_entered==false){
                    print("activated..");
                    globalThis.distanceToSpeech.textToSpeech("Person close in front of you.");
                    //globalThis.distanceToSpeech.textToSpeech("Person close in front of you.");
                    this.has_entered = true;
                }            
            }
            // not in range
            else{
                print("not in range..");
                if(this.has_entered){
                    this.has_entered=false;
                }
            }
            //return "tech void";        
        
            //globalThis.distanceToSpeech.getMeterMessage(distance);
        
            /*
            if ((distance <= 190.0) && (this.isWarned == false)){
                    this.isWarned = true;   // for testing is false
                    globalThis.distanceToSpeech.getMeterMessage(distance);
                    // call the text to speech method 
                    //globalThis.distanceToSpeech.textToSpeech(distanceGauge);
            } else if (distance > 190.0){
                this.isWarned = false;
                //print("out of range")
            }
        
            this.distancePrev = distance;
        */
        
     
    }

}
