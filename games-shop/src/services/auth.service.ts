import qs from 'qs'
import axios, { AxiosResponse } from 'axios'

import { LoginRequestType } from '@projectTypes/auth.types'

import { LOGIN_REQUEST_ENDPOINT } from '@config/endpoints'

export const loginRequest = async (
    data: LoginRequestType
): Promise<AxiosResponse<any, any>> => {
    const clientId: string | null = localStorage.getItem('client_id')
    const scope: string | null = localStorage.getItem('scope')
    const body = {
        grant_type: 'password',
        username: data.login,
        password: data.password,
        client_id: clientId || 'Default',
        scope: scope || 'APIs',
    }
    console.log(body)
    return axios.post(`${LOGIN_REQUEST_ENDPOINT}`, qs.stringify(body), {
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
        },
    })
}
