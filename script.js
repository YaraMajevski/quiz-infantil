// === LISTA DE TODAS AS RODADAS DO JOGO ===
const rodadas = [
    {
        titulo: "NOTEBOOK! 💻",
        opcoes: [
            { img: "img/notebook/notebook_rico_1.png", status: "rico" },
            { img: "img/notebook/notebook_rico_2.png", status: "rico" },
            { img: "img/notebook/notebook_rico_3.png", status: "rico" },
            { img: "img/notebook/notebook_rico_4.png", status: "rico" },
            { img: "img/notebook/notebook_pobre_1.png", status: "pobre" },
            { img: "img/notebook/notebook_pobre_2.png", status: "pobre" }
        ]
    },
    {
        titulo: "FONE DE OUVIDO! 🎧",
        opcoes: [
            { img: "img/headset/headset_rico_1.png", status: "rico" },
            { img: "img/headset/headset_rico_2.png", status: "rico" },
            { img: "img/headset/headset_rico_3.png", status: "rico" },
            { img: "img/headset/headset_rico_4.png", status: "rico" },
            { img: "img/headset/headset_pobre_1.png", status: "pobre" },
            { img: "img/headset/headset_pobre_2.png", status: "pobre" }
        ]
    },
    {
        titulo: "BONECA! 🧸",
        opcoes: [
            { img: "img/boneca/boneca_rico_1.png", status: "rico" },
            { img: "img/boneca/boneca_rico_2.png", status: "rico" },
            { img: "img/boneca/boneca_rico_3.png", status: "rico" },
            { img: "img/boneca/boneca_rico_4.png", status: "rico" },
            { img: "img/boneca/boneca_pobre_1.png", status: "pobre" },
            { img: "img/boneca/boneca_pobre_2.png", status: "pobre" }
        ]
    },
    {
        titulo: "CASA! 🏡",
        opcoes: [
            { img: "img/casa/casa_rico_1.png", status: "rico" },
            { img: "img/casa/casa_rico_2.png", status: "rico" },
            { img: "img/casa/casa_rico_3.png", status: "rico" },
            { img: "img/casa/casa_rico_4.png", status: "rico" },
            { img: "img/casa/casa_pobre_1.png", status: "pobre" },
            { img: "img/casa/casa_pobre_2.png", status: "pobre" }
        ]
    },
    {
        titulo: "SALA! 🛋️",
        opcoes: [
            { img: "img/sala/sala_rico_1.jpg", status: "rico" },
            { img: "img/sala/sala_rico_2.jpg", status: "rico" },
            { img: "img/sala/sala_rico_3.jpg", status: "rico" },
            { img: "img/sala/sala_rico_4.jpg", status: "rico" },
            { img: "img/sala/sala_pobre_1.png", status: "pobre" },
            { img: "img/sala/sala_pobre_2.jpg", status: "pobre" }
        ]
    },
    {
        titulo: "PRAIA! 🏖️",
        opcoes: [
            { img: "img/praia/praia_rico_1.png", status: "rico" },
            { img: "img/praia/praia_rico_2.png", status: "rico" },
            { img: "img/praia/praia_rico_3.png", status: "rico" },
            { img: "img/praia/praia_rico_4.png", status: "rico" },
            { img: "img/praia/praia_pobre_1.png", status: "pobre" },
            { img: "img/praia/praia_pobre_2.png", status: "pobre" }
        ]
    },
    {
        titulo: "CIDADE! 🏙️",
        opcoes: [
            { img: "img/cidade/cidade_rico_1.png", status: "rico" },
            { img: "img/cidade/cidade_rico_2.png", status: "rico" },
            { img: "img/cidade/cidade_rico_3.png", status: "rico" },
            { img: "img/cidade/cidade_rico_4.png", status: "rico" },
            { img: "img/cidade/cidade_pobre_1.png", status: "pobre" },
            { img: "img/cidade/cidade_pobre_2.png", status: "pobre" }
        ]
    },
    {
        titulo: "QUARTO! 🛏️",
        opcoes: [
            { img: "img/quarto/quarto_rico_1.png", status: "rico" },
            { img: "img/quarto/quarto_rico_2.png", status: "rico" },
            { img: "img/quarto/quarto_rico_3.png", status: "rico" },
            { img: "img/quarto/quarto_rico_4.png", status: "rico" },
            { img: "img/quarto/quarto_pobre_1.png", status: "pobre" },
            { img: "img/quarto/quarto_pobre_2.png", status: "pobre" }
        ]
    },
    {
        titulo: "CARRO! 🚗",
        opcoes: [
            { img: "img/carro/carro_rico_1.png", status: "rico" },
            { img: "img/carro/carro_rico_2.png", status: "rico" },
            { img: "img/carro/carro_rico_3.png", status: "rico" },
            { img: "img/carro/carro_rico_4.png", status: "rico" },
            { img: "img/carro/carro_pobre_1.png", status: "pobre" },
            { img: "img/carro/carro_pobre_2.png", status: "pobre" }
        ]
    },
    {
        titulo: "CELULAR! 📱",
        opcoes: [
            { img: "img/celular/celular_rico_1.png", status: "rico" },
            { img: "img/celular/celular_rico_2.png", status: "rico" },
            { img: "img/celular/celular_rico_3.png", status: "rico" },
            { img: "img/celular/celular_rico_4.png", status: "rico" },
            { img: "img/celular/celular_pobre_1.png", status: "pobre" },
            { img: "img/celular/celular_pobre_2.png", status: "pobre" }
        ]
    },
    {
        titulo: "COLAR! 💎",
        opcoes: [
            { img: "img/colar/colar_rico_1.png", status: "rico" },
            { img: "img/colar/colar_rico_2.png", status: "rico" },
            { img: "img/colar/colar_rico_3.png", status: "rico" },
            { img: "img/colar/colar_rico_4.png", status: "rico" },
            { img: "img/colar/colar_pobre_1.png", status: "pobre" },
            { img: "img/colar/colar_pobre_2.png", status: "pobre" }
        ]
    },
    {
        titulo: "ANEL! 💍",
        opcoes: [
            { img: "img/anel/anel_rico_1.png", status: "rico" },
            { img: "img/anel/anel_rico_2.png", status: "rico" },
            { img: "img/anel/anel_rico_3.png", status: "rico" },
            { img: "img/anel/anel_rico_4.png", status: "rico" },
            { img: "img/anel/anel_pobre_1.png", status: "pobre" },
            { img: "img/anel/anel_pobre_2.png", status: "pobre" }
        ]
    },
    {
        titulo: "MOCHILA! 🎒",
        opcoes: [
            { img: "img/mochila/mochila_rico_1.png", status: "rico" },
            { img: "img/mochila/mochila_rico_2.png", status: "rico" },
            { img: "img/mochila/mochila_rico_3.png", status: "rico" },
            { img: "img/mochila/mochila_rico_4.png", status: "rico" },
            { img: "img/mochila/mochila_pobre_1.png", status: "pobre" },
            { img: "img/mochila/mochila_pobre_2.png", status: "pobre" }
        ]
    },
    {
        titulo: "VESTIDOS! 👗",
        opcoes: [
            { img: "img/vestido/vestido_rico_1.png", status: "rico" },
            { img: "img/vestido/vestido_rico_2.png", status: "rico" },
            { img: "img/vestido/vestido_rico_3.png", status: "rico" },
            { img: "img/vestido/vestido_rico_4.png", status: "rico" },
            { img: "img/vestido/vestido_pobre_1.png", status: "pobre" },
            { img: "img/vestido/vestido_pobre_2.png", status: "pobre" }
        ]
    },
    {
        titulo: "UNHA! 💅",
        opcoes: [
            { img: "img/unha/unha_rico_1.png", status: "rico" },
            { img: "img/unha/unha_rico_2.png", status: "rico" },
            { img: "img/unha/unha_rico_3.png", status: "rico" },
            { img: "img/unha/unha_rico_4.png", status: "rico" },
            { img: "img/unha/unha_pobre_1.png", status: "pobre" },
            { img: "img/unha/unha_pobre_2.png", status: "pobre" }
        ]
    },
    {
        titulo: "MOTO! 🏍️",
        opcoes: [
            { img: "img/moto/moto_rico_1.png", status: "rico" },
            { img: "img/moto/moto_rico_2.png", status: "rico" },
            { img: "img/moto/moto_rico_3.png", status: "rico" },
            { img: "img/moto/moto_rico_4.png", status: "rico" },
            { img: "img/moto/moto_pobre_1.png", status: "pobre" },
            { img: "img/moto/moto_pobre_2.png", status: "pobre" }
        ]
    },
    {
        titulo: "PARQUE DE DIVERSÕES! 🎡",
        opcoes: [
            { img: "img/parque/parque_rico_1.png", status: "rico" },
            { img: "img/parque/parque_rico_2.png", status: "rico" },
            { img: "img/parque/parque_rico_3.png", status: "rico" },
            { img: "img/parque/parque_rico_4.png", status: "rico" },
            { img: "img/parque/parque_pobre_1.png", status: "pobre" },
            { img: "img/parque/parque_pobre_2.png", status: "pobre" }
        ]
    }
];

