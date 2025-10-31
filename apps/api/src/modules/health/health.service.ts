import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  check() {
    return {
      status: 'ok',
      timestamp: Date.now(),
      uptime: process.uptime(),
      timezone: 'Asia/Kolkata',
      locale: 'en-IN',
    };
  }
}
