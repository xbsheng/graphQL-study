const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')

const cors = require('cors')

const schema = buildSchema(`
  type Query{
    name: String,
    age: Int
  }
`)

const rootValue = {
  name: () => 'zs123',
  age: 18
}

const app = express()
app.use(cors()) // 允许跨域
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue,
  graphiql: true
}))

app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'))