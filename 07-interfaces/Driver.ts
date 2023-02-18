import {CricketCoach} from "./CricketCoach";
import {GolfCoach} from "./GolfCoach";
import {Coach} from "./Coach";

let myCricketCoach = new CricketCoach();
let myGolfCoach = new GolfCoach();

let coachArray: Coach[] = [];
coachArray.push(myCricketCoach);
coachArray.push(myGolfCoach);

for (let coach of coachArray){
    console.log(coach.getDailyWorkout());
}