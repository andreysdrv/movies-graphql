import { createYoga } from 'graphql-yoga'
import { createServer } from 'node:http'
import { schema } from './graphql/schema'
import { PORT } from './utils'

const yoga = createYoga({ schema })

const server = createServer(yoga)

server.listen(PORT, () => console.info(`Server is running on port: ${PORT}`))
