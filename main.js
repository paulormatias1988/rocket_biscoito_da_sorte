// Variáveis
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const screen_p = document.querySelector(".msg")

const msg = [
    "Consagre ao Senhor tudo o que você faz, e os seus planos serão bem-sucedidos. Provérbios 16:3",
    "Pres­tem culto ao Senhor, o Deus de vocês, e ele os aben­çoará, dando a vocês alimento e água. Tirarei a doença do meio de vocês. Êxodo 23:25",
    "O meu Deus suprirá todas as necessidades de vocês, de acordo com as suas gloriosas riquezas em Cristo Jesus. Filipenses 4:19",
]


// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e){
    if(e.key == 'Enter' && screen1.classList.contains("hide")) {
        handleResetClick()
    }
})

// função callback
function handleTryClick(event) {
    let randomNumber = Math.round(Math.random() * 2)
    event.preventDefault() // não faça o padrão // não envie o formulário
    screen_p.textContent = msg[randomNumber]
    toggleScreen()
}

function handleResetClick(event){
    toggleScreen()
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
    screen_p.classList.toggle("hide")
}