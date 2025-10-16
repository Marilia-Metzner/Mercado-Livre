const produtos = document.getElementById("produtos");

const image = ["img/roupa (1).jfif", "img/roupa (2).jfif", "img/roupa (3).jfif", "img/roupa (4).jfif", "img/roupa (5).jfif", "img/roupa (6).jfif", "img/roupa (7).jfif"];
const azul = ["OFERTA DO DIA"];
const mensagens = ["Blusa de lã branca", "Blusa manga longa branca com borboletas", "Saia branca", "Vestido social preto", "Vestido manga longa branca", "Vestido manga longa preta e branca", "Vestido branco"];
const preco = ["R$150,45", "R$50", "R$100,95", "R$350,00", "R$160,90", "R$300,30", "R$250,90"];
const verde = ["Chegará grátis amanhã"];

for (let i = 0; i < image.length; i++) {
    produtos.innerHTML += `
    <div class="conteudo1">
        <div class="espacoImg">
            <img class="img1" src="${image[i]}"
        </div>
        <div class="espaco1 azul">
            <p>${azul}</p>
        </div>
        <div class="espaco1">
            <p>${mensagens[i]}</p>
        </div>
        <div class="espaco1 preco">
            <h3>${preco[i]}</h3>
        </div>
        <div class="verdeC">
            <p class="verde">${verde}</p>
            <img src="img/full.png">
        </div>
    </div>
    `
}