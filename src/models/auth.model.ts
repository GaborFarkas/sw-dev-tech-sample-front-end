import { ResponseModel } from "./response.model"

export interface LoginRequest {
    email?: string,
    password?: string
}

export interface JwtResponse extends ResponseModel {
    access_token: string,
    token_type: string,
    expires_in: number
}
