var sec=00
var min=00
var hrs=00
var intervalo
/* Acima foi colocado as variaveis do nosso cronometro, sec (segundo), min (minutos), hrs (horas) e
intervalo como tempo do nosso cronometro (1 segundo) */

function twoDigits(digit){
    if(digit<10){
       return ('0'+digit)
    }else{
        return(digit)
    }
}
/* Acima foi colocado uma função para que aparecesse os 2 digitos de segundos, minutos e horas (00:00:00) */

function iniciar(){
    time()
    intervalo= setInterval(time,1000)
}
/* Acima colocamos uma função para o botão iniciar (o cronometro ja se inicia no 1 segundo) 
e setamos o intervalo em 1000 milésimos (1 segundo) */

function pausar(){
    clearInterval(intervalo)
}
/* Aqui foi colocado uma função para o botão pausar */

function resetar(){
    clearInterval(intervalo)
    sec=0
    min=0
    hrs=0
    document.getElementById('relogio').innerText='00:00:00'
}
/* Aqui foi colocado uma função para o botão resetar, assim que foi clicado ira colocar o 
SEGundo, MINutos e HoRaS no 0 */

function time(){
    sec++
    if(sec==60){
    min++
    sec=00
    if(min==60){
        min=0
        hrs++
    }
    }
    document.getElementById('relogio').innerText=twoDigits(hrs)+':'+twoDigits(min)+':'+twoDigits(sec)
}
/* Aqui foi colocado uma função 'time' para o nosso relógio do cronometro. 
Sempre que depois de 1 segundo (1000) ira adicionar +1 no contador de segundos (sec++) 
Sempre que o contador de segundos chegar a 60, ele ira voltar para o 0 e ira adicionar +1 no contador minutos
Sempre que o contador de minutos chegar a 60, ele ira voltar para 0 e ira adicionar +1 no contador horas*/