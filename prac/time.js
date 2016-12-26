var obj = {
    name: 'mani',
    printF() {
        console.log(typeof arguments);
        console.log(arguments);
    }
};

obj.printF(1, 2, 3);