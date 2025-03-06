import React from 'react';
import { X, ShieldCheck, Bell, Lock, Trash } from 'lucide-react';
import { useChat } from '../../context/ChatContext';

interface ChatInfoProps {
  chat: {
    id: string;
    name: string;
    avatar?: string;
    status?: 'online' | 'offline';
    isGroup?: boolean;
    participants?: { id: string; name: string; avatar?: string }[];
  };
  onClose: () => void;
}

export const ChatInfo: React.FC<ChatInfoProps> = ({ chat, onClose }) => {
  const { deleteChat } = useChat();
  return (
    <div className="h-full flex flex-col bg-white border-l shadow-lg">
      <div className="flex items-center justify-between p-4 border-b">
        <h3 className="font-medium">Chat Information</h3>
        <button
          className="p-1 rounded-full hover:bg-gray-100"
          onClick={onClose}>
          <X className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Contact/Group Info */}
        <div className="p-6 flex flex-col items-center border-b">
          <div className="w-24 h-24 bg-gray-300 rounded-full mb-3 overflow-hidden">
            {chat.avatar ? (
              <img
                src={chat.avatar}
                alt={chat.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white text-4xl font-medium">
                {chat.name.charAt(0)}
              </div>
            )}
          </div>

          <h2 className="text-xl font-semibold">{chat.name}</h2>

          {!chat.isGroup && chat.status && (
            <div className="flex items-center space-x-1 mt-1 text-sm text-gray-600">
              <div
                className={`w-2 h-2 rounded-full ${
                  chat.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
                }`}></div>
              <span>{chat.status === 'online' ? 'Online' : 'Offline'}</span>
            </div>
          )}

          {chat.isGroup && (
            <div className="text-sm text-gray-600 mt-1">
              {chat.participants?.length} participants
            </div>
          )}
        </div>

        {/* Security Info */}
        <div className="p-4 border-b">
          <h4 className="font-medium mb-3">Security</h4>

          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-full">
                <ShieldCheck className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="font-medium">Verified</div>
                <div className="text-sm text-gray-600">
                  All messages are verified
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 rounded-full">
                <Lock className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div className="font-medium">End-to-End Encrypted</div>
                <div className="text-sm text-gray-600">Messages are secure</div>
              </div>
            </div>
          </div>
        </div>

        {/* Group Participants (if applicable) */}
        {chat.isGroup && chat.participants && (
          <div className="p-4 border-b">
            <h4 className="font-medium mb-3">Participants</h4>

            <div className="space-y-2">
              {chat.participants.map((participant) => (
                <div
                  key={participant.id}
                  className="flex items-center p-2 hover:bg-gray-100 rounded-lg">
                  <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
                    {participant.avatar ? (
                      <img
                        src={participant.avatar}
                        alt={participant.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white font-medium">
                        {participant.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div className="ml-3">{participant.name}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Media and Files (placeholder) */}
        <div className="p-4 border-b">
          <h4 className="font-medium mb-3">Shared Media</h4>
          <div className="text-sm text-gray-600">No media shared yet</div>
        </div>
      </div>

      {/* Actions */}
      <div className="p-4 border-t space-y-2">
        <button className="flex items-center space-x-2 w-full p-2 text-left hover:bg-gray-100 rounded-lg">
          <Bell className="w-5 h-5 text-gray-600" />
          <span>Mute Notifications</span>
        </button>

        <button
          className="flex items-center space-x-2 w-full p-2 text-left text-red-500 hover:bg-red-50 rounded-lg"
          onClick={() => {
            const confirmed = window.confirm(
              `Are you sure you want to delete this chat with ${chat.name}?`
            );
            if (confirmed) {
              onClose();
              // We need to add a small delay to allow the panel to close before deleting
              setTimeout(() => {
                deleteChat(chat.id);
              }, 100);
            }
          }}>
          <Trash className="w-5 h-5" />
          <span>Delete Chat</span>
        </button>
      </div>
    </div>
  );
};
