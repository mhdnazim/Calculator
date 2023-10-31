
// display 

function display(num){
    output.value +=num;
}

// clear --- del

function clearAll(){
    output.value=''
}

// ans 

function evaluateExp(){
    output.value=eval(output.value)
}

// remove last

function removeLast(){
    currentExp=output.value
    output.value=currentExp.slice(0,-1)
}

function perc(){
    pe=output.value
    output.value=pe/100    
}