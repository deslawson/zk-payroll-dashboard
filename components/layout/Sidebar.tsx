'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Users, Settings, History, Shield, Play, Building2, Landmark } from 'lucide-react';
import { getNavigationForRole, ROLE_LABELS } from '@/lib/auth/roles';
import type { NavigationItem } from '@/lib/auth/roles';
import type { UserRole } from '@/types';

const icons: Record<NavigationItem['icon'], React.ComponentType<{ className?: string }>> = {
  home: Home,
  users: Users,
  settings: Settings,
  history: History,
  shield: Shield,
  play: Play,
  building: Building2,
  treasury: Landmark,
};

function Sidebar({ role }: { role: UserRole }) {
  const pathname = usePathname();
  const items = getNavigationForRole(role);

  return (
    <div className="hidden md:block w-64 bg-white shadow-md">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800">ZK Payroll</h1>
        <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-indigo-600">
          {ROLE_LABELS[role]} workspace
        </p>
      </div>
      <nav className="mt-6" aria-label={`${ROLE_LABELS[role]} navigation`}>
        {items.map((item) => {
          const Icon = icons[item.icon];
          const disabled = item.access?.[role] === 'disabled';
          const active = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
          const className = active
            ? 'flex items-center px-6 py-3 text-gray-700 bg-gray-100 border-r-4 border-blue-500'
            : 'flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900';

          if (disabled) {
            return (
              <span
                key={item.href}
                className="flex items-center px-6 py-3 text-gray-400 cursor-not-allowed"
                aria-disabled="true"
                title={item.disabledReason?.[role]}
              >
                <Icon className="w-5 h-5 mr-3" />
                {item.label}
              </span>
            );
          }

          return (
            <Link key={item.href} className={className} href={item.href} aria-current={active ? 'page' : undefined}>
              <Icon className="w-5 h-5 mr-3" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export default Sidebar;
