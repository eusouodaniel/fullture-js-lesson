# Planejamento

- Concessionaria de carros

objeto - carro - marca - filtro
                 tipo - filtro
                 modelo - colocar filtro
                 ano 
                 preco
         carros = array

//nós temos um filtro
filtro - marca - tipo - ano

//resolvido
eu tenho uma div no front
eu quero popular essa div
a informação tá no javascript

//novo objetivo - resolvido
eu quero ter dois filtros
Busca mais robusta/completa

//afim de deixar busca mais completa e usual
normalização dos dados

//próxima aula
1- Adicionar mais alguns filtros
   - Filtro pelo modelo
   - Colocando outro input ou colocando outro select
   - Entender como popular o select
   - Select dinâmico - de acordo com marca selecionada
   - Criar select - porém vazio
   informação hard coded
2- Criar condição para listar tudo - resolvido
3- Enriquecer lista de carros - quando a gente estiver trabalhando com local/sessionStorage
4- Select mais escalável - por hora despriorizado
5- Cadastrar carros - cenário foi devidamente concluído
6- Prática

//Futuro
- Entender se faz sentido utilizar .filter ao invês do if
de - para (dicionário)
altocusto - Alto custo
mediocusto - Médio custo
baixocusto - Baixo custo
- Cenário de falha na busca

localStorage = permanente
sessionStorage = somente durante a sessão

JSON.parse
JSON.stringify

//Requisitos
Criar uma página de login
   - email
   - senha aberta
   - mantenha-me conectado - talvez vamos implementar
   - poderei acessar página de filtros apenas logado
- Criar html e js de login
- Criar validações para verificar login
- Adicionar validação de logado ou não logado na página index
Adicionar evento DOMContentLoaded
- Senha não está criptografada
- Validação fraca via SessionStorage
- Exemplos de CSS com classe

//como estamos?
dados estão em localStorage
faz sentido ter cadastro de usuário?
DOMContentLoaded - aplicabilidade
validar login
senhas estão abertas - resolvido
- 12345678 - hash
Exemplos de CSS com classe
Salvar classe de acordo com condição
- localStorage salvar classe
- iniciar js->buscar dados no localStorage->aplicar de acordo com condição
- refatoração
- conversão de senhas no localStorage
- incrementar acesso ao site toda vez que logar

Usuarios
   - email
   - senha
   - tipo
      - Tipo A - blue > 10
      - Tipo B - red >= 5 e =< 10
      - Tipo C - green < 5