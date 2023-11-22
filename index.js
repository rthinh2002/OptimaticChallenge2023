function decrementTimer(fishArr) {
    let newFish = 0;
    for (var i = 0; i < fishArr.length; i++) {
        if(fishArr[i] == 0) {
            fishArr[i] = 6;
            newFish++;
        } else {
            fishArr[i]--;
        }
        
    }

    for (var i = 0; i < newFish; i++) {
        fishArr.push(8);
    }
    return fishArr;
}

function growthSimulation(days, fishArr) {
    for (var i = 1; i <= days; i++) {
        fishArr = decrementTimer(fishArr);
    }
    return fishArr.length;
}



module.exports = {decrementTimer, growthSimulation};