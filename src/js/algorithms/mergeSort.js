class MergeSort {
  constructor() {
    this.name = 'Merge Sort';
  }

  async sort(dataSet) {
    await this.mergeSort(dataSet, 0, dataSet.length - 1);
  }

  async mergeSort(dataSet, left, right) {
    if (left >= right) {
      return;
    }

    const middle = Math.floor((left + right) / 2);
    await this.mergeSort(dataSet, left, middle);
    await this.mergeSort(dataSet, middle + 1, right);
    await this.merge(dataSet, left, middle, right);
  }

  async merge(dataSet, left, middle, right) {
    const leftHalf = [];
    const rightHalf = [];

    for (let i = 0; i <= middle - left; i++) {
      leftHalf.push(dataSet[left + i]);
    }

    for (let i = middle + 1; i <= right; i++) {
      rightHalf.push(dataSet[i]);
    }

    let i = 0,
      j = 0,
      k = left;

    while (i < leftHalf.length && j < rightHalf.length) {
      await highlight([dataSet[k]]);

      if (leftHalf[i].value <= rightHalf[j].value) {
        dataSet[k++] = leftHalf[i++];
      } else {
        dataSet[k++] = rightHalf[j++];
      }
    }

    while (i < leftHalf.length) {
      await highlight([dataSet[k]]);
      dataSet[k++] = leftHalf[i++];
    }

    while (j < rightHalf.length) {
      await highlight([dataSet[k]]);
      dataSet[k++] = rightHalf[j++];
    }
  }
}
