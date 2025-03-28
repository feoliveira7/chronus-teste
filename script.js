function mascaraCep(event) {
    let cep = event.target.value;


    cep = cep.replace(/\D/g, "");


    if (cep.length <= 5) {
        cep = cep.replace(/^(\d{1,5})/, "$1");
    } else {
        cep = cep.replace(/^(\d{5})(\d{1,3})/, "$1-$2");
    }


    event.target.value = cep;
}

const cepValido = (cep) => cep.replace(/\D/g, "").length === 8;

// calcular o frete
const calcularFrete = (estado, cidade) => {
    if (cidade === "Mogi das Cruzes") {
        return 0;
    }
    
    const fretes = {
        SP: 500.00,
        RJ: 1_500.00,
        MG: 1_200.00,
        ES: 1_100.00,
        RS: 1_500.00,
        SC: 1_300.00,
        PR: 1_200.00,
        BA: 1_800.00,
        PE: 2_000.00,
        CE: 2_200.00,
        AM: 3_500.00,
        PA: 3_000.00,
        MA: 2_800.00,
        GO: 2_500.00,
        DF: 2_800.00,
        MT: 3_000.00,
        MS: 2_800.00,
        TO: 3_200.00,
        PI: 3_100.00,
        RN: 3_500.00,
        AL: 3_600.00,
        SE: 3_200.00,
        PB: 3_300.00,
        RO: 3_800.00,
        AC: 4_000.00,
        RR: 4_500.00,
        AP: 4_200.00
    };
    return fretes[estado] || 0;
};

//pesquisar o CEP
const pesquisarCep = async () => {
    const cep = document.getElementById("inputCep").value;
    if (cepValido(cep)) {
        const url = `https://viacep.com.br/ws/${cep}/json/`;
        try {
            const resposta = await fetch(url);
            const endereco = await resposta.json();
            console.log(`CEP: ${cep}`);
            console.log(`Rua: ${endereco.logradouro}`);
            console.log(`Bairro: ${endereco.bairro}`);
            console.log(`Cidade: ${endereco.localidade}`);
            console.log(`Estado: ${endereco.uf}`);
            
            const frete = calcularFrete(endereco.uf, endereco.localidade);
            console.log(`Frete para ${endereco.localidade} - ${endereco.uf}: R$ ${frete.toFixed(2)}`);

            
            const adressText = `${endereco.logradouro}, ${endereco.bairro}, ${endereco.localidade} - ${endereco.uf}`;
            document.getElementById("adress").textContent = adressText;

            
            const freteText = `<strong>Entrega padrão:</strong> R$ ${frete.toFixed(2)}`;
            document.getElementById("freteResult").innerHTML = freteText;
        } catch (erro) {
            console.error("Erro ao buscar CEP:", erro);
        }
    } else {
        console.log("CEP inválido. Digite um CEP com 8 dígitos.");
    }
};


function calcularCep() {
    pesquisarCep();
}
