import Link from 'next/link';
import * as React from 'react';

import { cn } from '../lib/utils';
import { Button } from './button';

export interface NavbarProps {
  isAuthenticated?: boolean;
  orgName?: string;
}

export function Navbar({ isAuthenticated = false, orgName }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-lg font-semibold tracking-tight text-brand-700">Legal CRM</span>
        </Link>
        <nav className="flex items-center space-x-4">
          <Link
            href="/features"
            className={cn('text-sm font-medium text-slate-600 hover:text-brand-600')}
          >
            Features
          </Link>
          <Link href="/pricing" className="text-sm font-medium text-slate-600 hover:text-brand-600">
            Pricing
          </Link>
          <Link href="/support" className="text-sm font-medium text-slate-600 hover:text-brand-600">
            Support
          </Link>
          {isAuthenticated ? (
            <Button variant="ghost" className="text-sm font-medium">
              {orgName ?? 'Switch organisation'}
            </Button>
          ) : (
            <Button asChild>
              <Link href="/signin">Sign in</Link>
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
}
