let produtos = [];

async function carregarProdutos() {
    try {
        const response = await fetch("db.json");
        const data = await response.json();
        produtos = data.relogios; 
        console.log("Produtos carregados do arquivo JSON:", produtos);
    } catch (error) {
        console.error("Erro ao carregar JSON:", error);
    }
}

function selecionarProduto(id) {

    if (produtos.length === 0) {
        console.log("Produtos ainda não carregados.");
        return; 
    }

    const produto = produtos.find(p => p.id === id);

    if (produto) {

        localStorage.setItem("produtoSelecionado", JSON.stringify(produto));
        console.log("Produto salvo no LocalStorage:", produto);

        window.location.href = "produto.html";
    } else {
        console.log("Produto não encontrado.");
    }
}

function produto1() { selecionarProduto(1); }
function produto2() { selecionarProduto(2); }
function produto3() { selecionarProduto(3); }
function produto4() { selecionarProduto(4); }
function produto5() { selecionarProduto(5); }
function produto6() { selecionarProduto(6); }
function produto7() { selecionarProduto(7); }
function produto8() { selecionarProduto(8); }
function produto9() { selecionarProduto(9); }
function produto10() { selecionarProduto(10); }
function produto11() { selecionarProduto(11); }
function produto12() { selecionarProduto(12); }
function produto13() { selecionarProduto(13); }
function produto14() { selecionarProduto(14); }
function produto15() { selecionarProduto(15); }
carregarProdutos();

