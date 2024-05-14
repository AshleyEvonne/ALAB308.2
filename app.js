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
console.log(maxCap > area1);
console.log(maxCap < area2);

//Checking is palnts will be monitored or not
if (area1 >= .5 * area && area1 <= .8 * area){
    console.log ("Growing at an acceptional rate")
}

else {console.log ("Not growing at an acceptional rate")}

console.log(.5*area)
console.log(.8*area)
console.log(16 >= .5*area && 16 <= .8*area)
console.log(32 >= .5*area && 32 <= .8*area)
console.log(64 >= .5*area && 64 <= .8*area)

//Seeing if there is room to plant more palnts
if (minSpace< .5*area){
    console.log("There is more room to plant")
}
else { console.log ("There is no room to plant")}
