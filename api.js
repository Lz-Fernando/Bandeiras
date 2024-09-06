async function buscarPaises() {
    try {
      const resposta = await fetch('https://restcountries.com/v3.1/all');
      if (!resposta.ok) {
        throw new Error('Erro ao buscar dados dos países');
      }
      
      const paises = await resposta.json();
      return paises.map(pais => pais.name.common);
    } catch (erro) {
      console.error('Erro:', erro);
      return [];
    }
  }
  
  buscarPaises().then(paises => console.log(paises));
  