var agora = new Date()
var hora = agora.getHours
console.log('Agora são'+hora+'horas')
if(horas<12 && horas >7){
    console.log('Bom dia')
}else if(horas >12){
    console.log('Boa tarde')
}else if(horas>18 && horas<7){
    console.log('Boa noite')
}