const getFunctions = function() {
    const myPromise = new Promise(function(resolve, reject) {
        setTimeout(resolve("promise resolved"), 13000);
    });
    return myPromise;
};

getFunctions().then(function(resolve) {
    console.log(resolve);
});