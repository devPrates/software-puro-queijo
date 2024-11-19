import { z } from "zod"
import { authConfig } from "./auth.config"
import Credentials from "next-auth/providers/credentials"
import { getUserByEmail } from "#/actions/user"
import bcrypt from "bcrypt"
import NextAuth from "next-auth"

const providers = {
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z.object({
                    email: z.string().email('Insira um email válido'),
                    password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres')
                }).safeParse(credentials)

                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data
                    const user = await getUserByEmail(email)

                    if (!user) {
                        return null;
                    }

                    const passwordsMatch = await bcrypt.compare(password, user.password)

                    if (passwordsMatch) {
                        return user
                    }
                }
                return null
            },
        }),
    ],
}

export const { auth, signIn, signOut  } = NextAuth(providers)