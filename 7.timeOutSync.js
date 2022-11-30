const timeOutSync = (second, callback) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      callback();
      resolve();
    }, second * 1000);
  });
};

const main = async () => {
  console.log("start");

  await timeOutSync(0.5, () => {
    console.log("0.5秒後");
  });

  await timeOutSync(3, () => {
    console.log("3秒後");
  });

  console.log("end");
};

main();
