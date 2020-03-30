// https://edabit.com/challenge/caeSeQ3K53GMQKenX


//getDistance({x: -2, y: 1}, {x: 4, y: 3}) ➞ 6.325
//getDistance({x: 0, y: 0}, {x: 1, y: 1}) ➞ 1.414
//getDistance({x: 10, y: -5}, {x: 8, y: 16}) ➞ 21.095

function getDistance(a, b) {
    let xDiff = b.x-a.x;
    let yDiff = b.y-a.y;
    let result = Math.hypot(xDiff, yDiff);
    return  parseFloat(result.toFixed(3));  
}


console.log(getDistance({x: -2, y: 1}, {x: 4, y: 3}));  
console.log(getDistance({x: 0, y: 0}, {x: 1, y: 1}));  
console.log(getDistance({x: 10, y: -5}, {x: 8, y: 16}));  
  