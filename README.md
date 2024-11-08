# Projeto Health Tech - Startup

Este é o repositório do projeto desenvolvido para uma startup de tecnologia na área da saúde (Health Tech). O objetivo do projeto foi criar um aplicativo mobile para gerenciamento de produtos e usuários, utilizando várias tecnologias modernas do ecossistema React Native, com foco na usabilidade, performance e integração com APIs.

## Arquitetura

A arquitetura utilizada para este projeto foi **MVVM (Model-View-ViewModel)**, que foi escolhida para facilitar a manutenção, escalabilidade e testabilidade do código. A divisão clara entre os componentes de **Model**, **View** e **ViewModel** torna a aplicação mais modular, promovendo um código mais limpo e de fácil manutenção.

- **Model**: Representa a camada de dados e lógica de negócios.
- **View**: Responsável pela interface com o usuário, renderizando os dados.
- **ViewModel**: A camada que se comunica com o Model e prepara os dados para a View.

Essa separação facilita a evolução do sistema, pois cada camada pode ser modificada de forma independente, sem causar impacto nas outras.

## Tecnologias Utilizadas

- **Expo**: Framework para facilitar o desenvolvimento de aplicativos mobile com React Native.
- **Expo Router**: Para gerenciamento de rotas, facilitando a navegação no aplicativo.
- **Redux Toolkit**: Gerenciamento de estado global da aplicação, simplificando a manipulação de dados compartilhados.
- **React Native Paper**: Biblioteca de componentes UI para React Native, que ajuda na criação de interfaces consistentes e bonitas.
- **Styled Components**: Para estilização de componentes de forma modular e reutilizável.
- **Axios**: Cliente HTTP para realizar requisições à API de backend.
- **React Query**: Biblioteca para gerenciamento de estado de servidor e cache de dados, proporcionando uma maneira eficiente de buscar, armazenar e sincronizar dados da API.

## Funcionalidades Implementadas

- **Autenticação e Autorização**
  - Implementação do **Refresh Token**: Para garantir que o usuário tenha uma sessão ativa sem precisar fazer login repetidamente.
  - **Login**: Rota para autenticação do usuário e obtenção de tokens.
- **Gestão de Produtos**
  - **Adicionar Produto**: Permite adicionar novos produtos ao sistema.
  - **Editar Produto**: Função para atualizar as informações de um produto.
  - **Deletar Produto**: Funcionalidade para excluir produtos.
  - **Seleção de Produtos**: Listagem dos produtos disponíveis no sistema com possibilidade de filtro.
  - **Detalhes do Produto**: Exibição das informações detalhadas sobre um produto selecionado.
- **Gestão de Usuários**

  - **Detalhes do Usuário**: Rota para visualizar as informações do usuário autenticado.

- **Validação de Input e Erros da API**
  - Validação de campos de entrada utilizando regras específicas.
  - Tratamento de erros das APIs de forma intuitiva, com mensagens de erro claras para o usuário.

## Instalação e Execução

Para rodar o projeto localmente, siga os passos abaixo:

1. **Clone o repositório**

   ```bash
   git clone https://github.com/GuilhermeCamargo744/teste-app-health-tech.git

   ```

2. \*\*Instale as dependências Acesse o diretório do projeto e instale as dependências:

   ```bash
   cd teste-health-tech
   npm install

   ```

3. \*\*Inicie o projeto Execute o comando abaixo para rodar o projeto:
   ```bash
   npm run start
   ```

## Estrutura do Projeto

A estrutura do projeto segue uma organização modular para facilitar a manutenção e escalabilidade:

```bash
/src
  /assets               # Imagens, fontes e outros recursos estáticos
  /components           # Componentes reutilizáveis da interface
  /hooks                # Custom hooks para lógica de negócio
  /navigation           # Gerenciamento de navegação com Expo Router
  /store                # Estado global com Redux Toolkit
    /slices             # Divisão por funcionalidades para o estado global
      /use-data         # Estado e lógica para dados do usuário
      /current-product  # Estado e lógica para dados do produto atual
      /products-data    # Estado e lógica para dados dos produtos
  /screens              # Telas da aplicação
    /styles               # Arquivos de estilo com Styled Components
    /viewmodels           # Camada de ViewModel para controle de dados e interação entre a View e Model
  /services             # Integração com APIs utilizando Axios e React Query
  /server               # Configuração do servidor e APIs
  /utils                # Utilidades e funções auxiliares
    /formatting         # Funções de formatação (e.g., `format-products-group-by-category.ts`, `money.ts`)
    /auth               # Funções para autenticação (e.g., `automatic-refrash-token.ts`, `validate-and-refresh-token.ts`)
    /async-storage      # Funções para armazenamento local (e.g., `store-token.ts`)
```
