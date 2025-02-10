# Itaú Unibanco - Desafio de Programação

## 1. Contexto

A proposta do desafio é criar uma API REST que recebe transações e retorna estatísticas sobre essas transações. Durante o desenvolvimento, aprendi um pouco sobre **Clean Code** e alguns conceitos do **SOLID**.  

## Tecnologias Utilizadas  

- **Fastify** - Framework web rápido para Node.js.  
- **TypeScript** - Linguagem com tipagem estática para JavaScript.  
- **Zod** - Biblioteca para validação de dados.  

## Para Executar o Projeto

1. Clone este repositório:

  ```bash
 git clone  https://github.com/David-Jos3/challenge-itau-backend.git
  ```

1. Instale as dependências:

  ```bash
  npm install
  ```

1. Execute o servidor em modo desenvolvimento:

  ```bash
  npm run dev
  ```

## Endpoints

### Transações

- Criar uma transação:

```bash
POST /transactions
```

- Body JSON:

```json
{
    "value": 123.45,
    "dateTime": "2025-02-10T12:34:56.789-03:00"
}
```

- Excluir uma transação:

```bash
DELETE /transactions/:id
```

### Estatísticas

- Obter estatísticas:

```bash
GET /statistics
```

- Resposta caso as transações tenham ocorrido há mais de 60 segundos:

```json
{
  "statistic": {
      "_id": "c236d837-a25b-46d6-834a-78c22874470a",
      "props": {
        "count": 0,
        "sum": 0,
        "avg": 0,
        "max": 0,
        "min": 0
      }
    }
}

```

- Resposta caso as transações tenham ocorrido nos últimos 60 segundos

```json
{
  "statistic": {
    "_id": "e2330a86-bc80-4d2b-8f38-be60ef53229e",
    "props": {
      "count": 1,
      "sum": 120,
      "avg": 120,
      "max": 120,
      "min": 120
    }
  }
}
```
