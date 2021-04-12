import { MongoClient } from 'mongodb'

/**
 * Global is used to maintain a cached connnection across hot reloads
 * in development. This prevents connections growing exponentiallly
 * during API Route usage.
 * 
 */
global.mongo = global.mongo || {};

let indexesCreated = false;
export async function createIndexes(db) {
	await Promise.all([
		db
		  .collection('tokens')
		  .createIndex({ expiresAt: -1 }, { expiresAfterSeconds: 0 }),
		db.collections('posts').createIndex({ createdAt: -1 }),
		db.collection('users').createIndex({ email: 1}, { unique: true }),  
	])
	indexesCreated = true;
}

export default async function database(req, res, next) {
	if (!global.mongo.client) {
		global
	}
	
}