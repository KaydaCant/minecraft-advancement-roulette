const currentRun = {
    list: null,
    seed: null,
    place: null,
    quit: false,
    won: false
}

var loadRecent = false;
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

var cache;
var queryCache = urlParams.get('loadfromcache');
if (queryCache == null || queryCache == '') cache = false;
else if (queryCache.toLowerCase() == 'true') cache = true;

var seed;
var querySeed = urlParams.get('seed');

checkCache:
if (cache) {
    // Get seed from cache
    const recentRun = Cookies.get('recent');
    if (recentRun == null) break checkCache;
    let runInfo = recentRun.split(";");
    let runSeed = runInfo[0];
    let runPlace = parseInt(runInfo[1], 10);

    querySeed = runSeed;
    currentRun.place = runPlace;
    loadRecent = true;
}

if (currentRun.place == null) currentRun.place = 1;
if (querySeed == null || querySeed == '' || !/[a-zA-Z0-9]+/.test(querySeed)) { seed = Math.random().toString(36).slice(2).toUpperCase(); loadRecent = false; currentRun.place = 1; }
else seed = querySeed.toUpperCase();
currentRun.seed = seed;

console.log(currentRun)
currentRun.list = getList(seed);
if (currentRun.list.length < advancements.length) console.error("Could not generate a list with all advancements! Something likely went wrong.");

for (i = 0; i < currentRun.place; i++) {
    generateAdvancement(i + 1);
}

function generateAdvancement(place, fail = false) {
    let advancement = currentRun.list[place - 1];
    let advancementInfo = advancements[advancement];

    let advancementHolder = document.querySelector(".advancement-holder");
    
    // Get rid of .current on all existing advancements.
    if (!fail) {
        let elements = document.querySelectorAll(".advancement.current");
        for (j = 0; j < elements.length; j++) {
            elements[j].classList.remove("current");
        }
    }   
    
    let holder = document.createElement("div");
    let position = document.createElement("span");
    let name = document.createElement("span");

    if (!fail) { holder.classList.add("advancement", "current"); }
    else { holder.classList.add("advancement", "fail"); }
    position.classList.add("position");
    name.classList.add("name")

    position.innerText = `${place}.`;
    name.innerText = advancementInfo.name;

    let buttons = document.querySelector(".buttons");
    if (!fail) {
        buttons.remove();
        holder.append(position, name, buttons);
    } else {
        holder.append(position, name);
    }
    
    advancementHolder.appendChild(holder);
}

function next() {
    if (currentRun.quit) return;
    if (currentRun.won) return;
    
    if (currentRun.place >= currentRun.list.length) return victory();
    currentRun.place += 1;
    generateAdvancement(currentRun.place);
    Cookies.set('recent', `${currentRun.seed};${currentRun.place}`);
}

function quit() {
    if (currentRun.quit) return;
    if (currentRun.won) return;
    currentRun.quit = true;

    let remaining = currentRun.list.length - currentRun.place;
    for (i = 0; i < remaining; i++) {
        generateAdvancement(currentRun.place + i + 1, true);
    }

    let current = document.querySelector(".current");
    current.classList.add("fail");

    let victoryElement = document.querySelector(".retry");
    let message = victoryElement.querySelector(".message");
    message.innerText = "You failed. Try again?";
    victoryElement.classList.remove("hidden");

    let buttons = document.querySelector(".buttons");
    let quitButton = buttons.querySelector('.quit');
    let nextButton = buttons.querySelector('.next');
    quitButton.classList.add("disabled");
    nextButton.classList.add("disabled");
}

function victory() {
    if (currentRun.quit) return;
    if (currentRun.won) return;
    currentRun.won = true;

    let current = document.querySelector(".current");
    current.classList.add("win");

    let victoryElement = document.querySelector(".retry");
    let message = victoryElement.querySelector(".message");
    message.innerText = "You won! Try again?";
    victoryElement.classList.remove("hidden");

    let buttons = document.querySelector(".buttons");
    let quitButton = buttons.querySelector('.quit');
    let nextButton = buttons.querySelector('.next');
    quitButton.classList.add("disabled");
    nextButton.classList.add("disabled");
}

function retry() {
    window.location = "/roulette.html?seed=";
}