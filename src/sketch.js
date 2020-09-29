const WIDTH = 1280;
const HEIGHT = 720;
const ALGORITHMS = {
  bubble: new BubbleSort(),
  selection: new SelectionSort(),
  insertion: new InsertionSort(),
  merge: new MergeSort(),
  quick: new QuickSort(),
  bogo: new BogoSort(),
};

let algorithmRadio;
let sleepTimeSlider;

let dataSet = [];
let totalDataPoints = 100;
let sleepTime = 10; // milliseconds
let isSorting = undefined;

function resetData() {
  dataSet = [];
  for (let i = 1; i <= totalDataPoints; i++) {
    dataSet.push(new DataPoint(i));
  }

  dataSet = randomShuffle(dataSet);
}

function setup() {
  createCanvas(WIDTH, HEIGHT);

  algorithmRadio = createRadio();
  for (let key in ALGORITHMS) {
    algorithmRadio.option(key, ALGORITHMS[key].name);
  }

  algorithmRadio.selected('bubble');

  sleepTimeSlider = createSlider(1, 101, sleepTime, 10);

  resetData();
}

function drawDataPoint(index) {
  const dataPoint = dataSet[index];
  const width = WIDTH / totalDataPoints;
  const height = dataPoint.value * (HEIGHT / totalDataPoints);

  dataPoint.draw(index * width, HEIGHT - height, width, height);
}

function draw() {
  background(0);
  sleepTime = sleepTimeSlider.value();
  for (let i = 0; i < dataSet.length; i++) {
    drawDataPoint(i);
  }
}

async function keyPressed() {
  if (!isSorting && key === ' ') {
    isSorting = true;

    const algorithm = ALGORITHMS[algorithmRadio.value()];
    await algorithm.sort(dataSet);

    isSorting = false;
  }
}
