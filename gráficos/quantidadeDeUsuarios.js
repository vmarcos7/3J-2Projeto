async function quantidadeDeUsuarios (){
const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
const resultado = await fetch(url);
const dados = await resultado.json();
const nomeDasRedes = Object.keys(dados);
const quantidadeDeUsuarios = Object.values(dados);

const infos = [
    {

        x:nomeDasRedes,
        y:quantidadeDeUsuarios,
        type: 'bar'
    }
]
}