//Correct the syntax error
// [ 1, 7, 9, 45 ]

// ["Str", "alex","moh"]

// ['the','fox', 'over', 'lazy', 'dog']  //1

// //What the index of "Banana","Tomato"
// var fruits=["Tomato","Banana","Watermelon"]  //2
// //Tomato=[0]
// //Banana=[1]


// /*
// 3
// Create an array represents your:
// 1- Favorite Food (5)
// 2- Favorite Sport (3)
// 3- Favorite Movie (4)
// */

// favoriteFood =["salat", "mansaf", "shawarma", "falafl", "kabsah"];
// favoriteSport =["football", "basketball", "tenis"];
// favoriteMovie["100", "fast and furious 7", "fast and furious 8", "fast and furious 9"];



/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
// function firstOfArray(firstOfArray){
//     return firstOfArray[0]
// }
// console.log(firstOfArray(["t","u","g","x"]))
// console.log(firstOfArray([1,4,5]))


/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the last element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/

// function lastOfArray(xx){
   
//     return xx[xx.length-1]

// }
// console.log(lastOfArray(["t","u","g","x"]))

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
// var array = [0,5,7,9]
// array.push(10)
// console.log(array)
// array.shift()
// array.shift()
// array.shift()
// console.log(array)
// array.unshift(1,3,4,6,8)
// console.log(array)


/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
// var array2=[1,3,4,6,8,9,10]
// array2.pop()
// array2.shift()
// array2.shift()
// array2.shift()
// array2.shift()
// array2.shift()
// array2.unshift(5)
// array2.push(-7)
// array2.push(3.5)
// console.log(array2)
/*
/*
* Exercise 1: 
* Write a function called doubleValues which accepts an array and returns
* a new array with all the values in the array passed to the function doubled
*
* Test Case:
*    Test Case 1: doubleValues([1,2,3]) 
*    Test Case 2: doubleValues([5,1,2,3,10])  
*
* Result: 
* Test Case 1:  [2,4,6]
* Test Case 2: [10,2,4,6,20]
*
*
*/


// const doubleValues=[1,2,3]
// const numbers = doubleValues.map(myFunction);

// console.log(numbers)

// function myFunction(value) {
//   return value * 2;
// }

// const doubleValues2=[5,1,2,3,10]
// const numbers2 = doubleValues2.map(myFunction);

// console.log(numbers2)

// function myFunction(value) {
//   return value * 2;
// }





/*
* Exercise:
* Write a function called onlyEvenValues which accepts an array and returns
* a new array with only the even values in the array passed to the function
*
* Test Cases:
*   onlyEvenValues([1,2,3]) 
*   onlyEvenValues([5,1,2,3,10]) 
* 
* Result:
*  Test Case 1:  [2]
*  Test Case 2: [2,10]
*/

// Values =[1,2,3]
// Values2 =Values.filter(onlyEvenValues)
// console.log(Values2)
// function onlyEvenValues(arr){
//     if(arr%2==0){
//         return arr
//     }  
// }   
// Values3 = ([5,1,2,3,10])
// Values4 =Values3.filter(onlyEvenValues2)
// console.log(Values4)
// function onlyEvenValues2(arr){
//     if(arr%2==0){
//         return arr
//     }
// }   

/*
* Exercise:
* Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
*
* Test Case:
*   Test Case 1: showFirstAndLast(['colt','matt', 'tim', 'udemy'])  
*   Test Case 2 :showFirstAndLast(['hi', 'goodbye', 'smile'])  
*  
* Result:
* Test Case 1: ["ct", "mt", "tm", "uy"]
* Test Case 2: ['hi', 'ge', 'se']
*
*/
// show=['colt','matt', 'tim', 'udemy']
// show2=show.map(showFirstAndLast)
// console.log(show2)
// function showFirstAndLast(arr){

//     for(i=0;i<arr.length;i++){

//     return arr.charAt(0)+arr.charAt(arr.length-1)
// }

// }

