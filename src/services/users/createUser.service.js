import bcrypt from 'bcrypt';
import { database } from '../../database/index.js';


const createUserService = async (userData) => {
    try {
        if (!userData.password){
            throw new Error('An required info have not sended')
        }

        const hash = await bcrypt.hash(userData.password, 10)
        const res = 
            `INSERT INTO 
                users(name,cpf, email, password)
            VALUES($1, $2, $3, $4)
            RETURNING id, name, cpf, email;`

        const user = await database.query(res, [userData.name, userData.cpf, userData.email, hash])
        return user.rows[0]
        
    } catch (error) {
        throw new Error(error)
    }
}

export default createUserService