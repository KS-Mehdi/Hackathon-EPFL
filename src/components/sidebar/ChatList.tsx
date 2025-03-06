import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { ChatItem } from './ChatItem';
import { useChat } from '../../context/ChatContext';

export const ChatList: React.FC = () => {
  const { chats } = useChat();
  const [searchQuery, setSearchQuery] = useState('');

  // Filter chats based on search query
  const filteredChats = chats.filter(
    (chat) =>
      chat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chat.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort chats by timestamp (newest first)
  const sortedChats = [...filteredChats].sort(
    (a, b) => b.timestamp.getTime() - a.timestamp.getTime()
  );

  return (
    <div>
      {/* Search bar */}
      <div className="p-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search chats"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 pl-8 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="w-4 h-4 text-gray-500 absolute left-2 top-3" />
        </div>
      </div>

      {/* Chat list */}
      <div className="divide-y">
        {sortedChats.length > 0 ? (
          sortedChats.map((chat) => <ChatItem key={chat.id} chat={chat} />)
        ) : (
          <div className="p-4 text-center text-gray-500">
            {searchQuery
              ? 'No chats found.'
              : 'No chats yet. Start a new conversation!'}
          </div>
        )}
      </div>
    </div>
  );
};
