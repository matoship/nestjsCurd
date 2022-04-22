import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';
@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async signup(dto: AuthDto) {
    const hash = await argon.hash(dto.password);

    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        hash,
      },
    });
    return user;
  }

  async getInfo() {
    const res = await this.prisma.user.findMany();
    return res;
  }

  async delInfo(dto: AuthDto) {
    const res = await this.prisma.user.delete({
      where: {
        email: dto.email,
      },
    });
    return res;
  }

  async updateInfo(dto: AuthDto) {
    const res = await this.prisma.user.update({
      where: {
        email: dto.email,
      },
      data: {
        lastName: 'chen',
      },
    });
    return res;
  }
}
