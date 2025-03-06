import React, { useState } from 'react';
import { X, Search } from 'lucide-react';
import { useChat, Contact } from '../../context/ChatContext';

interface NewChatModalProps {
  onClose: () => void;
}

export const NewChatModal: React.FC<NewChatModalProps> = ({ onClose }) => {
  const { contacts, createChat } = useChat();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectContact = (contactId: string) => {
    createChat(contactId);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
      <div className="bg-white rounded-lg w-full max-w-md max-h-[80vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="font-medium text-lg">New Chat</h3>
          <button
            className="p-1 rounded-full hover:bg-gray-100"
            onClick={onClose}>
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Search */}
        <div className="p-3 border-b">
          <div className="relative">
            <input
              type="text"
              placeholder="Search contacts"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-2 pl-8 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="w-4 h-4 text-gray-500 absolute left-2 top-3" />
          </div>
        </div>

        {/* Contact list */}
        <div className="flex-1 overflow-y-auto">
          {filteredContacts.length > 0 ? (
            <div className="divide-y">
              {filteredContacts.map((contact) => (
                <ContactItem
                  key={contact.id}
                  contact={contact}
                  onSelect={handleSelectContact}
                />
              ))}
            </div>
          ) : (
            <div className="p-4 text-center text-gray-500">
              No contacts found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface ContactItemProps {
  contact: Contact;
  onSelect: (contactId: string) => void;
}

const ContactItem: React.FC<ContactItemProps> = ({ contact, onSelect }) => {
  return (
    <div
      className="flex items-center p-3 hover:bg-gray-100 cursor-pointer"
      onClick={() => onSelect(contact.id)}>
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

      {/* Name */}
      <div className="ml-3 flex-1">
        <div className="font-medium">{contact.name}</div>
        <div className="text-xs text-gray-500">
          {contact.status === 'online' ? 'Online' : 'Offline'}
        </div>
      </div>
    </div>
  );
};
