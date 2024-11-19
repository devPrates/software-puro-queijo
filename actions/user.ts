'use server'

import { sql } from "@vercel/postgres"
import { z } from "zod"
import bcrypt from "bcrypt"
import { redirect } from "next/navigation"
import { User } from "#/types/user"
import { signIn } from "#/app/auth/provider"

const UserSchema = z.object({
    id: z.string(),
    name: z
        .string({ required_error: 'O nome é obrigatorio' })
        .min(6, 'O nome deve ter no mínimo 3 caracteres'),
    email: z.string().email('Insira um email válido'),
    password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
    image: z.string(),
    role: z.string()
})

const CreateUser = UserSchema.omit({ id: true, image: true, role: true })

type CreateUserState = {
    errors?: {
        name?: string[]
        email?: string[]
        password?: string[]
    }
}

export async function createUser(state: CreateUserState, formData: FormData) {
    const validatedFields = CreateUser.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
    })

    if(!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Preencha corretamente todos os campos'
        }
    }

    const { name, email, password } = validatedFields.data
    const hashdPassword = await bcrypt.hash(password, 10)
    const randomImage = "https://picsum.photos/200"
    const date = new Date().toISOString()
    const role = 'user'

    try {
        await sql`
            INSERT INTO users (name, email, password, image, role, created_at)
            VALUES (${name}, ${email}, ${hashdPassword}, ${randomImage}, ${role}, ${date})
        `
    } catch (error) {
        return { message: 'Falha ao inserir usuário no banco de dados' }
    }
    
    redirect('/auth/login')
}

export async function getUserByEmail(email: string) {
    try {
        const { rows } = await sql<User>`SELECT * FROM users WHERE email = ${email}`
        return rows[0]
    } catch (error) {
        throw new Error('Usuário não encontrado.')
    }
}

export async function authenticate(state: string | undefined, formData: FormData) {
    try {
        await signIn('credentials', Object.fromEntries(formData))
    } catch (error) {
        if((error as Error).message.includes('CredentialsSignin')) {
            return 'CredentialsSignin'
        }

        throw error
    }
}