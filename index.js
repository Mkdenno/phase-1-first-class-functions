
function receivesAFunction(callback){
    return callback()
}
 function hello(){
     return hello;
 }
function returnsANamedFunction(){
    return function hello(){
    }
 
}

function returnsAnAnonymousFunction(){
    return function (){
        return "new label"
    }

}