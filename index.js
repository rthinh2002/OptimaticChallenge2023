// Challenge 1
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

// Chalenge 2
function fishSimulationChallenge(days, fishArr) {
    const fishData = Array(9).fill(0);
    fishArr.forEach((fish) => fishData[fish]++);

    for (let i = 0; i < days; i++) {
        const birthFish = fishData.shift();
        fishData.push(birthFish);
        fishData[6] += birthFish;
    }

    let sum = 0;
    fishData.forEach((fish) => {
        sum += fish;
    });

    return sum;
}



module.exports = {decrementTimer, growthSimulation, fishSimulationChallenge};