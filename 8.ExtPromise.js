const timeOutSync = (second, message) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(message);
      }, second * 1000);
    });
  };
  
  const main = async () => {
    console.log("Promise all start");
    // Promise.all
    await Promise.all([
        timeOutSync(1,"法國第一"),
        timeOutSync(1.5,"巴西第二"),
        timeOutSync(2,"瑞士第三"),
      ])
        .then((res) => console.log(res))
        .catch((err) => console.error(err));


    console.log("Promise race start");
    // Promise.race
    await Promise.race([
        timeOutSync(1,"法國第一"),
        timeOutSync(0.5,"巴西第二"),
        timeOutSync(2,"瑞士第三"),
        ])
        .then((res) => console.log(res))
        .catch((err) => console.error(err));
  };
  
  main();
  