 const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json';

 async function visualizarDadosGlobais(){
    const res =  await fetch(url);
    const secao = document.querySelector('.graficos-container')
    const dados = await res.json();
    const totalPessoasMundo  = dados.total_pessoas_mundo
    const totalPessoasConectadas = dados.total_pessoas_conectadas
    const tempoMedio = dados.tempo_medio
    console.log(dados);
    const paragrafo = document.createElement('p');
    paragrafo.classList.add('graficos-texto');

    paragrafo.innerHTML = `Você sabia que o mundo tem ${totalPessoasMundo} de habitantes e destes ${totalPessoasConectadas} estão conectadas a alguma rede social e ficam em média ${tempoMedio} conectadas.`
    secao.appendChild(paragrafo)
 }

 visualizarDadosGlobais();

 