function jumpingOnClouds(c) {
    let count = 0
    let i = 0
    while (i < c.length - 1) {

        if (c[i + 2] === 0) {
            i = i + 2
        } else {
            i = i + 1
        }
        count += 1
        console.log(i, count)
    }
    return count
}

const arr = [0, 0, 1, 0, 0, 1, 0]
console.log(jumpingOnClouds(arr))