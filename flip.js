
//checking prime number

let num=21;
let count =0;
for(let i=1;i<=num;i++){
    if(num%i==0){
        count++;

    }
}
if(count==2){
    console.log("Prime");
}
else{
    console.log("Not Prime");
}

//problem2 check palindrome
let string="madam";
let bag ="";
for(let i=string.length-1; i>=0 ;i--)
{
  bag += string[i];
           }
if(bag==string){
 console.log("it is palindrome");
}
else{
 console.log("it is not palindrome");
}
