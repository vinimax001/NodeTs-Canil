<h1 align="center">Projeto Canil - TypeScrype/NodeJs - Vinicius 💻</h1>

![Imagem do projeto finalizado](/public/images/projetocanil.gif)

<h4 align="center"><a href="https://node-ts-canil-vinimax001-viniciusdevs-projects.vercel.app/" target="_blank">Confira o projeto aqui</a></h4>

---

## 💻 Sobre

### Pré-requisitos globais:
`npm install -g nodemon typescript ts-node`

### Instalação
`npm install`

### Rodando o projeto
`npm run start-dev`

---

## 🐳 Docker

Para facilitar a execução da aplicação em diferentes ambientes e garantir consistência, você pode utilizar o Docker. Abaixo estão as instruções para construir a imagem e executar o container, tanto diretamente com comandos Docker quanto usando Docker Compose.

---

### Construindo e Executando com Comandos Docker

Esta seção descreve como construir a imagem Docker da sua aplicação e executá-la diretamente.

1.  **Construir a Imagem Docker:**
    Navegue até a raiz do projeto no seu terminal (onde o `Dockerfile` está localizado) e execute o seguinte comando para construir a imagem. O nome da imagem será `projeto-canil` e a tag `latest`.

    ```bash
    docker build -t projeto-canil:latest .
    ```

    Isso pode levar alguns minutos, pois o Docker vai baixar a imagem base, instalar as dependências e construir sua aplicação.

2.  **Executar o Container Docker:**
    Após a imagem ser construída, você pode executar um container a partir dela. Mapearemos a porta `3000` do seu computador para a porta `3000` dentro do container, onde a aplicação Node.js está escutando.

    ```bash
    docker run -p 3000:3000 --name meu-canil-app -d projeto-canil:latest
    ```

    * `-p 3000:3000`: Publica a porta `3000` do container para a porta `3000` no host.
    * `--name meu-canil-app`: Atribui um nome customizado ao seu container para facilitar a identificação.
    * `-d`: Executa o container em modo "detached" (em segundo plano).

3.  **Verificar o Container:**
    Para verificar se o container está rodando:

    ```bash
    docker ps
    ```

4.  **Acessar a Aplicação:**
    Com o container em execução, sua aplicação estará acessível em seu navegador através do endereço: `http://localhost:3000`.

5.  **Parar e Remover o Container:**
    Quando quiser parar e remover o container:

    ```bash
    docker stop meu-canil-app
    docker rm meu-canil-app
    ```

---

### Utilizando Docker Compose

O Docker Compose é uma ferramenta que permite definir e executar aplicações Docker multi-container. Para esta aplicação, ele simplifica o processo de construção e execução.

1.  **Subir a Aplicação com Docker Compose:**
    Navegue até a raiz do projeto no terminal e execute o comando:

    ```bash
    docker compose up --build -d
    ```

    * `--build`: Garante que a imagem seja reconstruída com as últimas alterações antes de iniciar o container.
    * `-d`: Executa os containers em segundo plano.

2.  **Verificar os Containers:**
    Para verificar os serviços em execução:

    ```bash
    docker compose ps
    ```

3.  **Acessar a Aplicação:**
    Sua aplicação estará acessível em seu navegador através do endereço: `http://localhost:3000`.

4.  **Parar e Remover os Serviços:**
    Para parar e remover todos os serviços, redes e volumes definidos no `docker-compose.yml`:

    ```bash
    docker compose down
    ```

---

## 🧠 Tecnologias utilizadas:

Neste projeto apliquei os seguintes pontos:
+ Semântica HTML;
+ CSS
+ JavaScript
+ TypeScript
+ NodeJs
+ Docker
+ Pontos de acessibilidade;
+ Responsividade;
+ Mobile first;
+ Utilização da lib JS <a href="https://scrollrevealjs.org">Scroll Reveal</a>.

<div>
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
    <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />
</div>

<table>
  <tr>
    <td>
      <img src="https://github.com/vinimax001.png" width="100px" />
    </td>
    <td>
      Feito por <a href="https://github.com/vinimax001">Vinicius Aguiar.</a> 🙋🏿‍♂️
    </td>
  </tr>
</table>

## 🏆 Licença

The [MIT License](./LICENSE).
