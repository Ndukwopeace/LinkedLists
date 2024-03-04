console.log(this)
function whatisthis(){
    return(
        this
    
    ) 
}

function variablesInthis(){
    this.person = 'Nick'
    console.log(this);
}

variablesInthis()
