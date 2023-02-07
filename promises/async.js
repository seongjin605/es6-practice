const sleep = t => {
  return new Promise(resolve => setTimeout(resolve, t));
};

const start = async () => {
  const startDateTime = new Date().getTime();
  for (let i = 1; i <= 5; i++) {
    await sleep(1000);
    console.log(i);
  }
  const endDateTime = new Date().getTime();
  console.log((endDateTime - startDateTime) / 1000 + '초');
};

start();
