import { Controller, Get, Param, Headers, UnauthorizedException } from '@nestjs/common';
import { ApiOperation, ApiTags, ApiHeader, ApiResponse } from '@nestjs/swagger';

import { OrgsService } from './orgs.service';

@ApiTags('orgs')
@Controller('api/orgs')
export class OrgsController {
  constructor(private readonly orgsService: OrgsService) {}

  @Get()
  @ApiOperation({ summary: 'List organisations' })
  @ApiHeader({ name: 'x-org-id', required: false })
  @ApiResponse({ status: 401, description: 'Unauthorized - Auth not configured' })
  findAll(@Headers('x-org-id') orgId?: string) {
    if (!orgId) {
      throw new UnauthorizedException('x-org-id header required when auth is not configured');
    }
    return this.orgsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get organisation by ID' })
  @ApiHeader({ name: 'x-org-id', required: false })
  @ApiResponse({ status: 401, description: 'Unauthorized - Auth not configured' })
  @ApiResponse({ status: 403, description: 'Forbidden - org_id mismatch' })
  findOne(@Param('id') id: string, @Headers('x-org-id') orgId?: string) {
    if (!orgId) {
      throw new UnauthorizedException('x-org-id header required when auth is not configured');
    }
    return this.orgsService.findOne(id);
  }
}
