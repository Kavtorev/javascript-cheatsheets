// ES8 2017

// padding for strings using padding

// 10 spaces in total with a string
console.log('Turtle'.padStart(10))

//we can leave comma after the very last arg
const fun = (a, b, c, d,) => {
    return a;
}


let obj = {
    username: 'Santa',
    username1: 'Test'
}
// .keys() in Py
Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key])
})
// .values() in Py
Object.values(obj).forEach(value => {
    console.log(value)
})
// .items() in Py
Object.entries(obj).forEach(value=>{
    console.log(value)
})