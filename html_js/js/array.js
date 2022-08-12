// let array = ["mohammad", "hamdi", "aldbee", ["first", "second"]];
// console.log(`hello ${array[2]}`);
// console.log(`hello ${array[2][5]}`);
// console.log(`hello ${array[3][0]}`);
// console.log(`hello ${array[3][0][3]}`);

// console.log(array);
// array[0] = "ahmad";
// console.log(array);

// let array1 = ["mohammad", "hamdi", "aldbee", "first"];

// console.log(array1.length);
// array1[array1.length] = "go";
// console.log(array1);


//add and remove from array
// let array2 = ["mohammad", "hamdi", "aldbee", "first"];
// array2.unshift('dod')
// console.log(array2);
// array2.push('bo')
// console.log(array2);
// array2.shift()
// console.log(array2);
// array2.pop()
// console.log(array2);


//Search Array
// let array3 = ["mohammad", "hamdi", "aldbee", "first"];
// console.log(array3.indexOf('hamdi'));
// console.log(array3.indexOf('hamdi',2));//تعطي -1 عندما لا تجد القيمه
// console.log(array3.lastIndexOf('hamdi'));
// console.log(array3.includes('hamdi'));
// if(array3.indexOf===-1){
//     console.log('not found')

// }


//Sort Array
// let array4 = ["mohammad",100,20,50, "hamdi", "70",60,70, "first"];
// console.log(array4.sort())
// console.log(array4.reverse())


//Slice Array
// let array5 = ["mohammad",100,20,50, "hamdi", "70",60,70, "first"];
// console.log(array5.slice(1,4))
// console.log(array5.slice(1,-1))//ما بتاثر ع السلسله
// console.log(array5.slice(-5,-1))

// //Splice array
// let array6 = ["mohammad",100,20,50, "hamdi", "70",60,70, "first"];//بتاثر ع السلسله
// console.log(array6.splice(1,4,'dbhdf'))
// console.log(array6)

//concat Array
// let array7 = ["mohammad",100,20,50, "hamdi", "70",60,70, "first"]
// let array8 = [ "first",'dthj','rjher']
// let array9 =array7.concat(array8,'he')
// console.log(array9)

 //Join Array
// console.log(array9.join('#'))

let zero =0;
let counter =3;

let my = ['ahmad','Mzero','elham','osama','gamal','ameer']
console.log(my.slice(zero,counter).concat(my[counter]).reverse())

console.log(my.slice(my.indexOf('Mzero'),counter).reverse())
console.log(my.splice(zero,6,'Alzero').toString)
console.log(my)
console.log(my.splice(zero,2))


