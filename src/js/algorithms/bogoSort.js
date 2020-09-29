class BogoSort {
  constructor() {
    this.name = 'Bogo Sort';
  }

  async sort(dataSet) {
    let sorted = false;
    while (!sorted) {
      dataSet = randomShuffle(dataSet);
      sorted = await this.isSorted(dataSet);

      await sleep(sleepTime);
    }
  }

  async isSorted(dataSet) {
    for (let i = 0; i < dataSet.length - 1; i++) {
      await highlight([dataSet[i]]);
      if (dataSet[i].value > dataSet[i + 1].value) {
        return false;
      }
    }

    return true;
  }
}
