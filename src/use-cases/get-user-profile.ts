import { UsersRepository } from "@/repositories/users-repository";
import { User } from "@prisma/client";
import { ResourceNotFoundError } from "./erros/resource-not-found-error";

interface GetUserProfileUserCaseRequest {
  userId: string;
}

interface GetUserProfileUserCaseResponse {
  user: User;
}

export class GetUserProfileUseCase {
  constructor(private userRepository: UsersRepository) {}

  async execute({
    userId,
  }: GetUserProfileUserCaseRequest): Promise<GetUserProfileUserCaseResponse> {
    const user = await this.userRepository.findById(userId);

    if (!user) {
      throw new ResourceNotFoundError();
    }
    return {
      user,
    };
  }
}
