import { it , describe, expect } from 'vitest'
import { RegisterUseCase } from './register'
import { compare } from 'bcryptjs'

describe('Regiter Use Case', () => {
    it('should hash user passworld upon registration', async () => {

        const registerUseCase = new RegisterUseCase({
            async findByEmail(email) {
              return null
            },
      
            async create(data) {
              return {
                id: 'user-1',
                name: data.name,
                email: data.email,
                password_hash: data.password_hash,
                created_at: new Date(),
              }
            },
          })
        const { user } = await registerUseCase.execute({
            name: 'John Doe',
            email: 'johndoe@example.com',
            password: '123456',
        })

        const isPasswoldCorrectlyHashed = await compare(
        '123456',
        user.password_hash,   
        )
        expect(isPasswoldCorrectlyHashed).toBe(true)
        
    })
})