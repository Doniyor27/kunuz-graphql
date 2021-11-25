import {
    fetch
} from '../../lib/postgres.js'

const loginQuery = `
    select * from users as u where u.email = $1 AND u.password = $2
`

const register = ({
    firstName,
    lastName,
    password,
    email,
    specialist
}) => {
    try {
        return fetch('insert into users (first_name, last_name, password, email, specialist) values ($1, $2, $3, $4, $5)', firstName, lastName, password, email, specialist)
    } catch (error) {
        throw console.log(error)
    }
};


const login = async ({
    email,
    password
}) => {
    try {
        const message = await fetch(loginQuery, email, password)
        return await message.rows
    } catch (error) {
        console.log(error);
    }
}  

export default {
    register,
    login
}