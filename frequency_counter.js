function frequencyCounter(inp){
    let map=new Map();

    for(let i=0;i<inp.length;i++){
        map.set(inp[i],(map.get(inp[i]) || 0 )+1)
    }
   map.forEach((value,key)=>{
    console.log(`${key} : ${value}`)
   })
}


let inp=[1, 2, 2, 3, 3, 3, 4]
frequencyCounter(inp)