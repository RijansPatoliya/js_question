// //question-1

// function SumNumber([a,b,c,d,e])
// {
//     console.log(a+b+c+d+e)
// }
// SumNumber([1,2,3,4,5]);

// //question-2

// function FindLargest(a,b,c,d)
// {
//     if(a<=b , a<=c , a<=d){
//         console.log(a);
//     }else if(b<=a,b<=c,b<=d){
//         console.log(b)
//     }else if(c<=a,c<=b,c<=d){
//         console.log(c)
//     }else{
//         console.log(d)
//     }
// }
// FindLargest(9,10,289,874);

// //question-3

// function FindSmallest(a,b,c,d)
// {
//     if(a<=b , a<=c , a<=d){
//         console.log(a);
//     }else if(b<=a,b<=c,b<=d){
//         console.log(b)
//     }else if(c<=a,c<=b,c<=d){
//         console.log(c)
//     }else{
//         console.log(d)
//     }
// }
// FindLargest(9,10,289,874);

// //question-4

// let Num=[2,-4,64,8,4,5,1]

// Num.sort()

// console.log(Num);

// // question-5

// let rijans = [5, 2, 9, 1, 5, 6]
// rijans.sort((a, b) => b - a)

// console.log(rijans);

// // question-6

// function Apay(num) {
//      return num.reverse();
// }

// console.log(Apay([1, 2, 3, 4, 5]));  

// //question-7

// let number=[1,2,3,4,5]
// let SubNumber=number.includes(3)
// console.log(SubNumber);

// //question-8

// function findIndex(ap, element) {
//     return ap.indexOf(element);
// }

// console.log(findIndex([1, 2, 3, 4, 5], 3)); 
// console.log(findIndex([1, 2, 3, 4, 5], 6));  

// //Second-method

// let ap = [1, 2, 3, 4, 5];
// let element = 3;

// let index = ap.indexOf(element);

// console.log(index);  


// //question-9

// let apay=["mango","banana","orange","mango"]
// let result=[...new Set(apay)]
// console.log(result)

//question-10

function MergeArrays(arr1,arr2)
{
    let result=[...arr1,...arr2]
   
    
    console.log(result)
}

let arr1=[1,2,3,4]
let arr2=[4,5,6,7]

MergeArrays(arr1,arr2)

//second method

// a=[1,2,3]
// b=[4,5,6]
// console.log(a.concat(b))

//question 12

function MergeApays(ap1,ap2)
{
    let result=[...ap1,...ap2]
   
    let ans=[...new Set(result)]
    console.log(ans)
}

let ap1=[1,2,3]
let ap2=[2,3,4]

MergeApays(ap1,ap2)

//question-13


