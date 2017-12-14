// Rest

const arr = [
  { id: 1, user: 'Diego' },
  { id: 2, user: 'Robson' },
  { id: 3, user: 'Cleiton' },
  { id: 4, user: 'Thiago' },
  { id: 5, user: 'Mateus' },
];

const a = arr[0];
const b = arr[1];
const c = [arr[2], arr[3], arr[4]];

const [a, b, ...c] = arr;
