🔍 Buscador de Vídeos: YouTube API Project

Este é o meu projeto final de portfólio, desenvolvido para consolidar conhecimentos em integração de APIs. A aplicação é um buscador de vídeos do YouTube em tempo real, construído com foco total em usabilidade e design responsivo (Dark Mode).

Status: Concluído e em Deploy.

🎯 O que foi feito? 

O principal desafio não era apenas buscar os vídeos, mas sim controlar o comportamento dos players em um ambiente com 20 elementos fixos.

* Busca Funcional: O usuário pesquisa um termo e os 20 players fixos são atualizados instantaneamente.
* Design: Aplicação de um tema Dark Mode limpo, com layout em grade (CSS Grid) que se adapta perfeitamente a celulares (1 ou 2 colunas) e desktops (4 colunas).
* A Grande Solução: Resolvi o problema chato do autoplay em massa. Garanti que os 20 vídeos <NÃO> começassem a tocar ao mesmo tempo após a busca, usando o método `cueVideoById()` da API do YouTube. Isso melhora drasticamente a experiência do usuário.

💻 Stack de Desenvolvimento

* Frontend: HTML5, CSS3.
* Lógica: JavaScript (ES6+), utilizando `fetch` para requisições assíncronas.
* APIs: YouTube Data API v3 (para dados de busca) e YouTube IFrame Player API (para controle do player).

💡 Destaques Técnicos

1.  Controle de Player (`cueVideoById`): Implementação do método ideal para carregar a miniatura do vídeo sem iniciar a reprodução, respeitando a interação do usuário.
2.  Responsividade com Grid: Uso inteligente de CSS Grid e Media Queries para manter a proporção 16:9 dos vídeos em todos os tamanhos de tela.
3.  Segurança de API: Configuração de restrições no Google Cloud Console para limitar o uso da chave apenas ao serviço do YouTube.

🛠️ Como Rodar (Instruções)

Para testar o projeto:

1.  Clone este repositório.
2.  Obtenha uma chave de API para a **YouTube Data API v3** no Google Cloud Console.
3.  Abra o arquivo `script.js` e insira sua chave na variável `API_KEY`.
4.  Abra o `index.html` no seu navegador.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
									*Projeto desenvolvido por Amon Carlos Ribeiro dos Santos - Estudante do 4º Semestre de ADS.*