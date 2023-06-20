for (; ;) {
    var random = Math.floor(Math.random() * 10 + 1);
    if (random == 8) {
        console.log("You Got Your Number", random);
        break;
    }
    else {
        console.log(`you got ${random}`);
    }
}