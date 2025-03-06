import React from 'react';
import { ShieldCheck, Users, Trash } from 'lucide-react';
import { useChat } from '../../context/ChatContext';

interface ChatItemProps {
  chat: {
    id: string;
    name: string;
    avatar?: string;
    lastMessage: string;
    timestamp: Date;
    unreadCount: number;
    verified: boolean;
    isGroup: boolean;
  };
}

export const ChatItem: React.FC<ChatItemProps> = ({ chat }) => {
  const { selectedChatId, setSelectedChatId, deleteChat } = useChat();
  const isSelected = selectedChatId === chat.id;

  // Format the timestamp
  const formatTime = (date: Date) => {
    const now = new Date();
    const isToday = now.toDateString() === date.toDateString();
    const yesterday = new Date(now);
    yesterday.setDate(yesterday.getDate() - 1);
    const isYesterday = yesterday.toDateString() === date.toDateString();

    if (isToday) {
      return date.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });
    } else if (isYesterday) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
    }
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    deleteChat(chat.id);
  };

  return (
    <div
      className={`flex p-3 cursor-pointer relative group ${
        isSelected ? 'bg-blue-50' : 'hover:bg-gray-100'
      }`}
      onClick={() => setSelectedChatId(chat.id)}>
      {/* Avatar */}
      <div className="relative flex-shrink-0">
        <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-white font-medium overflow-hidden">
          {chat.avatar ? (
            <img
              src={chat.avatar}
              alt={chat.name}
              className="w-full h-full object-cover"
            />
          ) : (
            chat.name.charAt(0)
          )}
        </div>
        {chat.isGroup && (
          <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1">
            <Users className="w-3 h-3 text-white" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 ml-3 overflow-hidden">
        <div className="flex justify-between items-start">
          <div className="font-medium truncate">{chat.name}</div>
          <div className="text-xs text-gray-500 whitespace-nowrap ml-1">
            {formatTime(chat.timestamp)}
          </div>
        </div>

        <div className="flex justify-between items-center mt-1">
          <div className="text-sm text-gray-600 truncate pr-2">
            {chat.lastMessage}
          </div>

          <div className="flex items-center space-x-1">
            {chat.verified && (
              <ShieldCheck className="w-3 h-3 text-green-500" />
            )}

            {chat.unreadCount > 0 && (
              <div className="bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {chat.unreadCount}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Delete button - visible on hover */}
      <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          className="p-1 bg-gray-200 rounded-full hover:bg-red-100 hover:text-red-500"
          onClick={handleDelete}>
          <Trash className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
