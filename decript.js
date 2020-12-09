//a program to decript a message(process.argv[(every argc > 2) - 1])
//with a key(process.argv[last argv])

let res = 1;
let x = 0

for (let i = 2; i < process.argv.length - 1; i++) {
    res = parseInt(process.argv[i])
    while (res != 0) {
        x++;
        res = parseInt(process.argv[i]);
        for (let j = process.argv[process.argv.length - 1].length - 1; j >= 0; j--) {
            res = res - (process.argv[process.argv.length - 1].charCodeAt(j) * x);
        }
    }
    process.stdout.write(String.fromCharCode(x));
    x = 0;
}
console.log("");
