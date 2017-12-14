// Arrow Functions / map

let arr = [1, 5, 8, 10, 20];

arr.forEach(function(item, index) {
  arr[index] = item * 2;
});

arr = arr.map(item => item * 2)
