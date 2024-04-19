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