function insert (num){
    msg = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML= msg+num  
}
function clean(){
    document.getElementById('resultado').innerHTML=''
}
function back(){
    resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.substring(0,resultado.length - 1)

}
function calcular(){
    resultado = document.getElementById('resultado').innerHTML
    if(resultado){
        document.getElementById('resultado').innerHTML= eval(resultado)
    }
    else{
        document.getElementById('resultado').innerHTML='0'
    }
}