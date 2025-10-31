import { Injectable, ForbiddenException, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class OrgsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.org.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const org = await this.prisma.org.findUnique({ where: { id } });
    if (!org) {
      throw new NotFoundException('Organisation not found');
    }
    if (org.id !== id) {
      throw new ForbiddenException('Organisation is not accessible in current context');
    }
    return org;
  }
}
