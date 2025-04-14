// auth.ts (ou lib/auth.ts)
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/prisma" // Assurez-vous que ce chemin vers votre client Prisma est correct

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma), // Utilise l'adaptateur Prisma
  providers: [
    Google({
        // Utilise les variables d'environnement préfixées par AUTH_ par défaut
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Vous pourrez ajouter d'autres fournisseurs ici (GitHub, Email, etc.)
  ],
  trustHost: true, // Autoriser les hôtes localhost en développement
  // Optionnel: Définir des pages personnalisées (connexion, erreur)
  // pages: {
  //   signIn: '/auth/signin',
  //   // signOut: '/auth/signout',
  //   // error: '/auth/error', // Error code passed in query string as ?error=
  //   // verifyRequest: '/auth/verify-request', // (used for email/passwordless login)
  //   // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out to disable)
  // },
  // Optionnel: Callbacks pour personnaliser le comportement
  callbacks: {
    // Pour s'assurer que l'ID utilisateur est inclus dans la session et le jeton JWT
    async session({ session, user }) {
      // Ajoute l'ID utilisateur à l'objet session côté client
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
    // Vous pouvez ajouter d'autres callbacks ici (jwt, signIn, redirect) si nécessaire
  },
  // La variable AUTH_SECRET est lue automatiquement depuis process.env.AUTH_SECRET
  // session: { strategy: "jwt" }, // La stratégie par défaut (JWT) est généralement recommandée
})