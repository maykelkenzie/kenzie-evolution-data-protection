import { database } from '../../database/index.js';


const listSpecificUserService = async (id) => {
    try {
        const res = `SELECT id, name, cpf, email FROM users WHERE id = '${id}';` 
        console.log(res);
        const users = await database.query(res)
        return users.rows
    } catch (error) {
        throw new Error(error)
    }
}

export default listSpecificUserService