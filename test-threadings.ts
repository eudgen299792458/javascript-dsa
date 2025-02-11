async function nonBlockingTask(sec: number, task: number): Promise<any> {
  console.log(task + " part 1 task over in " + sec * task);
  setTimeout(() => {
    console.log("OVER: " + task + " part 1 task over in " + sec * task);
    return {
      data: "this is all data ",
    };
  }, sec * 1000 * task);

  console.log("function end 2");
}

async function main() {
  console.log("async function handling....");
  console.log("function : 1 1");
  const finalResult1 = await nonBlockingTask(1, 1);
  if (finalResult1) {
    console.log("finalResult1: ", finalResult1);
    const finalResult2 = await nonBlockingTask(2, 2);
  }
  console.log("function : 2 2");
  const finalResult2 = await nonBlockingTask(2, 2);
  if (finalResult2) {
    console.log("finalResult2: ", finalResult2);
  }
  console.log("function : 3 3");
  const finalResult3 = await nonBlockingTask(3, 3);
  if (finalResult3) {
    console.log("finalResult3: ", finalResult3);
  }

  setTimeout(() => console.log("Waiting.......done"), 15_000);
  if (finalResult1) {
    console.log("finalResult1 f: ", finalResult1);
  }
  if (finalResult2) {
    console.log("finalResult2 f: ", finalResult2);
  }
  if (finalResult3) {
    console.log("finalResult3 f: ", finalResult3);
  }
}

main();
