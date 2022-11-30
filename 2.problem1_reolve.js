const timeOut = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("2");
      resolve("this is param");
    }, 500);
  });
};

let loading = false;
const main = () => {
  console.log("1");
  loading = true;
  timeOut()
    .then((res) => {
      console.log("3:", res);
    })
    .catch((err) => {
      // 錯誤
      console.error("err:", err);
    })
    .finally(() => {
      // 最終
      loading = false;
    });
};

main();
