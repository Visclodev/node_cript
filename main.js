//process.argv 2 -> message
//process.argv 3 -> key

let message = "lolmdrptdr";
let key = "patate";

if (process.argc < 3 || process.argc > 3) {
  console.error("not enough/too much arguments");
}

for (let i = 0, res = 0; i < process.argv[2].length; i++) {
  for (let j = 0; j < process.argv[3].length; j++) {
    res = res + process.argv[2].charCodeAt(i) * process.argv[3].charCodeAt(j);
  }
  console.log(res);
}
