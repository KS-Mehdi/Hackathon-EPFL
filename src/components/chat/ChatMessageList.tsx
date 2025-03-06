import React, { useRef, useEffect } from 'react';
import { ChatMessage, Message } from './ChatMessage';

interface ChatMessageListProps {
  messages: Message[];
  onReply: (messageId: string) => void;
}

export const ChatMessageList: React.FC<ChatMessageListProps> = ({
  messages,
  onReply,
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Group messages by date
  const groupMessagesByDate = () => {
    const groups: { date: string; messages: Message[] }[] = [];

    messages.forEach((message) => {
      const messageDate = message.timestamp.toDateString();
      const existingGroup = groups.find((group) => group.date === messageDate);

      if (existingGroup) {
        existingGroup.messages.push(message);
      } else {
        groups.push({
          date: messageDate,
          messages: [message],
        });
      }
    });

    return groups;
  };

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString(undefined, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    }
  };

  const messageGroups = groupMessagesByDate();

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messageGroups.map((group) => (
        <div key={group.date} className="space-y-1">
          {/* Date separator */}
          <div className="flex justify-center my-4">
            <div className="bg-gray-200 rounded-full px-3 py-1 text-xs text-gray-600 font-medium">
              {formatDate(group.date)}
            </div>
          </div>

          {/* Messages */}
          {group.messages.map((message, index) => (
            <ChatMessage
              key={message.id}
              message={message}
              prevMessage={index > 0 ? group.messages[index - 1] : undefined}
              onReply={onReply}
            />
          ))}
        </div>
      ))}

      {/* Typing indicator would go here */}

      <div ref={messagesEndRef} />
    </div>
  );
};
