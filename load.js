window.onload = function() {

    fetch(`https://economia.awesomeapi.com.br/last/USD-BRL`).then(resposta => {
        return resposta.json();
    }).then(economia => {


        const formatarValor = (valor, moeda) => {
            return new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: moeda,
                minimumFractionDigits: 2
            }).format(valor);
        };

        let produtoSelecionado = localStorage.getItem("produtoSelecionado");

        if (produtoSelecionado) {

            produtoSelecionado = JSON.parse(produtoSelecionado);

            document.getElementById("fotoProduto").src = produtoSelecionado.imagem;
            document.getElementById("marcaProduto").textContent = produtoSelecionado.marca;
            document.getElementById("nomeProduto").textContent = produtoSelecionado.modelo;




            const valorDolarFormatado = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 2
            }).format(produtoSelecionado.preco_usd);
            document.getElementById("valorDolar").textContent = valorDolarFormatado;



            const valorReal = produtoSelecionado.preco_usd * economia.USDBRL.bid;
            const valorRealFormatado = formatarValor(valorReal, 'BRL');
            document.getElementById("valorReal").textContent = valorRealFormatado;

            document.getElementById("referenciaProduto").textContent = produtoSelecionado.referencia;
        } else {
            console.log("Nenhum produto selecionado.");
        }
    }).catch(error => {
        console.log("Erro ao obter a taxa de câmbio:", error);
    });
};
