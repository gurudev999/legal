import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('api/auth')
export class AuthController {
  @Get('me')
  @ApiOperation({
    summary: 'Get current user (placeholder)',
    description:
      'Auth provider not yet configured. Add CLERK_SECRET_KEY or configure Auth.js to enable authentication.',
  })
  me() {
    return {
      message: 'Auth provider not yet configured',
      user: null,
    };
  }
}
