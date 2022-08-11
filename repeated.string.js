const str = 'aba'
const count = 10

//abaabaabaa. Because there are 7 a's, we return 7.


function repeatedString(s, n) {
    if (s === 'a') return n

    let newStr = s
    const len = s.length
    let total = 0

    for (let i = 0; i < len; i++) {
        if (s[i] === 'a')
            total += 1
    }
    let rest = 0
    for (let i = 0; i < n % len; i++) {
        if (s[i] === 'a')
            rest += 1
    }
    return Math.floor(n / len) * total + rest
    /*
    for (let i = 0; i < n - len; i++) {
        newStr += s[i % len]
        if (s[i % len] === 'a')
            total += 1
    }
    return total
    */
}


console.log(repeatedString(str, count))