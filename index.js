function saturdayFun(activity) {
    if (activity) {
        return `This Saturday, I want to ${activity}!`
    } else {
        return `This Saturday, I want to roller-skate!`
    }
}
function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}
function wrapAdjective (flair = "*") {
    return function(adjective = "beautiful") {
        return `You are ${flair}${adjective}${flair}!`
    }
}