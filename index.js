// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    return (Math.abs(42 - pickupLocation));
}

function distanceFromHqInFeet(pickupLocation) {
    return 264 * distanceFromHqInBlocks(pickupLocation);
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
     return Math.abs(264* (startingBlock - endingBlock));
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    switch (true) {
        case distance > 2500:
            return "cannot travel that far";
            break;
        case distance <= 400:
            return 0;
            break;
        case distance > 2000:
            return 25;
            break;
        default:
            return (distance - 400)*.02;
            break;
    }
}