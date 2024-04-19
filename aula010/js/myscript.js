function somar() {
    var tn1 = window.document.getElementById('txtn1')
    var tn2 = window.document.getElementById('txtn2')
    var res = window.document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    res.innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong>${s}</strong>`
}

function subtrair(){
    var ts1 = window.document.getElementById('txts1')
    var ts2 = window.document.getElementById('txts2')
    var ressub = window.document.getElementById('ressub')
    var s1 = Number(ts1.value)
    var s2 = Number(ts2.value)
    var sub = s1 - s2
    ressub.innerHTML = `A subtração entre ${s1} e ${s2} é igual a <strong>${sub}</strong>`
}

function multiplicar(){
    var tm1 = window.document.getElementById('txtm1')
    var tm2 = window.document.getElementById('txtm2')
    var resmult = window.document.getElementById('resmult')
    var tm1 = Number(tm1.value)
    var tm2 = Number(tm2.value)
    var mult = tm1 * tm2
    resmult.innerHTML = `A multiplicação entre ${tm1} e ${tm2} é igual a <strong>${mult}</strong>`
}

function dividir(){
    var td1 = window.document.getElementById('txtd1')
    var td2 = window.document.getElementById('txtd2')
    var resdiv = window.document.getElementById('resdiv')
    var td1 = Number(td1.value)
    var td2 = Number(td2.value)
    if (td2 != 0){
        var div = td1/td2
        resdiv.innerHTML = `A divisão entre ${td1} e ${td2} é igual a <strong>${div}</strong>`
    }else{
        resdiv.innerText = `Não é possivel dividir por zero!`
    }
    
}