/*8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/

// function Arra(middle){
//     let x;
//     let x1;
//     if (middle.length%2 !==0){
// x = middle.length/2 -.5
// return middle[x]
// } else{
// x = middle.length/2
// x1 = x-1
// return `${middle[x]}  ${middle[x1]}`
// }
// }
// console.log(Arra(["t","u","g","x"]))
// console.log(Arra([1,4,5]))

/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
// var animals = ['cat', 'ele', 'bird']
//  var animal = ['zebra', 'elephant']
// lol = animals.concat(animal)
// console.log(lol)
// var nums= [1,2,3,8,9]
// num = [5,-22,3.5,44,98,44]
// num3=nums.concat(num)
// console.log(num3)


/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/
// function indexOfArray(nums,x){
//     return nums[x]
// }
// console.log(indexOfArray([1,2,8,7,9],2))

/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/

// function arrayExceptLast(nums){
//     nums.pop()
//     return nums
// }
// console.log(arrayExceptLast([1,2,3,8,9]))

/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
// function addToEnd(nums,x){
// nums.pop()
// nums.push(x)
// return nums
// }
// console.log(addToEnd([2,58,7,8],99))

/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// nums= [1,2,3,8,9]
// sum=0;
// for(i=0;i<nums.length;i++){
// sum=sum+nums[i]
// }
// console.log(sum)
// nums= [1,2,3,8,9]
// sum=0;
// i=0;
// while(i<nums.length){
//     sum=sum+nums[i]
//     i++
// }console.log(sum)

/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/




// var arr = [2, 3, 5, 10, 2, -9, 3];
// var val = arr[0];  

// for (var i = 0; i < arr.length; i++) {

//     if (arr[i] < val) {
//         val = arr[i];
//     }

// }
// console.log(val)

// var arr = [2, 3, 5, 10, 2, -9, 3];
// var val = arr[0];
// i = 0;
// while(i<arr.length){
//     if(arr[i]<val){
//         val =arr[i]
//     }
//     i++
// }console.log(val)

/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// function removeFromArray(arr,x){
//     for(i=0;i<arr.length;i++){
//         if(arr[i]==x){
//             arr.splice(arr.indexOf(x),1)
//         }
        
//     }return arr
// }console.log(removeFromArray([8,9,4,7,6],9))


// function removeFromArray(arr,x){
//     i=0
//     while(i<arr.length){
//         if(arr[i]==x){
//             arr.splice(arr.indexOf(x),1)
//                     }   
//                     i++
//     }return arr
// }console.log(removeFromArray([8,9,4,7,6],7))

/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// function oddArray(arr){
//     for(i=0;i<arr.length;i++){
//         if(arr[i]%2==0){
//             arr.splice(arr.indexOf(arr[i]),1)
//         }
        
//     }return arr
// }console.log(oddArray([8,9,4,7,6]))

// function oddArray(arr){
//     i=0
//     while(i<arr.length){
//         if(arr[i]%2==0){
//             arr.splice(arr.indexOf(arr[i]),1)
//                     }   
//                     i++
//     }return arr
// }console.log(oddArray([8,9,4,9,6]))


/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// function aveArray(arr){
// sum = 0;
// for(i=0;i<arr.length;i++){
// sum+=arr[i]
// }
// return sum/arr.length
// }
// console.log(aveArray([8,9,7,9,6]))

// function aveArray(arr){
// sum = 0;
// i = 0;
// while(i<arr.length){
//     sum+=arr[i]
// i++
// }
// return sum/arr.length

// }
// console.log(aveArray([10,9,7,8,6]))


/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


// function shorterInArray(arr){
// x = arr[0]
// for(i=0;i<arr.length;i++){
//     if(x.length>arr[i].length){
//         x = arr[i]
//     }
// }
// return x;

// }
// console.log(shorterInArray(["aleex","mercer","madrasa","rashed2","emad","hayla"]));

// function shorterInArray(arr){
//     x = arr[0];
//     i = 0;
//     while(i<arr.length){
//         if(x.length>arr[i].length){
//                 x = arr[i]
//     }
// i++
        
//     }
//     return x;


// }console.log(shorterInArray(["aleex","mercer","madrasa","rashed2","emad","hayla"]));


/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


// function repeatChar(str,a){
// sum = 0
// for(i=0;i<str.length;i++){
// if(str[i]!=a){
    
// }else{
//     sum=sum+1
// }

// }
// return sum
// }
// console.log(repeatChar(("alex mercer madrasa rashed2 emad hala"),"e"))

// function repeatChar(str,a){
// sum =0;
// i = 0;
// while(i<str.length){
//     if(str[i]==a){
//     sum+=1}
//     i++
// }

// return sum
// }console.log(repeatChar(("alex mercer madrasa rashed2 emad hala"),"r"))


/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


// function evenIndexOddLength(arr){
// x=""
// for(i=0;i<arr.length;i++){
// if(arr[i].length%2!=0 && arr.indexOf(arr[i])%2==0){
//     x = arr[i]
// }

// }

// return x

// }console.log(evenIndexOddLength(["alex","mercer","madrasa","rashed2","elmad","hala"]))

// function evenIndexOddLength(arr){
// sum = "";
// i = 0;
// while(i<arr.length){
//     if(arr[i].length%2!=0 && arr.indexOf(arr[i])%2==0){
//         sum = arr[i]
//     }
//     i++
// }
// return sum
// }console.log(evenIndexOddLength(["alex","mercer","madrasa","rashed2","emad","hala"]))


/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// function powerElementIndex(arr){
// rr2=arr;
// for(i=0;i<arr.length;i++){
//     rr2[i]=arr[i]**arr.indexOf(arr[i])
// }
// return rr2

// }
// console.log(powerElementIndex([44, 5, 4, 3, 2, 10]))

// function powerElementIndex(arr){
// rr2=arr;
// i = 0;
// while(i<arr.length){
//     rr2[i]=arr[i]**arr.indexOf(arr[i])
// i++
// }

// return rr2
// }console.log(powerElementIndex([44, 5, 3, 3, 7, 10]))

/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

// function evenNumberEvenIndex(arr){
// rr =[];
// for(i=0;i<arr.length;i++){
//     if(arr[i]%2==0 && arr.indexOf(arr[i])%2==0){
//         rr.push(arr[i])
//     }
// }
// return rr
// }console.log(evenNumberEvenIndex([5,2,4,1,8,66,44,77,4,9,55,1]))


// function evenNumberEvenIndex(arr){
//     rr =[];
//     i=0;
//     while(i<arr.length){
//         if(arr[i]%2==0 && arr.indexOf(arr[i])%2==0){
//             rr.push(arr[i])
//     }

// i++
// }
// return rr
// }console.log(evenNumberEvenIndex([5,2,4,1,8,66,54,77,34,9,84,1]))

/*

While Exercises 
1
Create a function called subtract
that takes a single parameter n,
and return the subtraction of all
starting from n to 0
Ex: subtract(2); => 2 - 1 - 0 => 1
Ex: subtract(5); => 5 - 4 - 3 - 2 - 1 - 0 => -5
Ex: subtract(9); => 9 - 8 - 7 - 6 - 5 - 4 - 3 - 2 - 1 - 0 => -27
*/

