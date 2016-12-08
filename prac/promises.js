function getPromise() {
    const vettedPromise = new Promise(function(resolve, reject) {
        resolve("some value");
    });
    return vettedPromise;
}

getPromise()
    .then(function(value) {
        console.log(value);
    });