// Fala o nome da cor do presente quando o mouse passa por cima
const nomesDasCores = {
    azul: 'Azul',
    rosa: 'Rosa',
    dourado: 'Dourado',
    branco: 'Branco',
    preto: 'Preto',
    arcoiris: 'Arco-íris'
};

let vozEscolhida = null;

function escolherVozFeminina() {
    const vozes = speechSynthesis.getVoices();
    const vozesPt = vozes.filter(v => v.lang && v.lang.toLowerCase().startsWith('pt'));
    const candidatas = vozesPt.length ? vozesPt : vozes;

    // Nomes de vozes femininas comuns em português nos navegadores/SOs
    const nomesFemininos = ['female', 'luciana', 'maria', 'francisca', 'joana', 'raquel', 'vitoria', 'vitória', 'google português'];

    vozEscolhida = candidatas.find(v =>
        nomesFemininos.some(nome => v.name.toLowerCase().includes(nome))
    ) || candidatas[0] || null;
}

if ('speechSynthesis' in window) {
    escolherVozFeminina();
    speechSynthesis.onvoiceschanged = escolherVozFeminina;
}

function falarCor(cor) {
    if (!('speechSynthesis' in window)) return;
    speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(nomesDasCores[cor] || cor);
    if (vozEscolhida) utter.voice = vozEscolhida;
    utter.lang = 'pt-BR';
    utter.rate = 0.9;
    utter.pitch = 1.5;
    speechSynthesis.speak(utter);
}

