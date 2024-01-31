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
       credentials: {},
      async authorize(credentials) {
        
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
            session.accessToken = token.accessToken;
            if(session?.accessToken ) {
                const url = process.env.NEXT_API_URL + 'usuario/login';
                const userRes = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${token.accessToken}`
                    }
                })
                if(userRes.ok) {
                    const userDetails = await userRes.json();
                  session.user = userDetails;
                 
                    
                }
            }
          return session
        },
    
      },
    


pages: {
  signIn: '/account/login',
  newUser: '/account/register'
  },
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === 'development'
}

const handler = NextAuth(authOptions)


export { handler as GET, handler as POST }




