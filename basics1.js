// a=5;
// let b=10
// console.log(b)
// const pi=3.14
// console.log(pi)
// a=["lin",10,]
// console.log(a[3])
// let person= {
//         Name:"Lila",
//         age:56
//             }
// console.log(person.Name)
// a=4;
// b='3';
// if(a==b)
// {console.log("yes")}
// function mul(a,b)
// {var c=a*b;
// console.log(c);}
// mul(4,5);
// function div(a,b)
// {var c=a/b;
// console.log(c);}
// div(4,5);
// let student={
//     name : "selesh",
//     age : 23,
//     degree:"Btech"
// }
// console.log(student)
// let months=["january","feb",8,7,"march"]
// console.log(months[3])
// function welcome(){
//     console.log("Welcome to my first function")
// }
// welcome
console.log("Hello world")
// let sum =0;
// for(let i=1;i<=10;i++)
// {sum=sum+i;
//     }
//     console.log('sum of first 10 natuaral numbers',sum)
// let i=0;
// while(i<=10)
// {console.log(i);
// i++;}
// let i=2;
// do{
//     console.log(i);
// }while(i>2)

// let students=['hari','rema','lish']
// for (let stud of students){
//     console.log(`hello ${stud}`)
// }
//backtick notation
// function findDigits(n) {
   
//     var number=n
//     count=0
//     while(n>0)
//         { var digit=n%10
//          if(number%digit==0)
//          {count=count+1}
//         n=Math.floor(n/10)
//         console.log(n)
//         console.log(digit)}
//         return count
// }
// result=findDigits(360)
// console.log("number of digits"+count)
function timeConversion(s) {
    // Write your code here
    if(s.substring(8)=='PM'&& s.substring(0,2)=='12')
    {return(s.substring(0,8))}
    if(s.substring(8)=='PM'&& s.substring(0,2)!='12')
    {
       
        p=12+Number(s.substring(0,2))
        k=String(p).concat( s.substring(2,8))
        return k
        
    
    }
    if(s.substring(8)=='AM'&& s.substring(0,2)=='12')
    { k="00".concat( s.substring(2,8))
        return k}
    if(s.substring(8)=='AM'&& s.substring(0,2)!='12')
     {return(s.substring(0,8))}
}

    


 var h
 h=timeConversion("02:01:02AM")
 console.log(h)