function echoType(first){
    
    if (first == null){
        console.log(typeof(first))
        console.log(`Parameter is not suitable for printing`)
    }else{
        console.log(typeof(first))
    console.log(first)
    }
    
    }
echoType(null)