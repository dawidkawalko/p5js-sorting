class SelectionSort {
  constructor() {
    this.name = 'Selection Sort';
  }

  async sort(dataSet) {
    for (let i = 0; i < dataSet.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < dataSet.length; j++) {
        if (dataSet[j].value < dataSet[minIndex].value) {
          minIndex = j;
        }
      }

      await highlight([dataSet[i], dataSet[minIndex]]);

      const temp = dataSet[i];
      dataSet[i] = dataSet[minIndex];
      dataSet[minIndex] = temp;
    }
  }
}
