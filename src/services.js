export function soma(a, b){
    let conta = a + b
    return conta
}

export function dobro(numero){
    let cont = numero * 2
    return cont
}

export function media(num1, num2, num3) {
    let x = (num1 + num2 + num3) / 3;
    return x;
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


export function corPrimaria(cor) {
    cor = cor.toLowerCase();
    return cor == 'azul' || cor == 'amarelo'|| cor == 'vermelho'
}

export function ingressoCinema(qtdInteiras, qtdMeias, nacionalidade, diaSemana){
    let valorInteira = 28.5;
    let valorMeia = valorInteira / 2;
    let resultado = 0;
    if(nacionalidade == "brasileira"){
        resultado = (qtdInteiras + qtdMeias) * 5;
    }
    else if(diaSemana == 'quarta')
    {
        resultado = (qtdInteiras + qtdMeias ) * valorMeia;
    }
    else{
        resultado = (qtdInteiras * valorInteira) + (qtdMeias * valorMeia);
    }
    return resultado
} 


