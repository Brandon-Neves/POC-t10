# POC-t10

# Proof of concept Typescript

### ao baixar o projeto com:

```
git clone https://github.com/Brandon-Neves/POC-t10
```

### execute o comando:

```
npm i
```

# rotas

## get "/health"

#### retornará

```
Server is running
```

## get "/movies"

#### retornará:

```
[
  {
    "id": 1,
    "name": "Avatar",
    "year": "2023",
    "director": "James Cameron",
    "studio": "20th Century Studios e Lightstorm Entertainment"
  }
]
```

## post "/movie"

### corpo da requisição:

```
{
  "name": "Avatar",
  "year":2023,
  "director": "James Cameron",
  "Studio": "20th Century Studios e Lightstorm Entertainment"
}
```

### retornará:

```
Filme criado com sucesso
```

## delete "/movie/:id"

### retornará:

```
filme deletado com sucesso junto do status code 200
```

## put "/movie/:id"

### retornará em caso de sucesso:

```
Filme Atualizado com sucesso junto do status code 200
```

### ou em caso de erro

```
Status code de Não encontrado
```

### ou em caso de erro

```
Status code de Bad request
```
