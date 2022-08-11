 const data = [278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282, 718, 771, 575, 436]
 const divider = 7

 
//  const data = [1,2,3,4,5,6,7,8,9,10]
//  const divider = 4

 //const data = [1,2,4,5,8,11]
 //const divider = 3
const calc = (k,s) => {
    if (k ===0) return 0
    if (k === 1) return 1
    let result = {}

    for (let i = 0; i < s.length ; i++) {
        const key = s[i] % k
        console.log(s[i], key)
        result[key] = result[key] ? result[key] + 1 : 1
    }
    
    let count = 0

    
    while (Object.keys(result).length > 0){
        const key = Object.keys(result)[0]
        const otherKey = k - parseInt(key)
        if (result[otherKey] && parseInt(key)!==otherKey) {
            if (result[key] > result[otherKey])
                count += result[key]
            else
                count += result[otherKey]

            delete result[key];
            delete result[otherKey];
        }

        else if (parseInt(key) === 0 || parseInt(key) * 2 === k){
            count += 1
            delete result[key];
        }

        else {
            count += result[key]
            delete result[key];
        }
            




    }
    return count
}

console.log(calc( divider, data))