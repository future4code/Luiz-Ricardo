function longestCommon(strs) {
    if (strs.length === 0)
        return "";
    var commonPrefix = "";
    for (var i = 0; i < strs[0].length; i++) {
        var currentChar = strs[0][i];
        var areAllCharsSame = true;
        for (var j = 0; j < strs.length; j++) {
            if (strs[j][i] !== currentChar) {
                return commonPrefix;
            }
        }
        if (currentChar) {
            commonPrefix += currentChar;
        }
    }
    return commonPrefix;
}
console.log(longestCommon(["Palmeiras", "Palermo"]));
console.log(longestCommon(["porco", "gamba"]));
