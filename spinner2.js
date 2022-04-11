let sentence = ['|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|  ', '\n'];

for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(`${sentence[i]}`);
  }, i * 200 - 100);
}
