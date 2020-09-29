class InsertionSort {
  constructor() {
    this.name = 'Insertion Sort';
  }

  async sort(dataSet) {
    for (let i = 1; i < dataSet.length; i++) {
      let j = i;
      while (j > 0 && dataSet[j - 1].value > dataSet[i].value) {
        j -= 1;
      }

      if (j != i) {
        await highlight([dataSet[i], dataSet[j]]);
        dataSet.splice(j, 0, dataSet[i]);
        dataSet.splice(i + 1, 1);
      }
    }
  }

  async sort2(dataSet) {
    for (let i = 1; i < dataSet.length; i++) {
      let j = i;
      while (j > 0 && dataSet[j - 1].value > dataSet[j].value) {
        await highlight([dataSet[j - 1], dataSet[j]]);

        const temp = dataSet[j];
        dataSet[j] = dataSet[j - 1];
        dataSet[j - 1] = temp;

        j -= 1;
      }
    }
  }
}
