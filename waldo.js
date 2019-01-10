function findWaldo(arr, found) {
  var nameToFind = "Waldo";
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === nameToFind) {
//       found(i, nameToFind);
//     }
//   }
// }

  arr.forEach (function(item, index) {
    // console.log(item, i);
    if (item === nameToFind) {
      found(item, index);
    }
  });
}

function actionWhenFound(name, index) {
  console.log("Found " + name + " at Index " + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


