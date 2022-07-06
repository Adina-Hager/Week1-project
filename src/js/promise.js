//1
const myPromise = new Promise((result, reject) => {
    setTimeout(() => {
        let num = Math.floor(Math.random() * 10);
        result(num);
    }, 3000);
})

myPromise.then((resMessage) => {
    console.log((resMessage));
}
)


//2

let myArr=["hello","how","are","you"];
console.log(typeof myArr[1])
function makeAllCaps(arr){
    return new Promise(function(resolve,reject){
        arr.forEach(item => {
            if(typeof item!="string")
           { throw new Error("item not string");}
            else{
                item.forEach(letter=>{
                    letter.toUpperCase();
                })
                
            }
        })
        console.log(arr)
        resolve(arr)
    })
}

function SortWords(arr){
        return new Promise((resolve,reject)=>{
            arr.sort();
            console.log(arr);
            resolve(arr);
    })

}


let myProm=makeAllCaps(myArr);
myProm.then(SortWords)











