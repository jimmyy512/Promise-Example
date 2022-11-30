const timeOut = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("timeOut");
      resolve("this is param");
    }, 200);
  });
};

// 某些邏輯需要等第一個API做完,
// 接著根據第一個API的response,
// 去打第2個API,
// 以此類推會產生 callback hell
const main = () => {
  console.log("1");
  timeOut().then((res) => {
    console.log("2");
    timeOut().then((res) => {
      console.log("3");
      timeOut().then((res) => {
        console.log("4");
        timeOut().then((res) => {
          console.log("5");
        });
      });
    });
  });
};

main();
