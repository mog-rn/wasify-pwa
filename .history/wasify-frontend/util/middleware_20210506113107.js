//middleware
import nextConnect from 'next-connect'
import database from './mongodb'
import session from './session'

const middleware = nextConnect();

mid