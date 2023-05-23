console.log("hello prerna")
var name="lakshya"
console.log(name)
var age=true
console.log(typeof(age))

let arr=["a","b","c","d"]
arr.push("e")
console.table(arr)
console.log(arr)
arr.pop()
console.log(arr)

arr.splice(0,1)
console.log(arr)

arr.splice(0,2,"f")
console.log(arr)

let users=[
    {name:"prerna", age:20},
    {name:"lakshya", age:22},
    {name:"nikhil", age:24},
]
let n=users.length;
for(i=0;i<n;i++)
{
    console.log(users[i].name, "and", users[i].age);
}
let m= Math.floor(Math.random()*10);
console.log(m)

function grinder(items)
{
    console.log("grinding..",items)
}

grinder("tomato")
grinder("lakshya")

//maps
let num=[1,2,3,4,5,6,7,8]
let sqr= num.map((x)=>{
    return x*x;
})
console.log(sqr)

//filters
let greaterthan5= num.filter((x)=>{
    if(x>5)
    {
        console.log(x)
    }
})

//conditional operator
 let role=1
 let id= role==1?"student" :"teacher"
 console.log(id)

 let numbers = [23, 67, 98, 54, 27, 11, 105, 3, 1, 0]
 
 //to find sum using reduce 
let total = numbers.reduce((previous, current) => {
    let sum = current + previous;
    return sum;
}, 0)

console.log(total)

 //to find max using reduce
 let max =numbers.reduce((pre, curr)=>{
    
    if(pre < curr){
        pre = curr;
    }
    return pre;
}, 0)

console.log(max)