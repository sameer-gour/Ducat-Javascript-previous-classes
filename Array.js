 let arr = Array(1,2,3,4,5,6);
 let ar = [1,2,3,4,5,6];

console.log(arr);
console.log(ar);
let i=0;
while(i<ar.length){
    console.log(ar[i]);
    i++
}
let i=0;
do{
console.log(ar[i]);
    i++
}while(i<ar.length)

for (let index = 0; index < ar.length; index++) {
    console.log(ar[index]);        
}
for (let index  of ar) {
    console.log(index);
    
    
}
for (const key in arr) {
    
console.log(key);
    
    
}

console.log((arr.toString()));
console.log(arr.join("*"));


ar.push(20)
ar.push(30)
ar.push(50)

console.log(ar);

ar.pop()
console.log(ar);

ar.unshift(100)
ar.unshift(200)
ar.unshift(400)
console.log(ar);

ar.splice(3,0,55,50,45)
console.log(ar);


delete ar[4]
delete ar[5]
delete ar[3]
console.log(ar);

console.log(ar.slice(7,9));


let newarr = arr.concat(ar)
console.log(newarr);

for (let elem of newarr.entries()) {
    console.log(elem);
    
}
console.log(newarr.indexOf(20));
console.log(newarr.indexOf(5000));
console.log(newarr.includes(20));
console.log(newarr.includes(5000));

console.log(newarr.lastIndexOf(20));
console.log(newarr.lastIndexOf(5000));
console.log(newarr.lastIndexOf(4));

console.log(newarr);
 newarr.reverse()
console.log(newarr);

console.log(newarr.find(4));

let a = [11,12,13,14,15,16,17,18,19,20]

 function test(item){
 return item %2 == 0
 }
 console.log(a.find(test));
 console.log(a.findIndex(test));
 console.log(a.findLastIndex(test));
 console.log(a.filter(test));
 

 a.forEach(element => {
    console.log(element);
    
 });

let arrr= [111,22,55,777,22]

 console.log(a.reduce((p,c)=> p+c));
console.log(arrr.sort((a,b)=>b-a));


 
 

