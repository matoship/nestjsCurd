import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
@Module({
  imports: [UserModule, BookmarkModule, AuthModule, PrismaModule],
})
export class AppModule {}
