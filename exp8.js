//exp8.js
function add(x,y){
    return x+y
}
console.log("addition:"+add(5,15))

function intosec(min){
    let sec=(min*60)
    return sec
}
console.log("conversion of min into sec:"+intosec(1))

function area(l,b){
    return l*b

}
console.log("area of rectangle:"+area(3,4))

function indays(years){
    let days = 0
    let lp = Math.floor(years/4)
    days = years*365+lp
    return days
}
console.log("years into days:"+indays(4))