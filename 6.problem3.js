const timeOut = () => {
  setTimeout(() => {
    console.log("2");
  }, 500);
};

// 為什麼用了async await,反而還是出現非同步問題???
// 明明已經用了async await聽起來牛逼得技術,
// 是不是可以捨棄 Promise 了?
const main = async () => {
  console.log("1");

  await timeOut();
  await timeOut();
  await timeOut();
  await timeOut();
  await timeOut();

  console.log("end");
};

main();
