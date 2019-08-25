function fn(resolve) {
    setTimeout(function() {
        resolve(123)
    },3000)
}
let p0 = new Promise(fn)
let p1 = Promise.resolve(p0)