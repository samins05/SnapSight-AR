//import { Interactable } from "SpectaclesInteractionKit/Components/Interaction/Interactable/Interactable"

// do this in the global namespace so that the distanceToSpeech class can be accessed from other scripts
declare namespace globalThis {
    let distanceToSpeech: distanceToSpeech
}


// export the class distanceToSpeech -> contains methods such as textToSpeech / convertCmToMeters / printMeterMessage -> functions used to calculate distance and convert to speech
// handler functions (that react with js components) are also included in this class such as onAwake -> looks at if the button is pressed and then calls the textToSpeech function
@component
export class distanceToSpeech extends BaseScriptComponent {
    @input()
    t2s: TextToSpeechModule;

    @input()
    aud: AudioComponent;

    /*
    @input()
    button: Interactable
    */
    constructor(){
        super();
        globalThis.distanceToSpeech=this;
        print("initialized distancetospeech constructor..");
    }
    // Functions for the calculations of the distance

    // Function to convert centimeters to meters (note will not be used now )
    convertCmToMeters(distance: number): number {
        return distance / 100; 
    }

    // Function to print a message based on the distance in meters
    getMeterMessage(distanceCM: number): string {
        //print("getting...")        
        //print("this is the number:" +distanceCM)
        // if person is already warned in range 
        
        let has_entered = false;
        if (distanceCM <= 190.0){
            if(has_entered==false){
                this.textToSpeech("Person close in front of you.");
                this.textToSpeech("Person close in front of you.");
                has_entered = true;
            }            
        }
        // not in range
        else{
            if(has_entered){
                has_entered=false;
            }
        }
        return "tech void";
        /*
        let isWarned = false;
        
        //extra condition (isWarned == false)
        // check if the distance is less than or eqal to 290 cm (2.9 meters)
        if ((distanceCM <= 190)) {
            isWarned = true;
            return "You are too close GANG!";
        }
        // if not in range than isWarned is false (not in range)
        else if (distanceCM > 300.0){
            //if out of range reset isWarned flag
                isWarned = false;
        }   

        // return nothing (lol idk hope this doesn't talk)
        return "";
        */

    }

    /*
    // Function to generate the string 
    generateDistanceMessage(distance: number, lastThreshold: number): string {
        let meters = this.convertCmToMeters(distance);
        //return this.printMeterMessage(meters, lastThreshold);
    }   
    */

    // The functions down here are for the text to speech
/*
    onAwake() {
        globalThis.distanceToSpeech = this;

        // Test this s function out 
        //let meterMessage = this.generateDistanceMessage(350, 2);

        // test printMeterMessage
        //let meterMessage = this.getMeterMessage(250);

        //print("Meter Message: " + meterMessage);

        let sampleText = meterMessage;
        this.button.onTriggerEnd.add(() => this.textToSpeech(sampleText));
    }
*/
    // function to conver text to speech -> takes string value 
    textToSpeech = (text: string) => {
        // check test parameter
        print("Text changed: " + text);
        let options = TextToSpeech.Options.create();
        // synthesis the test (the text variable is the string that's played )
        this.t2s.synthesize(
            text,
            options,
            (track: AudioTrackAsset) => {
                print("Playing audio track");
                this.aud.audioTrack = track;
                this.aud.volume = 1.0;
                this.aud.play(1);
                //this.aud.play(1);
                
            },
            (error) => {
                print("Error: " + error);
            }
        );
    }
}