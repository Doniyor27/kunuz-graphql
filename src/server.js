import {
    ApolloServer
} from 'apollo-server'
import {
    ApolloServerPluginLandingPageGraphQLPlayground
} from 'apollo-server-core'
import modules from './modules/index.js'

const server = new ApolloServer({
    modules,
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
})

server.listen(process.env.PORT || 5600).then(({
    url
}) => console.log(url))