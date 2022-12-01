
//checking prim number

let num=21;
let count =0
for(let i=1;i<=num;i++){
    if(num%i==0){
        count++

    }
}if(count=undefined){
    console.log("Prim")
}else{
    console.log("Not Prim")
}

//problem2 check palindrome
 let string="madam"
let bag =""
for(i=0;i<string.length;i++)
{
 bag+=string[i]+" "
           }
if(bag==string){
console.log("it is palindrome")}
else{console.log("it is not palindrome")
