import React, { useState } from 'react';
import {
  ShieldCheck,
  Check,
  CheckCheck,
  MoreVertical,
  Reply,
} from 'lucide-react';

export interface Message {
  id: string;
  sender: {
    id: string;
    name: string;
    avatar?: string;
  };
  content: string;
  timestamp: Date;
  status: 'sent' | 'delivered' | 'read';
  verified: boolean;
  isMine: boolean;
  replyTo?: {
    id: string;
    content: string;
    sender: string;
  };
}

interface ChatMessageProps {
  message: Message;
  prevMessage?: Message;
  onReply: (messageId: string) => void;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  prevMessage,
  onReply,
}) => {
  const [showActions, setShowActions] = useState(false);

  // Determine if this is part of a sequence from the same sender
  const isSequential =
    prevMessage &&
    prevMessage.sender.id === message.sender.id &&
    message.timestamp.getTime() - prevMessage.timestamp.getTime() < 60000; // 1 minute

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Status icon
  const StatusIcon = () => {
    if (!message.isMine) return null;

    switch (message.status) {
      case 'sent':
        return <Check className="w-3.5 h-3.5" />;
      case 'delivered':
        return <CheckCheck className="w-3.5 h-3.5 text-gray-400" />;
      case 'read':
        return <CheckCheck className="w-3.5 h-3.5 text-blue-500" />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`flex flex-col ${
        message.isMine ? 'items-end' : 'items-start'
      } ${isSequential ? 'mt-1' : 'mt-4'}`}
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}>
      {/* Reply Reference */}
      {message.replyTo && (
        <div
          className={`flex items-center max-w-[75%] rounded px-2 py-1 text-xs mb-1 opacity-75 ${
            message.isMine ? 'bg-blue-100 mr-2' : 'bg-gray-100 ml-2'
          }`}>
          <div className="w-0.5 h-8 mr-2 bg-gray-400"></div>
          <div>
            <div className="font-medium text-blue-500">
              {message.replyTo.sender}
            </div>
            <div className="truncate">{message.replyTo.content}</div>
          </div>
        </div>
      )}

      {/* Message Container */}
      <div className="group relative flex max-w-[75%]">
        {/* Sender Avatar (only for first message in sequence) */}
        {!message.isMine && !isSequential && (
          <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0 mr-2 overflow-hidden">
            {message.sender.avatar ? (
              <img
                src={message.sender.avatar}
                alt={message.sender.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white font-medium">
                {message.sender.name.charAt(0)}
              </div>
            )}
          </div>
        )}

        {/* Message Space for alignment */}
        {!message.isMine && isSequential && <div className="w-8 mr-2"></div>}

        {/* Message Content */}
        <div
          className={`relative rounded-lg px-3 py-2 shadow-sm ${
            message.isMine
              ? 'bg-blue-500 text-white rounded-tr-none'
              : 'bg-white border rounded-tl-none'
          }`}>
          {/* Sender name (for group chats, non-sequential messages) */}
          {!message.isMine && !isSequential && (
            <div className="text-xs font-medium text-blue-500 mb-1">
              {message.sender.name}
            </div>
          )}

          {/* Message Text */}
          <p className="text-sm whitespace-pre-wrap break-words">
            {message.content}
          </p>

          {/* Message Footer */}
          <div
            className={`flex items-center space-x-1 text-xs mt-1 ${
              message.isMine ? 'text-blue-100' : 'text-gray-500'
            }`}>
            <span>{formatTime(message.timestamp)}</span>
            {message.verified && <ShieldCheck className="w-3 h-3" />}
            <StatusIcon />
          </div>
        </div>

        {/* Message Actions - visible on hover */}
        {showActions && (
          <div
            className={`absolute top-0 ${
              message.isMine
                ? 'left-0 -translate-x-full'
                : 'right-0 translate-x-full'
            } flex bg-white rounded-full shadow-md p-1`}>
            <button
              className="p-1 rounded-full hover:bg-gray-100"
              onClick={() => onReply(message.id)}>
              <Reply className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-1 rounded-full hover:bg-gray-100">
              <MoreVertical className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
