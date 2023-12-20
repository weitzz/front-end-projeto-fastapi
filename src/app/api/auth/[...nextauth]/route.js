import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: 'Credentials',
      async authorize(credentials, req) {
         const url = process.env.NEXT_API_URL + 'usuario/login';
            const formData = new URLSearchParams();
            formData.append('username', credentials.email);
            formData.append('password', credentials.password);
        

        const res = await fetch(url, {
          method: "POST",
          headers: { "Accept": "application/json" },
          body: formData
        })
         if (res.ok) {
       const newUsuario = await res.json();
       return newUsuario;
    } else {
      console.error("Erro ao logar");
    }
      }
        
    })
  ],
  session: {
        strategy: 'jwt'
    },
  callbacks: {
        async session({ session, token }) {
          console.log(session)
            session.accessToken = token.accessToken;
            if(session?.accessToken ?? false) {
                const url = process.env.NEXT_API_URL + 'usuario/login'
                const userRes = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${token.accessToken}`
                    }
                })
              if (userRes.ok) {
                  
                    const userDetails = await userRes.json();
                    
                    session.user = userDetails;
                    session.user.name = `${userDetails.name}`
                }
            }
          return session
        },
        // async jwt({ token, user}) {
        //     if(user) {
        //         token.refreshToken = user.refresh_token;
        //         token.accessToken = user.access_token;
        //         token.expiresIn = (Date.now() + (parseInt(user.expires_in) * 1000) - 2000);
        //     }
        //     if(Date.now() < token.expiresIn) {
        //         return token;
        //     }
        //     return await refreshTokenApiCall(token)
        // }
      },
pages: {
        login: '/login',
        newUser: '/register'
      }
}

const handler = NextAuth(authOptions)


export { handler as GET, handler as POST }