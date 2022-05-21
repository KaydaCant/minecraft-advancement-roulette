import advancements from '../json/advancements.json' assert { type: 'json' };
import random from 'random';
import seedrandom from 'seedrandom';

function getAdvancement(achieved, available) {
    var searching = Object.keys(advancements);
    var searchLength = searching.length;
    searchLoop:
    for (i = 0; i < searchLength; i++) {
        var next = searching[Math.floor(random.float() * searching.length)];
        var advancement = advancements[next];
        var requirements = advancement.requirements;

        searching.splice(searching.indexOf(next), 1);

        //if (achieved.includes(next)) { continue; }
        if (achieved.indexOf(next) !== -1) { continue searchLoop; }
        if (requirements.length != 0) {
            for (var i = 0; i < requirements.length; i++) {
                //if (achieved.indexOf(requirements[i]) === -1) { return getAdvancement(achieved, available); }
                if (Array.isArray(requirements[i])) {
                    var willReturn = true;
                    for (var x = 0; x < requirements[i].length; x++) {
                        if (achieved.indexOf(requirements[i][x]) !== -1) {
                            willReturn = false;
                        }
                    }
                    if (willReturn) continue searchLoop;
                } else if (achieved.indexOf(requirements[i]) === -1) { 
                    //console.log(achieved); 
                    //console.log("a");
                    continue searchLoop; 
                }
            }
        }
        return [advancement, next];
    }
    return null;
}

//function setSeed(seed) {
 //   random.use(seedrandom(seed));
//}

export function getList(seed) {

    if (seed == undefined) seed = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    else seed = seed.toString(); 
    random.use(seedrandom(seed));

    var achieved = [];
    var available = Object.keys(advancements);
    var length = available.length;
    var list = [];

    for (var i = 0; i < length; i++) {
        //console.log(i);
        var advancement = getAdvancement(achieved, available);
        achieved.push(advancement[1]);
        list.push(advancement[0]);
    }
    return {
        "seed": seed,
        "list": list
    };
}

/*var repeats = available.length;
for (var i = 0; i < repeats; i++) {
    var advancement = await getAdvancement(achieved, available);
    achieved.push(advancement[1]);
    available.splice(available.indexOf(advancement[1]), 1);

    console.log(advancement[0]);
}*/
