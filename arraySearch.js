var arr = [1, 2, 3, 4, 5, 6, 7, 22, 11, 13];
flag = false;
found = 223;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] == found) {
        console.log('The item found in index :', i);
        flag = true;
    }
}
if (!flag) {
    console.log('Item Not found');
}