// function subtract(x){
// x1=x;
//     i = 0;
// while(i<x){
// x1=x1-i
// i++
// }
// return x1
// }console.log(subtract(50))

/*
2
Create a function called factorial
that takes a single parameter n,
and return the product of all integers up to n starting from 1
Ex: factorial(2); => 2 * 1 => 2
Ex: factorial(4); => 4 * 3 * 2 * 1 => 24
*/
// function factorial(x){
// x1=x;
// i = 1;
// while(i<x){
// x1=x1*i
// i++
// }
// return x1
// }console.log(factorial(5))

/*
3
Create a function called repeatStr
that takes 2 parameters string and number,
and return the string number time with space
Important: the continue condition should be [somthing !== 0]
** Think how we can return nothing ???
** Important: You should dint have extra space at the end
Ex: repeatStr("to",2); => "to to"
Ex: repeatStr("to",4); => "to to to to"
*/

function repeatStr(str,n){
i = 0;
d = ""
while(i<n){
if(i<n-1){
d+= `${str} `}
else{
    d+=`${str}`
}
i++
}
return  ` "${d}"`
}
console.log(repeatStr("hello",5))

/*
4
Create a function called sum2
that take two parameter
and will return the sumation from the first number to the second number
Ex: sum2(4, 5); => 4 + 5 => 9
Ex: sum2(3, 6); => 3 + 4 + 5 + 6 => 18
*/
// function sum2(x,x1){
//     x2=0
//     while(x<=x1){
//         x2+=x
//         x++
//     }
//     return x2
// }console.log(sum2(2,6))


/*
5
Create a function called multiOf
that takes 3 parameters,
and return the first number mutiple by
(the second one ^ the third number)
** Important: dont use **
Ex: multiOf(4,10,3); => 4000
Ex: multiOf(6,3,2); => 54
Ex: multiOf(6,2,3); => 48
*/

// function multiOf(x,x1,x2){
// mu = x * Math.pow(x1,x2)
// return mu
// }
// console.log(multiOf(4,20,3))


/*
6
Create a function called muti2
that take two parameter
and will return the multiplication
from the first number to the second number
Ex: muti2(4, 5); => 4 * 5 => 20
Ex: muti2(3, 6); => 3 * 4 * 5 * 6 => 360
*/

// function muti2(x,x1){
//         x2=1
//         while(x<=x1){
//             x2*=x
//             x++
//         }
//         return x2
//     }console.log(muti2(2,6))
/*
7
Create a function called numberBetweenUs
that take 2 parameters
and return the number between them
** Important: You should't have extra space at the end and comma
** Important: the stop condition should [num1!==num2-1]
** hint: maybe you will have 2 if statment
numberBetweenUs(2,8) => "3, 4, 5, 6, 7"
numberBetweenUs(1,3) => "2"
*/


// function numberBetweenUs(n,n1){
// i = n;
// d = ""
// while(n<n1){
//     if(i==n || n==n1){

//     }else{
// d += ` ${n} `}
// n++
// }
// return `"${d}"`
// }
// console.log(numberBetweenUs(1,10))

