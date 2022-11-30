const timeOut = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("timeOut");
      resolve("this is param");
    }, 500);
  });
};

// Chaining 鏈式,但是可讀性還是沒想像中的好
const main = () => {
  console.log("1");
  timeOut()
    .then((res) => {
      console.log("2");
      return timeOut();
    })
    .then((res) => {
      console.log("3");
      return timeOut();
    })
    .then((res) => {
      console.log("4");
      return timeOut();
    })
    .then((res) => {
      console.log("5");
      return timeOut();
    })
};

main();
