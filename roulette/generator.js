var completed, available

function getList(seed) {
    available = Object.keys(advancements); completed = [];
    let advancementCount = available.length;
    Math.seedrandom(seed);
    shuffle(available);

    for (x = 0; x < advancementCount; x++) {
        let foundAdvancement = getAdvancement(completed, available);
        let advancementIndex = available.indexOf(foundAdvancement);
        let advancement = available[advancementIndex];
        completed.push(advancement);
        available.splice(advancementIndex, 1);
    }

    return completed;
}

function getAdvancement(completedList, availableList) {
    let unchecked = JSON.parse(JSON.stringify(availableList));
    let repeatCount = unchecked.length;
    let advancement;

    findAdvancement:
    for (i = 0; i < repeatCount; i++) {
        let randomValue = Math.floor(Math.random() * unchecked.length);
        let check = unchecked[randomValue];
        let checkObject = advancements[check];
        let requirements = checkObject.requirements;
        if(checkObject.name == "You Need a Mint" && completedList.includes("kill_dragon")){
            console.log("Impossible!");
            requirements = checkObject.alt;
        }
        for (j = 0; j < requirements.length; j++) {
            let requirement = requirements[j];
            if (Array.isArray(requirement)) {
                // Optional requirement, only 1 is needed.
                let foundRequirement = false;
                for (k = 0; k < requirement.length; k++) {
                    if (completedList.indexOf(requirement[k]) !== -1) {
                        foundRequirement = true;
                    };
                }
                if (!foundRequirement) {
                    unchecked.splice(randomValue, 1);
                    continue findAdvancement;
                }
            } else {
                if (completedList.indexOf(requirement) === -1) {
                    unchecked.splice(randomValue, 1);
                    continue findAdvancement;
                }
            }
        }
        advancement = check;
        break findAdvancement;
    }
    if (advancement == null) console.error("Something went wrong. We could not find an advancement somehow. Please notify the developer.");
    return advancement
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}
