/* console.log will add a new line character (\n) to the end of the string. However, in Node we can use process.stdout.write instead to have more control and avoid automatically adding an extra "newline character" at the end each time.

Replace the console.log with process.stdout.write and confirm our results.*/

const sentence = "hello there from lighthouse labs";
let delay = 0;

for (let char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += 50;
}