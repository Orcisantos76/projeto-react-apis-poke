# projeto-react-apis-poke
<h1>Componente Header<h1/>
O componente header, é comun a todas as pagina, do projeto, contem um logo e alguns botoes com funções para adicionar e excluir os itens, assim como a funçao de retornar para a pagina principal. 

Componente PokemonCard
Este componente recebe os dados que vieram de uma api, que esta localizada em api.js no src, esta api foi desmembrada em PokemonListPage, dentro do arquivo com mesmo nome. Ali definimos o que é consumido da api, dentro de pokemonCard.
gerando um Card com imagem id type name, tambem ha botoes para acessar a pagina de detalhes e botao para adicionar ou remover o item da lista podekex.

Componente DetailPage
Este componente guarda o arquivo da pagina de detalhes, que tambem importa a pagina api.js, usa um useEffect para fazer a requisiçao e verificar se esta correto, se nao estiver traz uma msg de erro no console.
Possui titulo e containers com informaçoes mapeadas da api, como id name img 

Componente POkedexPage
Neste componente que é renderizado como uma lista onde sao guardados os itens que foram selecionados pelo usuario.
Este componente traz o card renderizado com id name e imagem, assim como um botao que leva para a pagina de detalhes do item selecionado usando o id para mapeamento, 

Componente Pokemon ListPage
Este componente é responsavel por renderizar todos os itens consumidos da api em forma de uma lista de cards.
tambem ha dois botoes no rodapé desta pagina para que seja possivel navegar entre os inumeros itens da api.
