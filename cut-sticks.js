const   sticks = [1, 13, 3, 8, 14, 9, 4, 4] 
// => [6, 4, 2, 1]
const cut = (arr) =>{
    if (!arr || arr.length ===0) return []
    if (arr.length ===1) return [1]
    arr.sort((a,b)=>a>b?1:-1)
    let total = arr.length
    let result = [total] 
    let min = arr[0]
    let count = 0
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === min){
            count += 1
        }
        else {
            total = total - count
            result.push(total)
            count = 1
            min = arr[i]
        }
        
    }
    return result
}

console.log(cut(sticks))