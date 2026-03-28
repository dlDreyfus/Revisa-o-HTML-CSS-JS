# Aula: usando Docker neste projeto

## 1. Primeiro: este projeto pode usar Docker?

Sim, pode.

Este projeto e um site estatico feito com:

- `index.html`
- `style.css`
- `script.js`
- uma imagem local

Como ele nao precisa de banco de dados, API ou servidor em Node.js, o Docker nao e obrigatorio. Mesmo assim, ele pode ser muito util para aprender e para padronizar a forma de executar o projeto.

## 2. Para que o Docker serviria aqui?

Neste projeto, o Docker serviria principalmente para:

1. Criar um servidor web pronto para abrir o site no navegador.
2. Evitar diferencas entre computadores.
3. Simular um ambiente mais proximo de publicacao.
4. Ensinar conceitos importantes de deploy e conteinerizacao.

Em vez de abrir o arquivo HTML diretamente no navegador, voce roda um container com um servidor `nginx`, que entrega a pagina em `http://localhost:8080`.

## 3. O que e Docker, em linguagem simples?

Pense no Docker como uma caixa padrao para rodar um projeto.

Dentro dessa caixa, colocamos:

- o sistema minimo necessario
- o servidor web
- os arquivos do projeto

Assim, qualquer pessoa com Docker pode subir o projeto do mesmo jeito.

## 4. O que foi criado neste projeto?

Foram adicionados dois arquivos:

- `Dockerfile`
- `docker-compose.yml`

### `Dockerfile`

Esse arquivo diz como montar a imagem:

```Dockerfile
FROM nginx:alpine

COPY . /usr/share/nginx/html
```

Explicando:

- `FROM nginx:alpine`: usa uma imagem leve do `nginx`
- `COPY . /usr/share/nginx/html`: copia os arquivos do projeto para a pasta publica do servidor

### `docker-compose.yml`

Esse arquivo facilita subir o container:

```yml
services:
  site:
    build: .
    ports:
      - "8080:80"
```

Explicando:

- `build: .`: manda o Docker montar a imagem usando a pasta atual
- `"8080:80"`: abre a porta `8080` do seu computador e liga na porta `80` do container

## 5. Passo a passo para iniciantes

### Passo 1. Entre na pasta do projeto

No terminal:

```bash
cd /home/dldreyfus/Downloads/Estudos/HTMLCSSJS
```

### Passo 2. Confira se o Docker esta instalado

```bash
docker --version
docker compose version
```

Se aparecer a versao, esta tudo certo.

### Passo 3. Rode o projeto com Docker Compose

```bash
docker compose up --build
```

O que esse comando faz:

- `up`: sobe o servico
- `--build`: reconstrui a imagem antes de iniciar

### Passo 4. Abra no navegador

Abra:

```text
http://localhost:8080
```

Seu site deve aparecer rodando pelo `nginx`.

### Passo 5. Pare o projeto

No terminal onde ele esta rodando, pressione:

```text
Ctrl + C
```

Se quiser remover containers parados depois:

```bash
docker compose down
```

## 6. O que acontece por tras dos panos?

Quando voce roda `docker compose up --build`, o Docker:

1. Le o `docker-compose.yml`
2. Encontra o servico `site`
3. Usa o `Dockerfile` para montar uma imagem
4. Copia seus arquivos HTML, CSS e JS
5. Inicia um container com `nginx`
6. Publica o site na porta `8080`

## 7. Vantagens reais para este projeto

- Ambiente padronizado para estudo
- Execucao igual em Linux, Windows e macOS
- Base para publicar depois em um servidor
- Contato com uma ferramenta muito usada no mercado

## 8. Limites do Docker neste caso

Tambem e importante entender quando ele nao traz tanto ganho.

Como este projeto e estatico, voce tambem poderia:

- abrir o `index.html` diretamente
- usar uma extensao como Live Server no VS Code
- subir um servidor simples local

Ou seja: para este projeto, o Docker e mais util para aprendizado, organizacao e preparacao para projetos maiores do que por necessidade tecnica.

## 9. Quando o Docker ficaria ainda mais importante?

Docker passa a ser ainda mais util quando o projeto tiver:

- backend em Node.js, Python, PHP ou Java
- banco de dados como PostgreSQL ou MySQL
- Redis
- filas
- varios servicos conversando entre si

Nesses casos, ele deixa o ambiente muito mais facil de montar.

## 10. Resumo final

Sim, e possivel usar Docker neste projeto.

Aqui ele serviria para:

- rodar o site em um servidor web real
- padronizar o ambiente
- praticar um fluxo profissional

Mas vale saber a ideia principal:

Para um site simples como este, Docker e opcional.
Para projetos maiores, ele costuma ser muito valioso.
