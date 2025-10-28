const API_KEY = 'SUA_CHAVE_AQUI'; 
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

const playerIds = [
    'playerA', 'playerB', 'playerC', 'playerD','playerE', 'playerF', 'playerG', 'playerH', 'playerI', 'playerJ', 'playerK', 'playerL', 'playerM', 'playerN', 'playerO', 'playerP', 'playerQ', 'playerR', 'playerS', 'playerT'
];

let youtubePlayers = {}; 

//1- CARREGAMENTO DA IFrame Player API
var scriptExterno = document.createElement('script');
scriptExterno.src = "https://www.youtube.com/iframe_api";

var inicioScript = document.getElementsByTagName('script')[0];
inicioScript.parentNode.insertBefore(scriptExterno, inicioScript);


//2 - FUNÇÃO PRINCIPAL DA API - deckara as variáveis dos players
var playerA, playerB, playerC, playerD, playerE, playerF, playerG, playerH, playerI, playerJ, playerK, playerL, playerM, playerN, playerO, playerP, playerQ, playerR, playerS, playerT; 

function onYouTubeIframeAPIReady() {

    //2.1 - INICIALIZAÇÃO DOS PLAYERS FIXOS 
    playerA = new YT.Player('playerA', {
        videoId: 'VnPB-H7Zo7Y',
        playerVars: { controls: 1, autoplay: 0, modestbranding: 1 } 
    });
        youtubePlayers['playerA'] = playerA; 

    playerB = new YT.Player('playerB', {
        videoId: '6BgxLcofzoo',
        playerVars: { controls: 1, autoplay: 0, modestbranding: 1 }
    });
        youtubePlayers['playerB'] = playerB; 

    playerC = new YT.Player('playerC', {
        videoId: 'gEm-da2fmk8',
        playerVars: { controls: 1, autoplay: 0, modestbranding: 1 }
    });
        youtubePlayers['playerC'] = playerC; 
    
    playerD = new YT.Player('playerD', {
        videoId: 'VF97zz_5oCc',
        playerVars: { controls: 1, autoplay: 0, modestbranding: 1 }
    });
        youtubePlayers['playerD'] = playerD;

    playerE = new YT.Player('playerE', {
        videoId: '63TYuphVJmk',
        playerVars: { controls: 1, autoplay: 0, modestbranding: 1 }
    });
        youtubePlayers['playerE'] = playerE;

    playerF = new YT.Player('playerF', {
        videoId: 'aahyLNH4PrE',
        playerVars: { controls: 1, autoplay: 0, modestbranding: 1 }
    });
        youtubePlayers['playerF'] = playerF;
        
        playerG = new YT.Player('playerG', {
        videoId: 'BlfeNy520Wo',
        playerVars: { controls: 1, autoplay: 0, modestbranding: 1 }
    });
        youtubePlayers['playerG'] = playerH;

    playerH = new YT.Player('playerH', {
        videoId: 'XjNERSpQ6e4',
        playerVars: { controls: 1, autoplay: 0, modestbranding: 1 }
    });
        youtubePlayers['playerH'] = playerH;


    playerI = new YT.Player('playerI', {
        videoId: '-Sn12VEIwro',
        playerVars: { controls: 1, autoplay: 0, modestbranding: 1 }
    });
        youtubePlayers['playerI'] = playerI;


    playerJ = new YT.Player('playerJ', {
        videoId: '4H-6aamrwvo',
        playerVars: { controls: 1, autoplay: 0, modestbranding: 1 }
    });
        youtubePlayers['playerJ'] = playerJ;


    playerK = new YT.Player('playerK', {
        videoId: 'cDE4WPWjqz0',
        playerVars: { controls: 1, autoplay: 0, modestbranding: 1 }
    });
        youtubePlayers['playerK'] = playerK;


    playerL = new YT.Player('playerL', {
        videoId: 'P_ihwXty6Ls',
        playerVars: { controls: 1, autoplay: 0, modestbranding: 1 }
    });
        youtubePlayers['playerL'] = playerL;


    playerM = new YT.Player('playerM', {
        videoId: '5Wn8gZmHPms',
        playerVars: { controls: 1, autoplay: 0, modestbranding: 1 }
    });
        youtubePlayers['playerM'] = playerM;


    playerN = new YT.Player('playerN', {
        videoId: 'b7GjV_aeoK4',
        playerVars: { controls: 1, autoplay: 0, modestbranding: 1 }
    });
        youtubePlayers['playerN'] = playerN;


    playerO = new YT.Player('playerO', {
        videoId: 'M0VIG_7l7qU',
        playerVars: { controls: 1, autoplay: 0, modestbranding: 1 }
    });
        youtubePlayers['playerO'] = playerO;


    playerP = new YT.Player('playerP', {
        videoId: 'CR7QizUf6Jo',
        playerVars: { controls: 1, autoplay: 0, modestbranding: 1 }
    });
        youtubePlayers['playerG'] = playerP;


    playerQ = new YT.Player('playerQ', {
        videoId: 'l3n6FVYIZlo',
        playerVars: { controls: 1, autoplay: 0, modestbranding: 1 }
    });
        youtubePlayers['playerQ'] = playerQ;


    playerR = new YT.Player('playerR', {
        videoId: 'iqNPL_5MayI',
        playerVars: { controls: 1, autoplay: 0, modestbranding: 1 }
    });
        youtubePlayers['playerR'] = playerR;


    playerS = new YT.Player('playerS', {
        videoId: 'PXnjeRHb3Pk',
        playerVars: { controls: 1, autoplay: 0, modestbranding: 1 }
    });
        youtubePlayers['playerS'] = playerS;


    playerT = new YT.Player('playerT', {
        videoId: 'LO0fsAzMvvs',
        playerVars: { controls: 1, autoplay: 0, modestbranding: 1 }
    });
        youtubePlayers['playerT'] = playerT;
    
    //2.2 - Configura os eventos de busca APÓS os players estarem prontos
    setupEventListeners();
}

//3 - LÓGICA DE BUSCA E ATUALIZAÇÃO DOS PLAYERS 

// Função assíncrona para buscar vídeos na API do YouTube Data v3
async function searchYouTube(query) {
    if (!API_KEY || !query) return;

    const maxResults = playerIds.length;
    
    // Chamada à API de Busca
    const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&type=video&key=${API_KEY}&maxResults=${maxResults}`;

    try {
        const response = await fetch(URL);
        const data = await response.json();
        
        loadVideosIntoPlayers(data.items);

    } catch (error) {
        console.error('Erro na requisição da API:', error);
        alert('Ocorreu um erro ao buscar vídeos. Verifique sua chave de API ou limites de cota.');
    }
}

// Função que carrega o ID do vídeo encontrado em cada player fixo
function loadVideosIntoPlayers(items) {
    
    playerIds.forEach((playerId, index) => {
        const playerInstance = youtubePlayers[playerId];
        
        if (items[index] && items[index].id.kind === 'youtube#video') {
            const videoId = items[index].id.videoId;
            
            // Usa loadVideoById, que respeita o autoplay: 0 definido na inicialização.
            if (playerInstance) {
                playerInstance.cueVideoById(videoId);
            }
        } else {
            // Pausa o player se não houver resultado suficiente na busca
            if (playerInstance) {
                 playerInstance.stopVideo(); 
            }
        }
    });
}


//4 - CONFIGURAÇÃO DE EVENTOS (Click e botão Enter)

function setupEventListeners() {
    searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim();
        searchYouTube(query);
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchButton.click();
        }
    });
}