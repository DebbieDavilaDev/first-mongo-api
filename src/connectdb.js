import { MongoClient } from 'mongodb'
import { connectionString} from '../secrets.js'

const client = new MongoClient(connectionString)

await client.connect()
.catch (err => console.error(err))
// or do it this way:   .catch (console.error)
export const db = client.db('MyPlants')
