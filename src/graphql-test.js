const { graphql, buildSchema } = require('graphql')

const schema = buildSchema(`
  type Query {
    name: String,
    age: Int
  }
`)

const root = {
  name: () => 'zs',
  age: () => 18
}

graphql(schema, '{ name }', root).then(console.log)
graphql(schema, '{ name, age }', root).then(console.log)