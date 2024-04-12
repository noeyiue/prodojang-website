// export const API_ENDPOINT="http://localhost:8080"

export const PAGE_ROUTES = {
    HOME: '/',
    LOGIN: '/login',
    REGISTER: '/register',
    FORGOT_PASSWORD: '/forgot-password'
}

export const API_ROUTES = {
    // Auth
    POST_REGISTER: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/v1/auth/register`,
    POST_LOGIN: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/v1/auth/login`,
    GET_ACCOUNT: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/v1/auth/account`,
}