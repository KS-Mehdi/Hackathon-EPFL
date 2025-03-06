import React, { useState } from 'react';
import { ChatHeader } from './ChatHeader';
import { ChatMessageList } from './ChatMessageList';
import { ChatInput } from './ChatInput';
import { ChatInfo } from '../info/ChatInfo';
import { useChat } from '../../context/ChatContext';

export const ChatWindow: React.FC = () => {
  const { chats, selectedChatId, sendMessage } = useChat();
  const [showInfo, setShowInfo] = useState(false);
  const [replyTo, setReplyTo] = useState<
    | {
        id: string;
        content: string;
        sender: string;
      }
    | undefined
  >(undefined);

  // Get the currently selected chat
  const selectedChat = selectedChatId
    ? chats.find((chat) => chat.id === selectedChatId)
    : null;

  const handleSendMessage = (content: string) => {
    if (selectedChatId) {
      sendMessage(selectedChatId, content, replyTo?.id);
      setReplyTo(undefined);
    }
  };

  const handleReply = (messageId: string) => {
    if (!selectedChat) return;

    const messageToReply = selectedChat.messages.find(
      (msg) => msg.id === messageId
    );
    if (messageToReply) {
      setReplyTo({
        id: messageId,
        content: messageToReply.content,
        sender: messageToReply.sender.name,
      });
    }
  };

  // If no chat is selected, show a placeholder
  if (!selectedChat) {
    return (
      <div className="flex flex-col items-center justify-center h-full bg-gray-50">
        <div className="text-gray-400 text-lg font-medium">
          Select a chat or start a new conversation
        </div>
      </div>
    );
  }

  // Create a chat data object for the header and info panel
  const chatData = {
    id: selectedChat.id,
    name: selectedChat.name,
    avatar: selectedChat.avatar,
    status: selectedChat.isGroup
      ? undefined
      : selectedChat.participants?.find((p) => p.id !== 'me')?.status ||
        'offline',
    isGroup: selectedChat.isGroup,
    participants: selectedChat.participants,
  };

  return (
    <div className="flex h-full overflow-hidden">
      {/* Main chat area */}
      <div className="flex flex-col flex-1 bg-gray-50">
        <ChatHeader
          chat={chatData}
          onInfoToggle={() => setShowInfo(!showInfo)}
        />

        <ChatMessageList
          messages={selectedChat.messages}
          onReply={handleReply}
        />

        <ChatInput
          onSendMessage={handleSendMessage}
          replyTo={replyTo}
          onCancelReply={() => setReplyTo(undefined)}
        />
      </div>

      {/* Info panel - conditionally shown */}
      {showInfo && (
        <ChatInfo chat={chatData} onClose={() => setShowInfo(false)} />
      )}
    </div>
  );
};
