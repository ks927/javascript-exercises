var repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR';
    } else {
        let str = ''
        let i = 0;
        while(i < num) {
        str += string;
        i++
        }
        return str
    }
}

module.exports = repeatString
