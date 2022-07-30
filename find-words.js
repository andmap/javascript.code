const find =(str, word)=>{
    let matched = 0
    let copy = word
    for (let i = 0; i < str.length; i++){
      const idx = copy.indexOf(str[i])
      if (idx > -1){
        matched += 1
        copy = copy.substring(0, idx) + copy.substring(idx+1)
      }
      if (matched === word.length)
        return word
    }
    return ''
  }
  
  const findInArray = (str, words)=>{
    for (let i =0; i < words.length; i++){
      const result = find(str, words[i])
      if (result)
      return result
    }
    return '-'
  }