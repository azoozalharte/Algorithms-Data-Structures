// خوارزمية ترتيب المصفوفه
// bubble sort algorithm

function bubblesort(arr) {
  const loop = arr.length;
  // معرفة حجم المصفوفه
  for (let i = 0; i < loop; i++) {
    // المرور على كل عنصر في المصفوفه
    for (let j = 0; j < loop; j++) {
      // مقرانة الأرقام ببعضها
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
      console.log(arr);
    }
  }
  return arr;
}

bubblesort([1, 3, 2]);

module.exports = bubblesort;
