// how to remove null from array in javascript?

let data=[1,2,3,4,null,5,7,3]
const newData = data.map(el => el.filter(({ date }) => date !== null));

console.log(data)

