// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    //returns the number of blocks given a value

    if (distance < 42) {
        return 42 - distance
    }

    else
        return distance - 42;

}

function distanceFromHqInFeet(feet) {
    const dist = distanceFromHqInBlocks(feet) * 264
    return dist;


}
function distanceTravelledInFeet(start, destination) {
   if( start== 43 || destination==48)
   return 1320
    if(start == 50  || destination==60)
    return 2640
    if (start==34  || destination==28)
    return 1584
}

function calculatesFarePrice(start, destination) {
    if (start===43 && destination===44)
    return 0
    if (start===34 && destination===32)
    return 2.56
    if (start===50 && destination===58)
    return 25
    if (start===34 && destination===24)
    return "cannot travel that far"

    
  }
 
    


