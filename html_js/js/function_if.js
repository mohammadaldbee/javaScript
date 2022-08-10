function tellFortune(a, b, c, d) {
return `You will be a ${d} in ${c},
and married to ${b} with ${a} kids.`;
}
console.log(tellFortune(8, "julie", "salt", "civilEngineer")); //Num 1


function calculateDogAge(e) {
  return e * 7;
}
console.log(`Your doggie is ${calculateDogAge(9)} years old in dog years!`); //Num 2


function calculateSupply(f, g) {
let j = (100 - f) * g * 365;

return `You will need ${j} to last you until the ripe old age of 100`; //Num 3
}
console.log(calculateSupply(45, 4));


function greet(name){                   // Num 4         

    return "hello "+name
}
console.log(greet("mohammad"))


//what is the error:                                    // Num 5 
function double(cat) {   //name of var
  return 2 * cat;
}

function double(x) {     //num in the ()
  return 2 * 7;
}

function double(x2) {     //'' in the ()
  return 2 * '7';
}


//fix these functions:                               // Num 6 
function double1(x) {
  return 2 * x ;
}

function double2 (x){
return 2 * x;
}

function  double3(x) {
  return 2 * x;
}



function cube(h) {                               // Num 7 cube
return h ** 3;
}
console.log(cube(8));



function multiply(k, k1) {                       //Num 8 multiply
return k * k1;
}
console.log(multiply(8, 4));



function canIGetADrivingLicense(age){            //Num 9 if
if(age>=20){
    return"yes you can";
}
else{
    return`please come back after ${(20-age)} years to get one`
}
}
console.log(canIGetADrivingLicense(15))


function sameLength(l1,l2){                      //Num 10 if(string)
    if(l1.length==l2.length){
        return true
    }
    else{
        return false
    }
}
console.log(sameLength("hello","not"))
console.log(sameLength("hello","ggggg"))


function largerNubmer(x1,x2){                      //Num 11 if(>)
    if(x1>x2){
        return x1
    }
    else{
        return x2
    }
}
console.log(largerNubmer(7,8))
console.log(largerNubmer(10,2))


function smallerNubmer(x3,x4,x5){                      //Num 12 if(<)
    if(x3<x4 && x3<x5){
        return x3
    }
    if(x4<x3 && x4<x5){
        return x4
    }
    else{
        return x5
    }
}
console.log(smallerNubmer(5,2,8))
console.log(smallerNubmer(7,8,6))

function shorterString(s1,s2,s3,s4,s5){                      //Num 13 if(string)
    if(s1.length<s2.length && s1.length<s3.length && s1.length<s4.length && s1.length<s5.length){
        return s1
    }
    if(s2.length<s1.length && s2.length<s3.length && s2.length<s4.length && s2.length<s5.length){
        return s2
    }
    if(s3.length<s1.length && s3.length<s2.length && s3.length<s4.length && s3.length<s5.length){
        return s3
    }
    if(s4.length<s1.length && s4.length<s3.length && s4.length<s2.length && s4.length<s5.length){
        return s4
    }
    else{
        return s5
    }
}
console.log(shorterString("s","ewr","xjy","vdve","ege"))
console.log(shorterString("riki","lina","luna","axe","rubic"))
console.log(shorterString("mars","tree","io","volve","ck"))



function longerString(g1,g2,g3,g4){                      //Num 14 if(string)
    if(g1.length>g2.length && g1.length>g3.length && g1.length>g4.length){
        return g1
    }
    if(g2.length>g1.length && g2.length>g3.length && g2.length>g4.length){
        return g2
    }
    if(g3.length>g1.length && g3.length>g2.length && g3.length>g4.length){
        return g3
    }
    
    else{
        return g4
    }
}
console.log(longerString("mars","tree","io","volve"))
console.log(longerString("riki","rubic","lina","axe"))


function isEven(num1){                                     //Num 15 if(even/odd)
if(num1%2==0){
    return true
}
else{
    return false
}

}
console.log(isEven(12))
console.log(isEven(25))

function isOdd(num2){                                     //Num 16 if(odd/even)
    if(num2%2==0){
        return false
    }
    else{
        return true
    }
    
    }
    console.log(isOdd(12))                                 
    console.log(isOdd(25))

    
function positive(num3){                                  //Num 17(negative to positive)
    return Math.abs(num3)
}
console.log(positive(-10))

function fullName(k2, k3) {                               // num 18  full name                                    
return k2 + k3;
}
console.log(fullName("mohammad ", "aldb'ee"));


function average(c1, c2, c3, c4, c5) {                     // num 19 verage
return (c1 + c2 + c3 + c4 + c5) / 5;
}
console.log(average(7, 8, 9, 10, 50));

function randomNumber() {                                   //num 20 random
return Math.random();
}
console.log(randomNumber());



function randomBetweenNumbers(ran,ran1) {                    //num 21 random (between numbers)
    return ((Math.random() * (ran1 - ran)) + ran);
    }
    console.log(randomBetweenNumbers(2,5));
    


function scoreInUniversty(qq){                               //num 22 if (marks)
    if(qq>=95 && qq<100){
        return "A"
    }
    if(qq>=85 && qq<95){
        return "B"
    }
    if(qq>=70 && qq<85){
        return "C"
    }
    if(qq>=50 && qq<70){
        return "D"
    }
    else{
        return "F"
    }
}
console.log(scoreInUniversty(75))

// var xx=0
// function counter(){                          //23
    
//     return ++xx;
// }
// console.log(counter())
// console.log(counter())
// console.log(counter())
// console.log(counter())
 var xx=4;
function counter(){                             //24
    
    return xx-=1;
}
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())



