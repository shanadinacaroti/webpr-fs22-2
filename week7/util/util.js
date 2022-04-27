
// todo: implement the times function
Number.prototype.times = function (callback) {
    console.log(callback);
    return Array.from({length: this}, (el, idx) => callback(idx));

}



