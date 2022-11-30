const timeOut = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("timeOut");
      resolve("this is param");
    }, 500);
  });
};

// async await 讓程式碼可讀性更高
const main = async () => {
  console.log("1");
  
  await timeOut().then(res=>{
    console.log("2");
  })

  await timeOut().then(res=>{
    console.log("3");
  })

  await timeOut().then(res=>{
    console.log("4");
  })

  await timeOut().then(res=>{
    console.log("5");
  })
  
  console.log("end");
};

main();
