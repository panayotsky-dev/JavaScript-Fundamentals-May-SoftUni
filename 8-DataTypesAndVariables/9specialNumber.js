function specialNumber(n){
    
    for(i = 1;i<=n;i++){        
        let sum = 0;
        let nToString = n.toString()   
               for(j = 0;j<nToString.length;j++)
            {
                sum += Number(nToString[j])
                                
            }
                if(sum == 5 || sum == 7 || sum == 11){
                    console.log(`${i} -> True`)
                }else{
                    console.log(`${i} -> False`)
                }
    }
}specialNumber(20)