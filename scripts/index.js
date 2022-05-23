$(".generated").hide();
$(".advancements").hide();

var advancementData;
var current = 0;
var quit = false;
var finished = false;




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

//$(".next").click(function() { next() });

//$(".quit").click(function() { giveUp() });
