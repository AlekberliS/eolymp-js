//task 8810
// let total ;
// function totalStudents(a,b,c){

//     if ( (typeof a == 'number')&&(typeof b == 'number')&& (typeof c == 'number')&& a < 10**19 && b < 10**19 && c < 10**19){
//     total = (a + b) - c;
//     return total;
// }}
// console.log(totalStudents(13,9,5));


//task8812
//  let perimeter ; 
//  let area ;
//  function perArea(a,b){
//     if ( (typeof a == 'number')&&(typeof b == 'number')&&a <= 10**19 && b <= 10**19){
//         perimeter = 2*(a + b);
//         area = a * b;

//     }
//     return `${perimeter} ${area}`
//  }
//  console.log(perArea(3,7));

//8813
// let area;
// let volume;
// function findVolAr(a,b,c){
//     if ( (typeof a == 'number')&&(typeof b == 'number')&& (typeof c == 'number')&& (a < 10**6) && (b < 10**6)  && (c < 10**6)){
//         area = 2*(a*b + b*c + c*a);
//       volume = a*b*c;
//     }
//     return `${area} ${volume}`
// }
// console.log(findVolAr(2,3,4))
//8814

// function findCub(a){
//     let per = 4*a;
//     let area = a**2;
//     return (`${per} ${area}`);
// }
// console.log(findCub(3));

// 8815
// let area;
// let vol;
// function finding(a){
//     if ( typeof a == 'number' && a <= 10**6){
//          area = 6*a**2;
//          vol = a**3;
//     }
//     return `${area} ${vol}`
// }
// console.log(finding(3));
//8816
// function power(a,b){
//     if ( typeof a == 'number' && typeof b == 'number'){
//         return a**b;
//     }
// }
// console.log(power(2,10));

//8817
// function countNDigitIntegers(n) {
//   if (n <= 0) {
//     return 'Invalid';
//   }

//   const minNumber = Math.pow(10, n - 1);
//   const maxNumber = Math.pow(10, n) - 1;
//   const count = maxNumber - minNumber + 1;

//   return count;
// }

// console.log(countNDigitIntegers(1));


//8825
// function calculateY(x) {
//     let m =  x**3 - (5/7)*x**2 + 9*x - 3/x + 1;
//     m = m.toFixed(3);
//     return m ;
// }
// const yValue = calculateY(1);

// console.log(yValue);
 
//8827 25-e benzeyirr
//8831
// function calc(x, y) {
//     let m = (2*x**2) - (4*x*y) + (3*y**2) + (x + y)/7;
//     return m.toFixed(3); 
//   }
  
//   console.log(calc(1000, -2000));
  //ex8838
  // function calculateNumPies(m, n) {
  //   const numPies = Math.floor(m / n);
  //   return numPies;
  // }
  // console.log(calculateNumPies(27,10))
  
//8839
// function calculateRemainingMoney(m, n) {
//   const remainingMoney = m % n;
//   return remainingMoney;
// }
// console.log(calculateRemainingMoney(27,10))

//8840
// function findLastOne(a) {
//   let lastDigit = a % 10;
//   return lastDigit;
// }

// console.log(findLastOne(27));
// console.log(findLastOne(279));
// 8881
// function isosceles(a, b, c) {
//   if (a == b) {
//     if (b !== c) {
//       return 'NO';
//     } else {
//       return a + b + c;
//     }
//   } else {
//     return 'NO';
//   }
// }

// console.log(isosceles(7, 7, 3));  
// console.log(isosceles(4, 6, 9));  
// console.log(isosceles(4, 4, 4));  

//8882
// function square(a,b,c,d){
//   if (a == b && b == c && c == d){
//     return 'yes';
//   }
//   else {
//     return 'no';
//   }
// }
// console.log(square(7,7,7,7));
// console.log(square(9,6,9,6));

//ex 8883
// function findRectangleSum(a, b, c, d) {
//     if ((a === b && c === d) || (a === c && b === d) || (a === d && b === c)) {
//         return a + b + c + d;
//     } else {
//         return "No";
//     }
// }
// console.log(findRectangleSum(7,4,4,7));
// console.log(findRectangleSum(9,9,9,6));

//ex8884
// function typesTriangle(a,b,c){
//     if ( (a + b) > c && (a - b) < c){
//            if ( a == b ){
//             if ( b == c ){
//               return 'equilateral'
//            }
//            else if ( b !== c ){
//             return 'isosceles';
//            }
//     }
//     else {
//         return 'versatile'
//     }
// }
//     else{
//         return ('Invalid');
//     }
// }
// console.log(typesTriangle(7,7,7));
// console.log(typesTriangle(9,9,3));
// console.log(typesTriangle(2,3,4));
// console.log(typesTriangle(2,3,5));
// console.log(typesTriangle(555,222,222));
//ex8885
// let m = parseInt(prompt("Enter a number"));
// function previousOdd(a){
//     if ( a %2 === 0){
//         return a-1;
//     }
//     else 
//     return a-2;
// }
// console.log(previousOdd(m));

//ex8886
// let m = parseInt(prompt("Enter a number"));
// function previousEven(a){
//     if ( a %2 === 1){
//         return a-1;
//     }
//     else 
//     return a-2;
// }
// console.log(previousEven(m));

//8889
// let count = 0;
//  function findOddDigit(a){
//     if (typeof  a == 'number'){
//         const numStr = Math.abs(a).toString();
//     const digits = [];
//     for (let i = 0; i < numStr.length; i++) {
//         digits.push(parseInt(numStr[i]));
//     }
//        for (let j = 0; j < digits.length ; j++){
//         if ( digits[j] %2 === 1){
//         count++;
//         }
//        }
//     }
//     return count
//  }
//  console.log(findOddDigit(12345));

//8890
// let dig = [];
// function increaseEven(a){
//         if (typeof  a == 'number'){
//             const numStr = Math.abs(a).toString();
//         const digits = [];
//         for (let i = 0; i < numStr.length; i++) {
//             digits.push(parseInt(numStr[i]));
//         }
//            for (let j = 0; j < digits.length ; j++){
//             if ( digits[j] %2 === 0){
//            digits[j]+= 1;
       
//             } 
//                dig.push(digits[j])
//            }
//         }
//         dig = dig.join('');
//         return dig;
//      }
//      console.log(increaseEven(12345));

//8893
// function findNum(a){
//     if (typeof a == 'number'){
//         if(a %3 === 0 && a %2 === 0 && a >= 10 && a <= 99){
//             return 'YES'
//                     }
//                     else{
//                         return 'NO'
//                     }
//     }
//     else {
//         return 'invalid'
//     }
// }
// console.log(findNum(12));
// console.log(findNum(27));
    //8895
    //8896
    //8897
//     function findNextMultipleOfTen(n) {
//         if (typeof n === 'number' && Number.isInteger(n)) {
//             const nextMultiple = Math.ceil(n / 10) * 10;
//             return nextMultiple;
//         } else {
//             return 'Invalid';
//         }
//     }   
//     console.log(findNextMultipleOfTen(7));   
// console.log(findNextMultipleOfTen(-5));  


//8900
// function finding(a){
//     let x ;
//     if (typeof a == 'number'){
//         const nextMultiple = Math.ceil(a / 7) * 7;
//         return nextMultiple;
//     }
//     else{
//         return 'invalid'
//     }
// }
// console.log(finding(1));
// console.log(finding(8));
// console.log(finding(-8));

//88