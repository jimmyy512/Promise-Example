const timeOut = () => {
  setTimeout(() => {
    console.log("2");
  }, 100);
};

// 目前運行結果是 1->3->2
// 期望log順序是 1->2->3
const main = () => {
  console.log("1");
  timeOut();
  //處理你的計算邏輯
  console.log("3");
};

main();
