var momCalls = 0;
var goneEast = false;
var goneSouth = false;
var goneSouth2 = false;
var monsterHit = -30;

var winProb = .1;

function updateHP(change) {
    var hp = document.querySelector("#hp");
    hp.value = parseInt(hp.value) + change;
    
    if (hp.value <= 0) {
        die();
    }
}

function begin() {
    alert("Oh no! Your small mountain town is under attack by a very scary monster.\n\nDo you have what it takes to save your town?");
    document.querySelector("#inner").style.display = "block";
    document.querySelector("#begin").style.display = "none";
    document.querySelector("#head").innerHTML = "The monster is coming from the north.";
}

function callMom() {
    if (!momCalls) {
        alert("Your long talk with your mom gives you some confidence.\n\nYour HP goes up by 10!");
        updateHP(10);
    } else if (momCalls === 1) {
        alert("You have a shorter talk with your mom, and it makes you feel better.\n\nYour HP goes up by 10!");
        updateHP(10);
    } else if (momCalls === 2) {
        alert("You have another talk with your mom, and she bakes you a cake.\n\nYour HP goes up by 5!");
        updateHP(5);
    } else if (momCalls > 2) {
        alert("Your mom is sick of your incessant whining! She tells you to toughen up. You are devastated.\n\nYour HP goes down by 50.");
        updateHP(-50);
    }
    
    momCalls++;
}

function goNorth() {
    alert("You go North to fight the monster...");
    if (Math.random() < winProb) {
        win();
    } else {
        alert("The monster hurts you pretty badly.\n\nYou lose " + monsterHit*-1 + " HP.");
        updateHP(monsterHit);
    }
}

function goWest() {
    alert("You go West and immediately fall into a lake and drown.");
    die();
}

function goEast() {
    if (!goneEast) {
        alert("You go East and find a sword! This will make you more powerful against the monster.");
        winProb += .2;
        goneEast = true;
    } else {
        alert("You go East looking for more swords, but instead you trip and fall, and your sword breaks.\n\nYou lose 10 HP.");
        winProb -= .2;
        updateHP(-10);
    }
}

function goSouth() {
    if (!goneSouth) {
        alert("You go South and find some armor! This should better protect you from the monster.");
        monsterHit = -20;
        goneSouth = true;
    } else if (!goneSouth2) {
        alert("You go South and find even more armor! You are very well protected now.");
        monsterHit = -10;
        winProb += .1;
        goneSouth2 = true;
    } else {
        alert("You go South looking for more armor, but you find nothing.\n\n:(");
    }
}

function win() {
    document.querySelector("#inner").style.display = "none";
    document.querySelector("#win").style.display = "block";
    document.body.style.background = 'lightgreen';
}

function die() {
    document.querySelector("#inner").style.display = "none";
    document.querySelector("#death").style.display = "block";
    document.body.style.background = 'darkred';
}