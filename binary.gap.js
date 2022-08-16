const num = 51712
// 1100101000000000 => 2
// 100101 => 2
//111111 => 0
//000000 => 0
const binaryGap = (N) => {
    const b = N.toString(2);

    let max = 0

    let str = b
    while (str.length > 0) {

        let start = str.indexOf('1')
        if (start < 0)
            return max
        let finded = str.indexOf('0', start + 1)
        if (finded < 0)
            return max
        let end = str.indexOf('1', finded + 1)
        if (end < 0)
            return max

        if (end - (finded - 1) - 1 > max)
            max = end - (finded - 1) - 1
        str = str.substring(end === str.length - 1 ? end + 1 : end)
    }
    return max
}


console.log(num, num.toString(2), binaryGap(num))