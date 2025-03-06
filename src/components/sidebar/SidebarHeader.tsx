import React from 'react';
import { Search, Settings } from 'lucide-react';

export const SidebarHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex-1 relative">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 pl-8 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search className="w-4 h-4 text-gray-500 absolute left-2 top-3" />
      </div>
      <button className="p-1 ml-2 rounded-full hover:bg-gray-100">
        <Settings className="w-5 h-5 text-gray-600" />
      </button>
    </div>
  );
};
