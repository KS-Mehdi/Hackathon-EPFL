import React from 'react';
import { ShieldCheck, MessageSquare } from 'lucide-react';
import { useChat, Contact } from '../../context/ChatContext';

interface ContactItemProps {
  contact: Contact;
}

export const ContactItem: React.FC<ContactItemProps> = ({ contact }) => {
  const { createChat } = useChat();

  const handleStartChat = () => {
    createChat(contact.id);
  };

  return (
    <div className="flex items-center p-3 hover:bg-gray-100 cursor-pointer">
      {/* Avatar */}
      <div className="relative flex-shrink-0">
        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-white font-medium overflow-hidden">
          {contact.avatar ? (
            <img
              src={contact.avatar}
              alt={contact.name}
              className="w-full h-full object-cover"
            />
          ) : (
            contact.name.charAt(0)
          )}
        </div>
        <div
          className={`absolute bottom-0 right-0 w-3 h-3 border-2 border-white rounded-full ${
            contact.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
          }`}></div>
      </div>

      {/* Content */}
      <div className="ml-3 flex-1">
        <div className="flex items-center">
          <div className="font-medium">{contact.name}</div>
          {contact.verified && (
            <ShieldCheck className="w-4 h-4 ml-1 text-green-500" />
          )}
        </div>
        <div className="text-xs text-gray-500">
          {contact.status === 'online' ? 'Online' : 'Offline'}
        </div>
      </div>

      {/* Action */}
      <button
        className="p-2 rounded-full hover:bg-gray-200"
        onClick={handleStartChat}>
        <MessageSquare className="w-5 h-5 text-blue-500" />
      </button>
    </div>
  );
};
