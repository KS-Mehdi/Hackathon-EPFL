import React, { useState } from 'react';
import { Users } from 'lucide-react';
import { SidebarHeader } from './SidebarHeader';
import { ChatList } from './ChatList';
import { ContactList } from './ContactList';
import { NewChatModal } from '../modals/NewChatModal';
import { NewGroupModal } from '../modals/NewGroupModal';

export const Sidebar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'chats' | 'contacts'>('chats');
  const [showNewChatModal, setShowNewChatModal] = useState(false);
  const [showNewGroupModal, setShowNewGroupModal] = useState(false);

  return (
    <div className="flex flex-col h-full bg-white shadow-md w-80">
      <SidebarHeader />

      {/* Tabs */}
      <div className="flex border-b">
        <button
          className={`flex-1 py-3 font-medium text-sm ${
            activeTab === 'chats'
              ? 'text-blue-500 border-b-2 border-blue-500'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
          onClick={() => setActiveTab('chats')}>
          Chats
        </button>
        <button
          className={`flex-1 py-3 font-medium text-sm ${
            activeTab === 'contacts'
              ? 'text-blue-500 border-b-2 border-blue-500'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
          onClick={() => setActiveTab('contacts')}>
          Contacts
        </button>
      </div>

      {/* List content */}
      <div className="flex-1 overflow-y-auto">
        {activeTab === 'chats' ? <ChatList /> : <ContactList />}
      </div>

      {/* Actions */}
      <div className="p-3 border-t">
        {activeTab === 'chats' ? (
          <div className="flex space-x-2">
            <button
              className="flex-1 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
              onClick={() => setShowNewChatModal(true)}>
              New Chat
            </button>
            <button
              className="p-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
              onClick={() => setShowNewGroupModal(true)}>
              <Users className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <button
            className="w-full py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
            onClick={() => setShowNewChatModal(true)}>
            New Chat
          </button>
        )}
      </div>

      {/* Modals */}
      {showNewChatModal && (
        <NewChatModal onClose={() => setShowNewChatModal(false)} />
      )}

      {showNewGroupModal && (
        <NewGroupModal onClose={() => setShowNewGroupModal(false)} />
      )}
    </div>
  );
};
