let num = document.getElementById('txtnum')
let tab = document.getElementById('selvetor')
let res = document.getElementById('res')
let vetor = []

function adicionar() {
    let n = Number(num.value)
    let pos = vetor.indexOf(n)
    res.innerHTML = ''
    
        
    if (n.length == 0 || n < 1 || n > 100 || pos !== -1) {
        window.alert('Insira um valor válido ou que não esteja na lista!')
        num.value = ''
        num.focus()
    } else {
        let item = document.createElement('option')
        vetor.push(n)
        item.text = `O valor ${n} foi adicionado.`
        tab.appendChild(item)
        num.value = ''
        num.focus()
    }
}
function finalizar() {
    let maior = Math.max.apply(null, vetor)
    let menor = Math.min.apply(null, vetor)
    let soma = 0
    
    if (vetor.length == 0) {
        window.alert('Você precisa inserir pelo menos um valor!')
        num.focus()
    } else {
        for (let pos in vetor) {
            soma += vetor[pos]
        } 
        let media = soma / vetor.length
        
        res.innerHTML = ''
        if (vetor.length == 1) {
            res.innerHTML = '<p>foi cadastrado apenas um número no total.</p>'
        } else {
            res.innerHTML = `<p>foram cadastrados ${vetor.length} números no total.</p>`
        }res.innerHTML += `<p>O maior valor cadastrado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor cadastrado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma de todos os valores cadastrados é ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores cadastrados é ${media}.</p>`
    }
}