var indexOf = function (source, query) {
    for (var i = 0; i < source.length; i++) {
        if (source[i] === query) {
            return i;
        }
    }
    return -1;
};
console.log(indexOf("abcde", "d"));
