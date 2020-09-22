import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/'
})

export const request = (isChecked: boolean) => instance.post('auth/test', {success: isChecked})

