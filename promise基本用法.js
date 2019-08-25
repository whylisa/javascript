const promise = new Promise(function(resolve, reject){
    if(/**异步操作成功 */){
        resolve(value)
    }else {
        reject(error)
    }
})
let promise = new Promise(function(resolve,reject) {
    console.log("Promise")
    resolve()
});
promise.then(funciton(){
    console.log("resolve.")
})
const getJson = function (url) {
    const promise = new Promise(funciton(resolve,reject){
        const handler = function() {
            if(this.readyState != 4){
                return 
            }
            if(this.status === 200) {
                resolve(this.response)
            }else{
                reject(new Error(this.statusText))
            }
        };
        const client = new XMLHttpRequest();
        client.open('GET',url)
        client.onreadystatechange = handler;
        client.responseType = 'json'
        client.setRequestHeader('Accept','applicaiton/json')
        client.send()
    })
    return promise
}

getJson('/post.json').then(function(json){
    console.log('contents:'+ json)
},function(error){
    console.log('error',error)
})