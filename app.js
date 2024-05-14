//Setting my variables?

const gardenRadius = 5
const PI = 3.1415
const area = PI * gardenRadius * gardenRadius;
const minSpace = 0.8;
const nPlants = 20;
const week1Growth = 20;
const week2Growth = week1Growth* 2;
const week3Growth = week2Growth* 2;
let area1 = week1Growth * minSpace;
let area2 = week2Growth * minSpace;
let area3 = week3Growth * minSpace;
// plants should double

const maxCap = minSpace * area;
// const doubling = (nPlants * week1) && (week2 * nPlants) && (week3 * nPlants);
console.log (area);
//* Weeks 1,2,3 for Pruned
if(maxCap < area3){
    console.log ("Pruned")
}  

else(maxCap > (area1) && (area2));{
    console.log ("Not Pruned")
}
// Just checking 
console.log(area1)
console.log(maxCap < area3);
console.log(maxCap>area1);
console.log(maxCap<area2);

