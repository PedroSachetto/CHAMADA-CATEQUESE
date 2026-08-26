const criancas = [
    "Arthur Conceição",
    "José Silvestre",
    "Laura Fernanda",
    "Ruam dos Santos"
];

const lista =
    document.getElementById("listaCriancas");

function criarLista() {

    lista.innerHTML = "";

    criancas.forEach((nome, index) => {

        const div =
            document.createElement("div");

        div.classList.add("crianca");

        div.innerHTML = `

                    <label class="item-crianca">

                        <span>
                            ${nome}
                        </span>


                        <input
                            type="checkbox"
                            id="crianca-${index}"
                        >

                    </label>

                `;

        lista.appendChild(div);

    });

}

document
    .getElementById("finalizar")
    .addEventListener("click", () => {

        const vieram = [];

        criancas.forEach((nome, index) => {

            const checkbox =
                document.getElementById(
                    `crianca-${index}`
                );

            if (checkbox.checked) {

                vieram.push(nome);

            }

        });

        const hoje = new Date();
        const data = hoje.toLocaleDateString("pt-BR");

        let mensagem = `CHAMADA DO ENCONTRO

    SÃO JUDAS

    Data: ${data}

    VIERAM:

`;

        if (vieram.length > 0) {

            vieram.forEach(nome => {

                mensagem +=
                    `• ${nome}\n`;

            });

        }

        else {

            mensagem +=
                "Nenhuma criança.\n";

        }

        const mensagemCodificada =
            encodeURIComponent(mensagem);

        const url =
            `https://wa.me/?text=${mensagemCodificada}`;

        window.open(url, "_blank");

    });

criarLista();