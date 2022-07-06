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




