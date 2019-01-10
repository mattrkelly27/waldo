function findWaldo(arr, found) {
  var nameToFind = "Waldo";
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === nameToFind) {
      found(i, nameToFind);
    }
  }
}

function actionWhenFound(index, name) {
  console.log("Found " + name + " at Index " + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);