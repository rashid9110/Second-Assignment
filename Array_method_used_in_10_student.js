const ages = [19,22,19,24,20,25,26,24,25,24]

let comper=(a,b)=>{
    return a-b
}
 
//sort the array
ages.sort(comper)
console.log("Sort array is :"+ages)
console.log("max ages is :"+ ages[9] +" \n min age is :"+ages[0] )

//meding age of student
let med=ages[9]-ages[0];
let median=(med/2)+ages[0];
console.log("Median ages of student is :"+median)

//Average age of student
let ave=0;
for(let i of ages){
    ave+=i;
}
console.log("Average ag of student is :"+(ave/10))

//range of age
console.log("range of age is :"+(ages[9]-ages[0]))

