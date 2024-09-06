function gerarNumerosAleatorios(quantidade, minimo, maximo) {
  // Cria um array vazio para armazenar os números aleatórios
  let numeros = [];
  // Continua gerando números até que o array tenha a quantidade desejada
  while (numeros.length < quantidade) {
    // Gera um número aleatório dentro do intervalo especificado
    const numeroAleatorio = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    // Verifica se o número já existe no array para evitar duplicatas
    if (!numeros.includes(numeroAleatorio)) {
      numeros.push(numeroAleatorio); // Adiciona o número ao array
    }
  }
  // Retorna o array com os números aleatórios gerados
  return numeros;
}

window.onload = function () {
  // Seleciona a seção onde os exemplos serão exibidos
  let section = document.getElementById('conteudo_exemplos');
  // Inicializa uma string vazia para construir o HTML dos exemplos
  let exemplo = '';
  // Gera 4 números aleatórios entre 1 e o tamanho do array de dados
  const numerosAleatorios = gerarNumerosAleatorios(4, 1, dados.length);
  // Itera sobre os números aleatórios e encontra os dados correspondentes
  numerosAleatorios.forEach(numero => {
    for (let dado of dados) {
      if (numero == dado.id) {
        // Constrói o HTML para cada exemplo, incluindo imagem, título, continente, curiosidade e link
        exemplo += `
          <div class="conteudo_exemplos_exemplo">
            </div>
        `;
      }
    }
  });
  // Atualiza o conteúdo da seção com o HTML gerado
  section.innerHTML = exemplo;
}

function pesquisar() {
  // Seleciona as seções onde os resultados da pesquisa serão exibidos
  let section = document.getElementById('conteudo_exemplos');
  let section2 = document.getElementById('conteudo_pesquisa');
  // Obtém o valor digitado no campo de pesquisa
  let campoPesquisa = document.getElementById('campo_pesquisa').value;
  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let resultado = '';
  // Itera sobre os dados e verifica se o nome ou continente contém a palavra pesquisada
  for (let dado of dados) {
    if (nome.includes(campoPesquisa) || continente.includes(campoPesquisa)) {
      // Constrói o HTML para cada resultado da pesquisa
      resultado += `
        <div class="conteudo_pesquisa_pesquisado">
          </div>
      `;
    }
  }
  // Verifica se algum resultado foi encontrado e atualiza o conteúdo das seções
  if (!resultado) {
    resultado = '<p class="busca_falha">Nada foi encontrado.</p>';
  }
  section2.innerHTML = resultado;
  section.style.display = 'none';
  section2.style.display = 'grid';
}
