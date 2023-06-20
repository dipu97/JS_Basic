var star1 = 'This is something exceptional';
var length = 0;
for (; ;) {
    if (star1.charAt(length) == '') {
        break;
    }
    else {
        length++;
    }
}
console.log(length);