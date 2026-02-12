function fizzBuzzProblem(num){
    for(let i=1;i<=num;i++){
      let output='';
      if(i%3===0) output+='fizz';
      if(i%5===0) output+='buzz';

      console.log(output || i)
    }
    return
}


let num=15;
fizzBuzzProblem(num)