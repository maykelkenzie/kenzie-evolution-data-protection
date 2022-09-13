import bcrypt from 'bcrypt';
import { database } from '../../database/index.js';


const listUsersService = async (userData) => {
    try {
        const res = `SELECT id, name, cpf, email FROM users;`
        const users = await database.query(res)

        return users.rows
        
    } catch (error) {
        throw new Error(error)
    }
}

export default listUsersService