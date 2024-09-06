function gerarNumerosAleatorios (quantidade, minimo, maximo) {
    let numeros = [];
    while (numeros.length < quantidade) {
        const numeroAleatorio = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
        if(!numeros.includes(numeroAleatorio)) {
            numeros.push(numeroAleatorio);
        }
    }
    return numeros;
}

window.onload = function () {
    let section = document.getElementById('conteudo_exemplos');
    let exemplo = '';
    const numerosAleatorios = gerarNumerosAleatorios(4, 1, dados.length);
    console.log(numerosAleatorios)

    numerosAleatorios.forEach(numero => {
        for (let dado of dados) {
            if (numero == dado.id){
                exemplo += `
                    <div class="conteudo_exemplos_exemplo">
                        <img class="conteudo_exemplos_exemplo_imagem" src="${dado.imagem}" alt="Bandeira_do_${dado.nome}">
                        <div class="conteudo_exemplos_exemplo_info">
                            <h3 class="conteudo_exemplos_exemplo_titulo">${dado.nome}</h3>
                            <p>${dado.continente}</p>
                            <p>${dado.curiosidade}</p>
                            <a class="conteudo_exemplos_exemplo_descricao" href="${dado.link}" target="_blank">Saiba mais.</a>
                        </div>
                    </div>
                `
            } 
        }
    })
    section.innerHTML = exemplo;
}

function pesquisar() {
    let section = document.getElementById('conteudo_exemplos');
    let section2 = document.getElementById('conteudo_pesquisa');
    let campoPesquisa = document.getElementById('campo_pesquisa').value;

    let resultado = '';
    let nome = '';
    let continente = '';
    let curiosidade = '';

    if (!campoPesquisa) {
        section2.innerHTML = `<p class="busca_falha">Você precisa digitar algum local.</p>`;
        section.style.display = 'none';
        section2.style.display = 'grid';
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    for (let dado of dados) {
        nome = dado.nome.toLowerCase();
        continente = dado.continente.toLowerCase();

        if (nome.includes(campoPesquisa) || continente.includes(campoPesquisa)) {
            resultado += `
                <div class="conteudo_pesquisa_pesquisado">
                    <img class="conteudo_pesquisa_pesquisado_imagem" src="${dado.imagem}" alt="Bandeira_do_${dado.nome}">
                    <div class="conteudo_pesquisa_pesquisado_info">
                        <h3 class="conteudo_pesquisa_pesquisado_titulo">${dado.nome}</h3>
                        <p>${dado.continente}</p>
                        <p>${dado.curiosidade}</p>
                        <a class="conteudo_pesquisa_pesquisado_descricao" href="${dado.link}" target="_blank">Saiba mais.</a>
                    </div>
                </div>
            `
        }
    }

    if(!resultado) {
        resultado = '<p class="busca_falha">Nada foi encontrado.</p>'
    }

    section2.innerHTML = resultado;
    section.style.display = 'none';
    section2.style.display = 'grid';
}
