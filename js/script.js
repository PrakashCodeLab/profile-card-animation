/*const num1=[1,2,3,4,5,6,7,8,9 ,"A","B","C","D","E","F"];




num1.push("g","h","i");

num1.pop();

num1.unshift(100);

console.log(num1);

num1.shift()

console.log(num1);



for (const items of  num1) {
    
    console.log(items);
}

for (const items1 in num1) {
    console.log(items1)
}






*/


const num2=[5,6,7,8,9,10,11,12,13,14,15];

const num3=num2.slice(5);

console.log(num3);

for (const num4 of num3 ) {
  console.log(num4);
}


num2.splice(5,2,100,200);

console.log(num2);

let [a,b]="Father manickam".toUpperCase().split(" ");

console.log(`My ${a} name is ${b}`);

const [c,d]="Mother latha ".toUpperCase().split(" ");


console.log(`My ${c} name is ${d}`);
