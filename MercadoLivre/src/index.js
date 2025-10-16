const texto = document.getElementById("texto");

const titulo = ["Entre na sua conta", "Insira sua localização", "Meios de pagamento", "Menos de R$100", "Mais vendidos", "Compra garantida"];
const imagens = ["src/img/registration-da.svg", "src/img/location.svg", "src/img/payment-methods.svg", "src/img/mlb-low-price-product.svg", "src/img/top-sale.svg", "src/img/buy-protected.svg"];
const mensagem = ["Aproveite ofertas para comprar tudo que quiser", "Confira os custos e prazos de entrega", "Pague suas compras com rapidez e segurança", "Confira produtos com preços baixos", "Explore os produtos que são tendência", "Você pode devolver sua compra grátis"];
const botao = ["Entre na sua conta", "Informar localização", "Mostrar Meios", "Mostrar produtos","Ir para mais vendidos" , "Como funciona"];

for (let i = 0; i < titulo.length; i++) {
    texto.innerHTML += `
    <div class="conteudo">
        <div class="espaco">
            <p>${titulo[i]}</p>
        </div>
        <div class="espaco">
            <img class="img" src="${imagens[i]}"
        </div>
        <div class="espaco">
            <p>${mensagem[i]}</p>
        </div>
        <div class="botao">
            <button>${botao[i]}</button>
        </div>
    </div>
    `
}