/*
8
Write a function called countDown
that takes one parameter
and return a string represent the count down from the number
that insert to 0
instead of 0 you shoulf have "done"
between each number a comma and space
** you need to use recursion
** Important: You should't have extra space at the end and comma
countDown(5)
=> "5, 4, 3, 2, 1, done"
countDown(2)
=> "2, 1, done"
countDown(7)
=> "7, 6, 5, 4, 3, 2, 1, done"
*/

// function countDown(n){
// i = n;
// d = ""
// while(n>0){
// d += ` ${n}, `
// n--
// }
// return `"${d} done"`
// }
// console.log(countDown(10))

//For Exercises 
/*
* Exercise 1: 
* Write a function called doubleValues which accepts an array and returns a new array 
* with all the values in the array passed to the function doubled
*
* Test Case:
*    Test Case 1: doubleValues([1,2,3]) 
*    Test Case 2: doubleValues([5,1,2,3,10])  
*
* Result: 
* Test Case 1:  [2,4,6]
* Test Case 2: [10,2,4,6,20]
*
*
*/
// function doubleValues(arr){
//     ar =[]
//     for(i=0;i<arr.length;i++){
//        ar[i]= arr[i]*2
//     }
// return ar
// }console.log(doubleValues([2,5,6]))

/* Exercise 2:
* Write a function called onlyEvenValues which accepts an array and returns
* a new array with only the even values in the array passed to the function
*
* Test Cases:
*   onlyEvenValues([1,2,3]) 
*   onlyEvenValues([5,1,2,3,10]) 
* 
* Result:
*  Test Case 1:  [2]
*  Test Case 2: [2,10]
*/
// function onlyEvenValues(arr){
//     rr =[];
//     for(i=0;i<arr.length;i++){  
//         if(arr[i]%2==0){
//             rr.push(arr[i])
//         }}
    
//     return rr
//     }console.log(onlyEvenValues([5,2,4,1,8,66,55,77,34,9,55,1]))



/*
* Exercise 3:
* Write a function called showFirstAndLast which accepts an array of strings and returns 
a new array with only the first and last character of each string.
*
* Test Case:
*   Test Case 1: showFirstAndLast(['colt','matt', 'tim', 'udemy'])  
*   Test Case 2 :showFirstAndLast(['hi', 'goodbye', 'smile'])  
*  
* Result:
* Test Case 1: ["ct", "mt", "tm", "uy"]
* Test Case 2: ['hi', 'ge', 'se']
*
*/

// show=['colt','matt', 'tim', 'udemy']
// show2=show.map(showFirstAndLast)
// console.log(show2)
// function showFirstAndLast(arr){

//     for(i=0;i<arr.length;i++){

//     return arr.charAt(0)+arr.charAt(arr.length-1)
// }

// }

/*
* Exercise 4:
* Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed 
* to the function with the new key and value added for each object 
* 
* Test Cases:
*   Test Case :addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
*   
* Result:
*   [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]
*
*/
// function addKeyAndValue(arr, key, value) {
    
//     for (i = 0; i < arr.length; i++) {
//       x = arr[i];
//       x[key] = value;
//     }
//     return arr;
//     }
//  console.log(addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor'))


/*
* Exercise 5:
* Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the 
* values as the number of times the vowel appears in the string. This function should be 
*case insensitive so a lowercase letter and uppercase letter should count
* 
* Test Cases 1: vowelCount('Elie') // {e:2,i:1};
* Test Cases 2:  vowelCount('Tim') // {i:1};
* Test Cases 3:  vowelCount('Matt') // {a:1})
* Test Cases 4:  vowelCount('hmmm') // {};
* Test Cases 5:  vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*
*   
* Result:
* Test Cases 1: {e:2,i:1};
* Test Cases 2: {i:1};
* Test Cases 3: {a:1})
* Test Cases 4: {};
* Test Cases 5: {i: 1, a: 4, e: 3, o: 3, u: 1};
*
*/

// function vowelCount(arr){
//     obj={}
//     x=0
//     x1=0
//     x2=0
//     x3=0
//     key=""
//     for(i=0;i<arr.length;i++){
       
//         if(arr[i]=='e' ||arr[i]=='E'){
//         x+=1
//         key='e'
//         obj[key]=x}
//         if(arr[i]=='i' ||arr[i]=='I'){
//         x1+=1
//         key='i'
//         obj[key]=x1 }
//         if(arr[i]=='a' ||arr[i]=='A'){
//         x2+=1
//         key='a'
//         obj[key]=x2 }
//         if(arr[i]=='o' ||arr[i]=='O'){
//         x3+=1
//         key='o'
//         obj[key]=x3}} 
//     return obj
// }console.log(vowelCount('Elie'))
// console.log(vowelCount('Tim'))
// console.log(vowelCount('I Am awesome and so are you'))
// console.log(vowelCount('mohammad aldbee'))