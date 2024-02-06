<h1>Desafio Fullstack: KenzieAcademy-Brasil 🚀</h1>

**Backend:**

-> Este trabalho envolve o desenvolvimento de um sistema backend robusto que fornece uma API REST para criar, listar, atualizar e excluir dados em um banco de dados PostgreSQL. Utilizando tecnologias modernas como TypeScript, TypeORM, Node.js e Express, nossa aplicação oferece uma solução eficiente e escalável. 🌟✨

Instruções de Configuração do Projeto:

1. Clone o Repositório 🚀:

   - Use o comando git clone para obter o código-fonte do repositório.

2. Instale as Dependências 💻:

   - Execute npm install ou yarn para instalar as bibliotecas necessárias.

3. Configure o Ambiente 🔮:

   - Crie um arquivo chamado .env na raiz, usando .env.example.
   - Defina as configurações do seu banco de dados PostgreSQL no arquivo .env.

4. Migração do Banco de Dados ✨:

   - Execute o comando:
     -> npm run typeorm migration:run -- -d ./src/data-source.ts

5. Inicie o Projeto Localmente 🔧:
   - Inicie o projeto com o comando:
     -> npm run dev

## Requisitos do Serviço ✅:

- Banco de Dados: PostgreSQL
- Tecnologias: TypeScript, TypeORM, Node.js, Express e outras bibliotecas.

## Rotas da API

| Método | Endpoint     | Descrição               | Permissões          |
| ------ | ------------ | ----------------------- | ------------------- |
| POST   | /login       | Autenticação do usuário | N/A                 |
| POST   | /users       | Criar novo usuário      | N/A                 |
| GET    | /users       | Listar todos usuários   | Usuário autenticado |
| GET    | /users/id    | Ler usuário por ID      | Usuário autenticado |
| PATCH  | /users/id    | Atualizar usuário       | Possuidor da conta  |
| DELETE | /users/id    | Excluir usuário         | Possuidor da conta  |
| POST   | /contacts    | Criar novo contato      | Usuário autenticado |
| GET    | /contacts    | Listar todos contatos   | Usuário autenticado |
| GET    | /contacts/id | Ler contato por ID      | Usuário autenticado |
| PATCH  | /contacts/id | Atualizar contato       | Possuidor e Gerente |
| DELETE | /contacts/id | Excluir contato         | Possuidor e Gerente |

**Frontend**

-> Este é o frontend do projeto Fullstack KenzieAcademy-Brasil, uma aplicação React que proporciona uma experiência de usuário dinâmica e intuitiva. Abaixo estão as instruções simplificadas para configurar e executar o frontend. 🌟✨

Configuração do Projeto:

1. Clone o Repositório 🚀.

2. Instale as Dependências 🔮:

   - npm install

3. Configure o Ambiente 💻:

   - Se necessário, ajuste as configurações no arquivo .env ou .env.local.

4. Inicie o Projeto Localmente ✨:
   - npm start

## Tecnologias Utilizadas 💻🛠️:

- JavaScript
- React
- Zod
- Styled-components
- Axios
- React-router-dom
- React-hook-form
- Outras bibliotecas relevantes

## Funcionalidades Principais 🤓:

- Autenticação de Usuário: Permite login e criação de novos usuários.
- Gerenciamento de Usuários: Listagem, leitura, atualização e exclusão de informações do usuário.
- Gerenciamento de Contatos: Criação, listagem, leitura, atualização e exclusão de contatos associados ao usuário.

_Este frontend complementa o backend, oferecendo uma experiência coesa para o usuário final. A configuração é simples, e a aplicação é construída com tecnologias modernas para proporcionar um ambiente de usuário amigável e responsivo. Sinta-se à vontade para explorar e contribuir para esta interface interativa! 🧠❤️_
