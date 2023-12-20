
const refreshTokenApiCall = async (token: string) => {
    const url = process.env.NEXT_PUBLIC_API_URL + '/auth/refresh';
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "refresh-token": token.refreshToken
        }
    })
    if(res.ok) {
        const data = await res.json();
        return {
            ...token,
            error: null,
            accessToken: data.access_token,
            refreshToken: data.refreshToken,
            expiresIn: (Date.now() + (parseInt(data.expires_in) * 1000) - 2000)
        }
    } else {
        return {
            error: "RefreshTokenTokenError"
        }
    }
}