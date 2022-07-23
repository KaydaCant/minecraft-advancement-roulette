$(".generated").hide();
$(".advancements").hide();

var advancementData;
var current = 0;
var quit = false;
var finished = false;

var linkData = { 
    seed: null,
    advancement: null
}

$(document).ready(function() {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const seed = urlParams.get('seed');
    if (seed) { linkData.seed = seed; }

    const advancement = urlParams.get('advancement');
    if (advancement) { linkData.advancement = advancement; }

    if (linkData.seed) { 
        $(".generatorSeed").val(linkData.seed);
        console.log(linkData.advancement);
        generate();
        if (linkData.advancement) {
            for (i = 0; i < linkData.advancement; i++) {
                next();
            }
        }
    }

});


function win() {
    finished = true;
    $(".current").addClass("won");
}

function next() {
    if (quit) return;
    if (finished) return;
    if (current >= advancementData.list.length) return win();
    $(".current").removeClass("current");
    $(".advancements").append(`<li class="current"><p class="name"><strong>${current + 1}.</strong> ${advancementData.list[current].name}</p></li>`);

    $(".current").append($(".next"))
    $(".current").append($(".quit"))

    current++;
}

function giveUp() {
    if (quit) return;
    if (finished) return;
    quit = true;
    $(".current").addClass("gaveup");
    for (i = 0; i < advancementData.list.length - current; i++) {
        $(".advancements").append(`<li class="future"><p class="name"><strong>${current + i + 1}.</strong> ${advancementData.list[current + i].name}</p></li>`);
    }
}

function generate() {
    quit = false;
    finished = false;
    $(".advancements").empty();

    advancementData = getList($(".generatorSeed").val());
    current = 0;

    $(".advancements").append(`<button onclick="next()" class="next">Next</button>`);
    $(".advancements").append(`<button onclick="giveUp()" class="quit">Quit</button>`);

    $(".generated").show();
    $(".advancements").show();
    $(".list").html("");
    next();
}


$(".generator").submit(function(event) {
    event.preventDefault();
    generate();
});

$(".getLink").click(function() {
    var link = window.location.href;
    var linkElement = $(".link").get()[0];
    link = link.split("?")[0];
    link += "?seed=" + $(".generatorSeed").val();
    link += "&advancement=" + current;
    // put text in .link and copy to clipboard
    linkElement.text = link;
    linkElement.select();
    linkElement.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(link);
    alert("Copied to clipboard!");
    
});

//$(".next").click(function() { next() });

//$(".quit").click(function() { giveUp() });
