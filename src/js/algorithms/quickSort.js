class QuickSort {
  constructor() {
    this.name = 'Quick Sort';
  }

  async sort(dataSet) {
    await this.quickSort(dataSet, 0, dataSet.length - 1);
  }

  async quickSort(dataSet, left, right) {
    if (left >= right) {
      return;
    }

    const pivot = await this.partition(dataSet, left, right);
    await this.quickSort(dataSet, left, pivot - 1);
    await this.quickSort(dataSet, pivot + 1, right);
  }

  async partition(dataSet, left, right) {
    const pivot = dataSet[right];

    let i = left;
    for (let j = left; j <= right; j++) {
      if (dataSet[j].value < pivot.value) {
        await highlight([dataSet[i], dataSet[j]]);

        const temp = dataSet[i];
        dataSet[i] = dataSet[j];
        dataSet[j] = temp;

        i += 1;
      }
    }

    const temp = dataSet[i];
    dataSet[i] = dataSet[right];
    dataSet[right] = temp;

    return i;
  }
}
