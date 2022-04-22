import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }

  @Get('all')
  getInfo() {
    return this.authService.getInfo();
  }

  @Delete('del')
  delInfo(@Body() dto: AuthDto) {
    return this.authService.delInfo(dto);
  }

  @Patch('update')
  updateInfo(@Body() dto: AuthDto) {
    return this.authService.updateInfo(dto);
  }
}
