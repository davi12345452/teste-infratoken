# Teste Técnico Infratoken
A aplicação segue o teste Mars Rover em JavaScript. Basicamente o programa recebe uma cooerdanada (x, y) onde está localizado algo, além do sentido para qual está voltado (Norte, Sul, Leste, Oeste). Através de um caminho em forma de string e que só permite três movimentos (M - Para frente, L - Virar 90 graus à esquerda, R - Virar 90 graus à direita), o programa devolve a posição final do objeto. Foram feitas 3 versões iniciais, abaixa há mais detalhes sobre elas.

## Versão 1 (Branch v1)
Código mais simples, apenas aplicando a lógica geral do problema e algumas formatações dos dados de entrada. Para rodar basta rodar um `node index` e não se esquecer de escrever o teste que quer no arquivo. 

## Versão 2 (Branch v2)
Um pouco mais complexo, agora há uma limpeza tanto dos dados de entrada, quanto dos de saída. Há um database improvisado em um arquivo JSON, logo, há o salvamento de todos testes nesse arquivo (Salva posição inicial, movimento que será feito, qual foi o movimento feito e psoição final). Ainda, há um log completo do cadastro e uma melhor organização dos arquivos. Para rodar, novamente basta acionar o `node index`. 

## Versão 3 (Branch v3)
Essa versão já implementa uma API Express com um banco de dados PostgreSql (utilizando Prisma ORM). Abaixo há um passo a passo de como rodar a versão
```bash
# Primeiro é necessário criar um arquivo .env e configurar com os dados do container postgre que será criado

# Segundo é criar um container postgresql, seguindo o compose como ele está
$ docker compose up -d

# Instalar as dependências npm do projeto
$ npm install

# Aplicar as migrations no banco de dados
$ npx prisma migrate deploy

# Rodar o servidor
$ node src/index
```

## Versão 4 (Branch Main)
Esta é a versão final do teste técnico. É uma API Express com Prisma e possui alguns testes unitários em Jest na pasta `test`. Além disso, a aplicação está rodando em uma máquina virtual, com um banco de dados PostgreSQL na nuvem.

```
# Para realizar os testes
$ npm run test

# Para rodar a aplicação em ambiente local
$ npm run start
```

### Documentação da API:
A aplicação está rodando em uma máquina virtual da Railway, onde também está o PostgreSQL. 
- Domínio da aplicação: https://teste-infratoken-production.up.railway.app

<hr/>

**Rota POST (Cadastro de movimento):** `POST https://teste-infratoken-production.up.railway.app/movement`

```
# Corpo de requisição
{
    "initialPosition": "3 3 E", 
    "movementsToDo": "MRRMMRMRRM"
}
```

**Rota GET (Pegar todos os movimentos já realizados):** `GET https://teste-infratoken-production.up.railway.app/movement`

**Rota GET (Pegar um movimento específico pelo ID):** `GET https://teste-infratoken-production.up.railway.app/movement/:id`
