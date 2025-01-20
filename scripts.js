// Inicializa o carrinho como um array vazio
let carrinho = [];

// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(nomeProduto) {
    // Adiciona o produto ao carrinho
    carrinho.push(nomeProduto);

    // Exibe um alerta de confirmação
    alert(`${nomeProduto} foi adicionado ao seu carrinho!`);

    // Atualiza o número de itens no carrinho
    atualizarCarrinho();
}

// Função para atualizar o número de itens no carrinho
function atualizarCarrinho() {
    // Obtém o número total de itens no carrinho
    const numItens = carrinho.length;

    // Atualiza o texto do botão ou qualquer outro elemento HTML
    const carrinhoTexto = numItens === 1 ? 'item' : 'itens';
    
    // Cria um elemento no cabeçalho ou no rodapé para exibir o número de itens
    const carrinhoElement = document.getElementById('numero-carrinho');
    if (carrinhoElement) {
        carrinhoElement.textContent = `Carrinho: ${numItens} ${carrinhoTexto}`;
    }
}

// Função para exibir uma mensagem de agradecimento
function exibirAgradecimento() {
    // Exibe uma mensagem após a finalização da compra (simulada)
    alert("Obrigado por adicionar itens ao seu carrinho! Em breve você receberá as instruções para finalizar sua compra.");
}

// Função para limpar o carrinho
function limparCarrinho() {
    carrinho = [];
    atualizarCarrinho();
    alert("Seu carrinho foi limpo.");
}

// Adiciona eventos ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    // Adiciona o evento de clicar nos botões "Adicionar ao Carrinho"
    const buttons = document.querySelectorAll(".wish-item button");
    buttons.forEach(button => {
        button.addEventListener("click", (event) => {
            const nomeProduto = event.target.closest(".wish-item").querySelector("h3").textContent;
            adicionarAoCarrinho(nomeProduto);
        });
    });

    // Exemplo de evento de finalizar compra
    const finalizarCompraButton = document.getElementById("finalizar-compra");
    if (finalizarCompraButton) {
        finalizarCompraButton.addEventListener("click", exibirAgradecimento);
    }

    // Exemplo de evento para limpar o carrinho
    const limparCarrinhoButton = document.getElementById("limpar-carrinho");
    if (limparCarrinhoButton) {
        limparCarrinhoButton.addEventListener("click", limparCarrinho);
    }
});
