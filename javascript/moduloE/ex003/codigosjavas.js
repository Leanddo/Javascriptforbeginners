function contar() {
    let inicio = document.getElementById('1')
    let fim = document.getElementById('2')
    let passo = document.getElementById('3')
    let res=document.getElementById('res')

if(inicio.value.length==0||passo.value.length==0||passo.value.length==0){
    window.alert('[ERROR] faltam dados')
}else{
    res.innerHTML='contando: '
    let ini=Number(inicio.value)
    let f=Number(fim.value)
    let p=Number(passo.value)
    for (let i = ini; i <= f; i += p){
        res.innerHTML+= i+' 👉'
    }
    res.innerHTML+='🏁'

}
}