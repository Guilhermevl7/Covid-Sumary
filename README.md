
# Covid-Sumary

Um painel interativo que exibe dados atualizados sobre o COVID-19 no mundo. Este projeto permite que os usuários visualizem estatísticas globais e regionais sobre casos confirmados, recuperações e óbitos de COVID-19.


## Autor

- [@Guilhermevl7](https://github.com/Guilhermevl7/Covid-Sumary)


## Tecnologias utilizadas

React: biblioteca para construir interfaces de usuário.
Vite: ferramenta de build para otimizar e acelerar o desenvolvimento.
Axios: para realizar requisições HTTP à API de COVID-19.
TailwindCSS: estilização da interface.
## Funcionalidades

- Exibir dados globais do COVID-19, incluindo total de casos, recuperações e mortes.
- Atualização automática de dados com base nas informações mais recentes da API.



## Instalação

```bash
  Clone este repositório: git clone https://github.com/Guilhermevl7/Covid-Sumary.git
  Acesse a pasta do projeto: cd Covid-Sumary
  Instale as dependências principais: npm install
  Instale o Axios para realizar requisições HTTP: npm install axios
  Instale o Tailwind CSS: npm install -D tailwindcss // npx tailwindcss init

```
    
## Configuração 

Configure o Tailwind CSS adicionando o seguinte ao arquivo tailwind.config.js:

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

Adicione as diretivas do Tailwind no arquivo CSS principal (por exemplo, src/index.css):

@tailwind base;
@tailwind components;
@tailwind utilities;

## Execução do projeto

    npm run dev



## Estrutura do Projeto 

- src/: pasta principal do código-fonte do projeto.
- components/: contém componentes reutilizáveis do React.
- services/: contém as configurações para chamadas de API.
- App.js: componente principal que orquestra a interface do usuário.
