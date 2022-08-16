/* 
thinking: 

1. 

const X = [5, -5, 5]
const Y = [1, -1, -3]
const colors = "GRG"


const X = [1, 1, -1, -1]
const Y = [1, -1, 1, -1]
const colors = "RGRG"




const X = [4, 0, 2, -2]
const Y = [4, 1, 2, -3]
const colors = "RGRR"




const x1 = [1, 0, 0]
const y1 = [0, 1, -1]
const colors1 = "GGR"
*/
const x1 = [3000, -3000, 4100, -4100, -3000]
const y1 = [5000, -5000, 4100, -4100, 5000]
const colors1 = 'RRGRG'

function solution(X, Y, colors) {
    let arr = []
    let max = 0
    let radius = 0
    let obj = {}
    let last = { r: 0, g: 0 }
    for (let i = 0; i < X.length; i++) {
        arr.push({ radius: X[i] * X[i] + Y[i] * Y[i], color: colors[i] })
    }

    arr.sort((a, b) => a.radius < b.radius ? -1 : 1)
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            radius = arr[i].radius
            last = arr[i].color === 'R' ? { r: 1, g: 0 } : { r: 0, g: 1 }
            obj[radius] = last
        }
        else {
            last = arr[i].color === 'R' ? { r: last.r + 1, g: last.g } : { r: last.r, g: last.g + 1 }
            if (arr[i].radius > radius) {
                // only when radius change, checking max
                if (obj[radius].r === obj[radius].g)
                    max = Math.max(obj[radius].r * 2, max)

                radius = arr[i].radius
                obj[radius] = last
            } else {
                obj[radius] = last
            }


        }
    }
    // need check last element
    if (obj[radius].r === obj[radius].g)
        max = Math.max(obj[radius].r * 2, max)
    return max
}

console.log(solution(x1, y1, colors1))