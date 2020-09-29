function randomShuffle(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * i);

    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function highlight(dataPoints) {
  dataPoints.forEach((dp) => (dp.isHighlighted = true));
  if (sleepTime > 0) {
    await sleep(sleepTime);
  }
  dataPoints.forEach((dp) => (dp.isHighlighted = false));
}
