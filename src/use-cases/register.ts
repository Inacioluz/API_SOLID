import { prisma } from "@/lib/prisma";
import { hash } from "bcryptjs";
import { PrismaUsersRepository } from "@/repositories/prisma-users-repository";
import { InMemoryUsersRepository } from "@/repositories/in-memory-users-repository";

interface RegisterUseCaseRequest {
  name: string;
  email: string;
  password: string;
}

export class RegisterUseCase {

  constructor(private usersRepossitory: any) {}
  async execute({ name, email, password }: RegisterUseCaseRequest) {
    const password_hash = await hash(password, 6);

    const userWithSameEmail = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userWithSameEmail) {
      throw new Error("E-mail already registered");
    }

    //const prismaUsersRepository = new PrismaUsersRepository();

    await this.usersRepossitory.create({
      name,
      email,
      password_hash,
    });
  }
}
