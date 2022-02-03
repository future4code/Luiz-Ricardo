function checkParenthesis(str) {
    var stack = [];
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        if (char === "(" || char === "[" || char === "{") {
            stack.push(char);
        }
        else {
            var lastOpeningChar = stack.pop();
            if (!lastOpeningChar) {
                return false;
            }
            else if ((lastOpeningChar === "(" && char !== ")") ||
                (lastOpeningChar === "[" && char !== "]") ||
                (lastOpeningChar === "{" && char !== "}")) {
                return false;
            }
        }
    }
    if (stack.length > 0) {
        return false;
    }
    return true;
}
console.log(checkParenthesis("()"));
console.log(checkParenthesis("(]"));
console.log(checkParenthesis("({})"));
console.log(checkParenthesis("([})"));
