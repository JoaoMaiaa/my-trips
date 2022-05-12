import { GraphQLClient } from 'graphql-request'

const endpoint = process.env.GRAPHQL_HOST || ''

// autorização é necessária! se eu definir que é necessário o token de acesso
// e só quem tem pode acessar o conteúdo quem não tem não irá conseguir
// e isto é bom por questões de segurança
// a api não pode ser disponível para todos
// evita também ataque ddos

const client = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.GRAPHQL_TOKEN}`
  }
})

export default client
