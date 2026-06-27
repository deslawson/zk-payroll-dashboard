import { Bell, Search, User } from "lucide-react";

function Header() {
  return (
    <header className="flex items-center justify-between pl-16 pr-6 py-4 md:px-6 bg-white shadow-sm border-b">
      <div className="flex items-center" role="search">
        <Search className="w-5 h-5 text-gray-600 flex-shrink-0" aria-hidden="true" />
        <label htmlFor="global-search" className="sr-only">
          Search
        </label>
        <input
          id="global-search"
          className="ml-2 outline-none bg-transparent placeholder-gray-400 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:rounded min-w-0"
          type="search"
          placeholder="Search..."
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
            className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0"
            aria-hidden="true"
          >
            <User className="w-5 h-5 text-gray-600" />
          </div>
          <span className="hidden sm:inline text-sm font-medium text-gray-700">Admin</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
