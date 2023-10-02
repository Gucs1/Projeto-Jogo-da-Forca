var listaDinamica = [];

var palavraSorteada;
var palavraCategoria;

var tentativas = 6;


//palavras que podem aparecer no jogo
var palavras = [
    palavra01 = {
        nome: "BRASIL",
        categoria: "PAÍS"
    },
    palavra02 = {
        nome: "ARGENTINA",
        categoria: "PAÍS"
    },
    palavra03 = {
        nome: "ALEMANHA",
        categoria: "PAÍS"
    },
    palavra04 = {
        nome: "HOLANDA",
        categoria: "PAÍS"
    },
    palavra05 = {
        nome: "SENEGAL",
        categoria: "PAÍS"
    },
    palavra06 = {
        nome: "PIZZA",
        categoria: "COMIDA"
    },
    palavra07 = {
        nome: "STROGONOFF",
        categoria: "COMIDA"
    },
    palavra08 = {
        nome: "FEIJOADA",
        categoria: "COMIDA"
    },
    palavra09 = {
        nome: "CHURRASCO",
        categoria: "COMIDA"
    },
    palavra10 = {
        nome: "SORVETE",
        categoria: "COMIDA"
    },
    palavra11 = {
        nome: "FIFA",
        categoria: "JOGOS"
    },
    palavra12 = {
        nome: "LOL",
        categoria: "JOGOS"
    },
    palavra13 = {
        nome: "VALORANT",
        categoria: "JOGOS"
    },
    palavra14 = {
        nome: "CSGO",
        categoria: "JOGOS"
    },
    palavra15 = {
        nome: "FORTNITE",
        categoria: "JOGOS"
    },
    palavra16 = {
        nome: "FUTEBOL",
        categoria: "ESPORTES"
    },
    palavra17 = {
        nome: "VOLEI",
        categoria: "ESPORTES"
    },
    palavra18 = {
        nome: "BASQUETE",
        categoria: "ESPORTES"
    },
    palavra19 = {
        nome: "TENIS",
        categoria: "ESPORTES"
    },
    palavra20 = {
        nome: "BEISEBOL",
        categoria: "ESPORTES"
    },
    palavra21 = {
        nome: "NARUTO",
        categoria: "DESENHOS E ANIMES"
    },
    palavra22 = {
        nome: "DRAGONBALL",
        categoria: "DESENHOS E ANIMES"
    },
    palavra23 = {
        nome: "POKEMON",
        categoria: "DESENHOS E ANIMES"
    },
    palavra24 = {
        nome: "DIGIMON",
        categoria: "DESENHOS E ANIMES"
    },
    palavra25 = {
        nome: "SIMPSONS",
        categoria: "DESENHOS E ANIMES"
    },
    palavra26 = {
        nome: "CAMARO",
        categoria: "CARROS"
    },
    palavra27 = {
        nome: "FERRARI",
        categoria: "CARROS"
    },
    palavra28 = {
        nome: "CELTA",
        categoria: "CARROS"
    },
    palavra29 = {
        nome: "UNO",
        categoria: "CARROS"
    },
    palavra30 = {
        nome: "PORSCHE",
        categoria: "CARROS"
    },
    palavra31 = {
        nome: "PE",
        categoria: "PARTES DO CORPO"
    },
    palavra32 = {
        nome: "MAO",
        categoria: "PARTES DO CORPO"
    },
    palavra33 = {
        nome: "CABECA",
        categoria: "PARTES DO CORPO"
    },
    palavra34 = {
        nome: "PERNA",
        categoria: "PARTES DO CORPO"
    },
    palavra35 = {
        nome: "BRACO",
        categoria: "PARTES DO CORPO"
    },
    palavra36 = {
        nome: "MESSI",
        categoria: "JOGADORES DE FUTEBOL"
    },
    palavra37 = {
        nome: "NEYMAR",
        categoria: "JOGADORES DE FUTEBOL"
    },
    palavra38 = {
        nome: "PELE",
        categoria: "JOGADORES DE FUTEBOL"
    },
    palavra39 = {
        nome: "RONALDO",
        categoria: "JOGADORES DE FUTEBOL"
    },
    palavra40 = {
        nome: "SALAH",
        categoria: "JOGADORES DE FUTEBOL"
    },
    palavra41 = {
        nome: "SAMSUNG",
        categoria: "MARCAS FAMOSAS"
    },
    palavra42 = {
        nome: "APPLE",
        categoria: "MARCAS FAMOSAS"
    },
    palavra43 = {
        nome: "NIKE",
        categoria: "MARCAS FAMOSAS"
    },
    palavra44 = {
        nome: "ADIDAS",
        categoria: "MARCAS FAMOSAS"
    },
    palavra45 = {
        nome: "LACOSTE",
        categoria: "MARCAS FAMOSAS"
    },
    palavra46 = {
        nome: "BATMAN",
        categoria: "HERÓIS"
    },
    palavra47 = {
        nome: "FLASH",
        categoria: "HERÓIS"
    },
    palavra48 = {
        nome: "THOR",
        categoria: "HERÓIS"
    },
    palavra49 = {
        nome: "HULK",
        categoria: "HERÓIS"
    },
    palavra50 = {
        nome: "AQUAMAN",
        categoria: "HERÓIS"
    },
]


