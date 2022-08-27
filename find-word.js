// findWord(["U>N", "G>A", "R>Y", "H>U", "N>G", "A>R"]) 
// HUNGARY

const findWord = (arr) => {
    if (arr.length === 0) return ''

    let word = arr[0].split('').join('').replace('>', '')
    let firstLetter = word[0]
    let lastLetter = word[1]
    arr.splice(0, 1)
    let i = 0
    console.log(arr, firstLetter, lastLetter)
    while (i < arr.length) {
        const letters = arr[i].split('')
        const c1 = letters[0]
        const c2 = letters[2]
        if (lastLetter === c1) {
            lastLetter = c2
            word = word + c2
            arr.splice(i, 1)
            i = 0
        }

        else if (firstLetter === c2) {
            firstLetter = c1
            word = c1 + word
            arr.splice(i, 1)
            i = 0
        }
        else i += 1
        console.log(i, arr.length, word, firstLetter, lastLetter)
    }
    return word
}

console.log(findWord(["U>N", "G>A", "R>Y", "H>U", "N>G", "A>R"]))