//incremental
// for(let i=0; i<=10; i++)
// {
//     console.log(i);
// }


//decremental
// for(let n=20; n>=11; n--){
//     console.log(n);
// }

//odd
// for(let i=0; i<20; i++){
//     if(i % 2 === 1) 
//     {
//         console.log(i);
//     }
// }
  // (i % 2 !== 0) or (i % 2 === 1) 

  //give the list numbers between 1 to 30 divisible by 5?
//   for(let i=1; i<=30; i++){
//     if(i%5 === 0)
//     {
//         console.log(i);
//     }
//   }

//give the sum of numbers from 1 to 20 that are divisible by 3?
let sum = 0;
for( let i = 1; i <=20; i++){
    if(i%3 === 0){
        console.log(i);
        sum = sum + i;
    }
}
console.log('sum of the numbers:', sum);