const nomes = ["Carlos Alberto","Humberto","Athosberto","Adosberto","Adelberto","Adelbarto","Alberto","Alberton","Adalbino","Adalbeto","Adalbrito","Ademilberto","Anarberto","Aldalberto","Aurelberto","Arnalberto","Adalperto","Andalberto","Adoberto","Adelberton","Adelberaldo","Abelberto","Aldoberto","Abelardo","Adalblerto","Adelbrotto","Adenisberto","Adalverso","Adalbot","Adelbagre","Adalvandro","Adalbórnio","Adalbiscoito","Adalbrey"];
const adalberto = ["A","d", "a", "l", "b", "e", "r", "t", "o"];
const btnGerar = document.getElementById("generate-name");
const btnLimpar = document.getElementById("clear-name");

const gerarNome = () => {
    const indiceNome = Math.floor(Math.random() * nomes.length);
    const nomeGerado = nomes[indiceNome];
    const nomeEmbaralhado = adalberto.sort(() => Math.random() - 0.5).join("");
    document.getElementById("name").innerText = nomeGerado;
    document.getElementById("nameEmbaralhado").innerText = nomeEmbaralhado;
}
const limparNome = () => {
    document.getElementById("name").innerText = "";
    document.getElementById("nameEmbaralhado").innerText = "";
}
btnGerar.addEventListener("click", gerarNome);
btnLimpar.addEventListener("click", limparNome);
