//a program to encript a message(process.argv[2])
//with a key(process.argv[3])

for (let i = 0, res = 0; i < process.argv[2].length; i++) {
  for (let j = 0; j < process.argv[3].length; j++) {
    res = res + process.argv[2].charCodeAt(i) * process.argv[3].charCodeAt(j);
  }
  console.log(res);
}
