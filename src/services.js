export function soma(a, b){
    let conta = a + b
    return conta
}

export function dobro(numero){
    let cont = numero * 2
    return cont
}

export function temp(numero){
    let msg= '';
    if(numero >= 38)
    {
        msg= 'com febre';
    }
    else if(numero <= 34){
        msg = 'estado ipotérmico'
    }
    else{
        msg = 'Normal';
    }
    return msg
}

export function tabuada(numero) {
    let a = [numero];
    for(let i = 0; i <= 10 ; i++){
        a[i] = i * numero;
    }
    return a;
}   


export function corPrimaria(cor){
    let a = false
    if(cor == "azul" || cor == "vermelho" || cor == "amarelo") {
        a = true
    }
    return a;
}

export function ingressoCinema(qtdInteiras, qtdMeias, nacionalidade, diaSemana){
    let resultado = 0;
    if(diaSemana == 'quarta')
    {
        resultado = qtdInteiras + qtdMeias * (28.5 / 2)
    }
    else if(nacionalidade = "brasileira"){
        resultado = qtdInteiras + qtdMeias * 5;
    }
    else{
        resultado = qtdInteiras * 28.5;
        resultado += qtdMeias * (28.5 / 2);
    }
    return resultado
} 


export function media(num1, num2, num3) {
    let x = (num1 + num2 + num3) / 3;
    return x;
}