//question-1

console.log("hello,world!")

//question-2

function AddNumber(a,b)
{
    console.log(a+b)
}
AddNumber(3,5);

//question-3
function FindLargest(a,b,c){
  if (a >= b & a >= c){
        console.log(a)}
    else if (b >= a & b >= c)
      {console.log(b)}
    else
       { console.log(c)}
}

FindLargest(2,8,5)

//question-4

var number=5;
var factorial=1;
  
for(i=1;i<=number;i=i+1){
      factorial=factorial*i;
}
  
console.log(factorial);

//question-6

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello"));

//question-8

function FIndMinimum(a,b,c,d)
{
  if(a<=b && a<=c && a<=d){
    console.log(a)
  }else if (b<=c && b<=d && b<=a){
    console.log(b)
  }else if (c<=a && c<=b && c<=d){
    console.log(c)
  }else {
    console.log(d)
  }
}

  FIndMinimum(1,0,0,9)

  //question-9

  let numbers=[3,1,4,1,5]

  numbers.sort()

  console.log(numbers)

  //question-10

  let string= "hello world"
  let substring = string.includes("world")

  console.log(substring);

//question-11

let sum=0
let array=[1,2,3,4,5]
for(i=0;i<array.length;i++)
{
  sum+=array[i]
}
console.log(sum)

//question-12

function fibonaci(n){
  n1=0
  n2=1
  console.log(n1)
  for(i=1;i<=n;i++){
    n3=n1+n2
    console.log(n3)
    n1=n2
    n2=n3
  }
}fibonaci(5)


 



    




