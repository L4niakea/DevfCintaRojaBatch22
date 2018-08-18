function fibonacci(){
    var a=0;
    var b=1;
 
    for(i=0; i<10;i++){
        var sucecion=a;
        a=b;
        b=sucecion+b;
 
        console.log(a+" ");
    }
}