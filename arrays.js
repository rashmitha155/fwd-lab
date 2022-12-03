const arr=["radha","rashmitha","chinnu"]
for(let i = 0;i <=3;i++){
    console.log(arr[i])
}
console.log('.....')
arr.push("jujjavarapu")
for(let i = 0;i <=3;i++){
    console.log(arr[i])
}
console.log('.....')
arr.unshift("chowdary")
for(let i = 0;i <=4;i++){
    console.log(arr[i])
}
console.log('.....')
const arr1=["radha","rashmitha","chi"]
arr.concat(arr1)
arr.forEach(i =>{
    console.log(i)
})
