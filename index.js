
// saturdayFun
function saturdayFun(place = "roller-skate") {
    return `This Saturday, I want to ${place}!`
}

// mondayWork
const mondayWork = function(act = "go to the office") {
    return `This Monday, I will ${act}.`
}

// wrapAdjective
function wrapAdjective (highlight = "*") {
    return function (adj = "special") {
        return `You are ${highlight + adj + highlight}!`
    }
}

