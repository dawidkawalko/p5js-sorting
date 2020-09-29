class BubbleSort {
  constructor() {
    this.name = 'Bubble Sort';
  }

  async sort(dataSet) {
    for (let i = 0; i < dataSet.length; i++) {
      let hasSwapped = false;

      for (let j = 0; j < dataSet.length - 1 - i; j++) {
        if (dataSet[j].value > dataSet[j + 1].value) {
          await highlight([dataSet[j], dataSet[j + 1]]);

          const temp = dataSet[j + 1];
          dataSet[j + 1] = dataSet[j];
          dataSet[j] = temp;

          hasSwapped = true;
        }
      }

      if (!hasSwapped) {
        break;
      }
    }
  }
}
