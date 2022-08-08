# Steam Project Client

This Project was developed in the 5th module of my Web Development course as Blue EdTech. This is the front end part of Steam Project, which was built with React js and Styled Components.

## Para correção

- Para corrigir, é necessário utilizar a API desse projeto localmente. Confira como clonar e rodar a API localmente [aqui](https://github.com/darcanj0/steam-project).

_Importante: É trivial que antes de utilizar a api, você rode o comando para semear o banco de dados. (npm run seed)_

- Com a api funcionando e o banco de dados semeado, você precisará criar um usuário administrador no endpoint de criação de usuário

- Após criar o usuário, crie um perfil, vinculando-o à conta de usuário criada

- Depois disso, crie alguns gêneros de jogos

- O próximo passo é associar alguns jogos a um gênero. Consulte a documentação da API para saber como

_Importante: Para ter algum resultado dessas relações na UI, você deve associar ao menos 3 jogos a um mesmo gênero. Isso acontece, pois a biblioteca Swiper, que é usada nos carrosséis, está configurada para ter 3 slides por view na listagem por gênero. Essa mesma regra se aplica para a seção de favoritos de um perfil._

- O último passo, é favoritar jogos via API. Favorite pelo menos 3 jogos, para ter resultado visual na UI.

## Cloning and running

Clone this rep

```bash
  git clone https://github.com/darcanj0/steam-project-react.git
  cd steam-project-react
```

Install dependencies

```bash
  yarn add
```

Run

```bash
  yarn dev
```

## Autor

- [@darcanj0](https://github.com/darcanj0)