//pegar tanto o nome quanto a categoria da palavra aleatoria
criarPalavraSecreta();
function criarPalavraSecreta(){
    var aleatorio = parseInt(Math.random() * palavras.length);
    

    palavraSorteada = palavras[aleatorio].nome;
    palavraCategoria = palavras[aleatorio].categoria;
    textoSorteado = palavras[aleatorio].Fim;
}


//exibir a dica do conteúdo e os traços da palavra
palavraNaTela();
function palavraNaTela(){
    var categoria = document.getElementById("dica")
    categoria.innerHTML = palavraCategoria;

    var palavraTela = document.getElementById("palavra_secreta")
    palavraTela.innerHTML = " ";

    for(i = 0; i < palavraSorteada.length; i++){
        if(listaDinamica[i] == undefined){
            listaDinamica[i] = "&nbsp;"
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }else{
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
    }
}


//verifica se a letra que o usuario escolheu faz parte da do segredo e desabilita teclas ja clicadas
function verificaLetraEscolhida(letra){
    document.getElementById("tecla_" + letra).disabled = true
    if(tentativas > 0){
        mudarStyleLetra("tecla_" + letra)
        comparaListas(letra);
        palavraNaTela();
    }
}


//mudar o style de botões ja clicados
function mudarStyleLetra(tecla){
    document.getElementById(tecla).style.background = "#c71585"
    document.getElementById(tecla).style.color = "#ffffff"
}


//compara a letra que selecionei com a da palavra secreta, limita os erros e mostra se  vencu
function comparaListas(letra){
    var posicao = palavraSorteada.indexOf(letra)
    if(posicao < 0){
        tentativas--
        caregaImagemForca();

    if(tentativas == 0){
        voceErrou();
    }

    }else{
        for(i = 0; i < palavraSorteada.length; i++){
            if(palavraSorteada[i] == letra){
                listaDinamica[i] = letra;
            }
        }
    }

    var vitoria = true
    for(i = 0; i < palavraSorteada.length; i++){
        if(palavraSorteada[i] != listaDinamica[i]){
            vitoria = false
        }
    }

    if(vitoria == true){
        voceGanhou();
        tentativas = 0 
    }
}


//muda a imagem quando erro de acordo com as chances restantes
function caregaImagemForca(){
    switch(tentativas){
        case 5: 
                document.getElementById('imagem').style.background = "url('./imagens/forca2.png')"
                break;

        case 4: 
                document.getElementById('imagem').style.background = "url('./imagens/forca3.png')"
                break;

        case 3: 
                document.getElementById('imagem').style.background = "url('./imagens/forca4.png')"
                break;

        case 2: 
                document.getElementById('imagem').style.background = "url('./imagens/forca5.png')"
                break;

        case 1: 
                document.getElementById('imagem').style.background = "url('./imagens/forca6.png')"
                break;

        case 0: 
                document.getElementById('imagem').style.background = "url('./imagens/forca7.png')"
                break;
        
        default: 
                document.getElementById('imagem').style.background = "url('./imagens/forca1.png')"
                break;

    }
}


//Função vitoria atribuido a Função comparaLista() - if(vitoria == true)
function voceGanhou(){
    window.alert('Parabéns, você ganhouuu!! a palavra secreta era ' + palavraSorteada)
}

//Função derrota atribuido a Função comparaLista() - if(tetnativa == 0)
function voceErrou(){
    window.alert('Você perdeu, a palavra secreta era ' +  palavraSorteada)
}


//Reiniciar o jogo com o botão
var reiniciar = document.getElementById('tecla_reload')
reiniciar.addEventListener('click', function(){
    location.reload();
});