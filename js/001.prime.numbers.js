let max = 10;
// alert(123);

lab1: for (var i = 1; i <= max; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0){
            continue lab1;
        }
    }
    console.log(i);
}
