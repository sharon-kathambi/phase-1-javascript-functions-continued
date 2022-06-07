// code your solution here
function saturdayFun(activity){
    if(activity === undefined){
        return "This Saturday, I want to roller-skate!"
    }
    else{
        return `This Saturday, I want to ${activity}!`;
    }
}
saturdayFun();

const mondayWork = function(place) {
    if(place === undefined){
        return "This Monday, I will go to the office."
    }
    else{
        return `This Monday, I will ${place}.`
    }
}

function wrapAdjective(wrap){
    const star = function(adjective) {
        return `You are ${wrap}${adjective}${wrap}!`;
    }
    return star;
}
   /* return `You are ${wrap} a hard worker ${wrap}`;
}
    const line = wrapAdjective("||")
    return `You are ${wrap} a dedicated programmer ${wrap}`;
    }
}
wrapAdjective("*"); */