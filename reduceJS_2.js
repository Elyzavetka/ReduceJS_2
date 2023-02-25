let a = [
  { id: 55, city: "ldn" },
  { id: 75, city: "nyc" },
  { id: 175, city: "mad" },
];

// [55, 75, 175]

let b = a.reduce((accum, item) => {
  accum.push(item.id);
  return accum;
}, []);
console.log("========");
console.log(b);
