

function add(){
    let a = 5;
    let b= 5; 
    let sum=a+b;
    // console.log(sum);
    
    return sum; 
     
}
function test(){
    // console.log(`sum = ${add()}`);
    
}

// test()


function add(x,y){          //parameters    or foraml peramiters
    console.log(x+y);
    
}
function print(){
    let a=5
    let b =9
    add(a,b)            // argumanets or actual parametrs
    
    
}
// print()




function add(x,y){          //parameters    or foraml peramiters
    return(x+y);
    
}
function print(){
    let a=5
    let b =9
    // console.log(add(a,b));      // argumanets or actual parametrs
    
    
}
// print()


function sumDigit(num){
    let sum =0 
    while(num != 0) {
        let r = num%10
        sum = sum + r
        num = parseInt(num/10)
    }
    return sum;
}

// console.log(sumDigit(344545465634));
// console.log(sumDigit(123456789));
// console.log(sumDigit(987654321));


function test(a,b,c){
    console.log(`a=${a},b=${b},c =${c} `)
}
// test(2,5,3)
// test(2,5)
// test(2)

function test(){
    return [10,20,30,40,50,60,70]
}
// console.log(test());

// fumction type = 1 reguler function , 2-anonymous function, 3-fat arrow function

// function summ (){
//     let  x = 9
//     let y = 11
//         // console.log(x+y);
// }

// summ()

// let summ =function (){
//     let  x = 9
//     let y = 11
//         console.log(x+y);
// }

//  summ()


let sum = ()=>{
    let  x = 9
    let y = 11
        // console.log(x+y);
}

// sum()

// higher oder function and call back function 

// function temp(fun){
//     console.log("in higer oder function");
//     fun()
//     console.log("back to higer order function");    
// }
// temp(()=>(console.log("call back function")
// ))



// Recursion
// let a = 0; 
// function ducat(a){
//     a++
//     console.log("in ducat function")
//     if (a < 5) 
//         ducat(a)
//         console.log("back to ducat function");
//     }
//     console.log("in the outer scope");
//     ducat(0)
//     console.log("back to main fuction ");
    
    



// function fact(num){
//     if(num <=1){
//         return 1
//     }else{
//         return num * fact(num -1)
//     }
// }
// console.log(fact(5));
// console.log(fact(6));
// console.log(fact(7));
// console.log(fact(8));



// (iife) immediately involked function Expression

// (()=>{
//     let a= 5
//     let b = 5
//     console.log(a+b);
// })()