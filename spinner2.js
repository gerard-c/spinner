const spinnerFrames = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|']
let timer = 100

for (let i = 0; i < spinnerFrames.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${spinnerFrames[i]}   `);
  }, timer);
  timer += 200;
};