let indiceAtual = 0;
let podeClicar = true;

prepararRodada();

function prepararRodada() {
    let rodadaAtual = rodadas[indiceAtual];
    
    document.getElementById("item-atual").innerText = rodadaAtual.titulo;
    document.getElementById("barra").style.height = ((indiceAtual / rodadas.length) * 100) + "%";

    let cores = ['azul', 'rosa', 'dourado', 'branco', 'preto', 'arcoiris'];
    let opcoesEmbaralhadas = [...rodadaAtual.opcoes].sort(() => Math.random() - 0.5);

    cores.forEach((cor, index) => {
        let imgElement = document.getElementById("img-" + cor);
        let opcaoSorteada = opcoesEmbaralhadas[index];
        
        imgElement.src = opcaoSorteada.img;
        imgElement.parentElement.dataset.status = opcaoSorteada.status;
    });

    setTimeout(() => {
        podeClicar = true;
    }, 400); 
}

function abrirPresente(cor, elementoCena) {
    if (!podeClicar) return;
    podeClicar = false; 

    let cartao = elementoCena.querySelector(".cartao");
    cartao.classList.add("virado");

    let status = elementoCena.querySelector(".face-costas").dataset.status;

    if (status === "rico") {
        confetti({ particleCount: 200, spread: 90, origin: { y: 0.6 } });
    } else {
        confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
    }

    setTimeout(() => {
        cartao.classList.remove("virado");

        cartao.addEventListener('transitionend', function handler() {
            cartao.removeEventListener('transitionend', handler);

            indiceAtual++;
            
            if (indiceAtual >= rodadas.length) {
                document.querySelector("h1").innerText = "FIM DO JOGO!";
                document.getElementById("item-atual").innerText = "Você abriu todos os presentes! 🎉";
                document.querySelector(".grid-opcoes").style.display = "none";
                
                var duration = 5 * 1000;
                var end = Date.now() + duration;
                (function frame() {
                    confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 } });
                    confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 } });
                    if (Date.now() < end) { requestAnimationFrame(frame); }
                }());
            } else {
                prepararRodada();
            }
        });

    }, 3000); 
}