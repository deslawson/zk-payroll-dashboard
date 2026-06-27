import { Bell, Search, User } from 'lucide-react';
import { ROLE_LABELS } from '@/lib/auth/roles';
import type { UserRole } from '@/types';

function Header({ role }: { role: UserRole }) {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm border-b">
      <div className="flex items-center" role="search">
        <Search className="w-5 h-5 text-gray-600" aria-hidden="true" />
        <label htmlFor="global-search" className="sr-only">
          Search
        </label>
        <input
          id="global-search"
          className="ml-2 outline-none bg-transparent placeholder-gray-400 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:rounded"
          type="search"
          placeholder={`Search ${ROLE_LABELS[role].toLowerCase()} workspace...`}
        />
      </div>
      <div className="flex items-center space-x-4">
        <button
          className="text-gray-600 hover:text-gray-800 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none focus-visible:rounded"
          aria-label="Notifications"
        >
          <Bell className="w-5 h-5" aria-hidden="true" />
        </button>
        <div
          className="flex items-center space-x-2"
          role="group"
          aria-label="User profile"
        >
          <div
            className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center"
            aria-hidden="true"
          >
            <User className="w-5 h-5 text-gray-600" />
          </div>
          <span className="text-sm font-medium text-gray-700">{ROLE_LABELS[role]}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
