import React, { useState } from 'react';
import { Send, Smile, X } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (content: string) => void;
  replyTo?: {
    id: string;
    content: string;
    sender: string;
  };
  onCancelReply: () => void;
}

export const ChatInput: React.FC<ChatInputProps> = ({
  onSendMessage,
  replyTo,
  onCancelReply,
}) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="p-4 border-t bg-white">
      {/* Reply indicator */}
      {replyTo && (
        <div className="flex items-center justify-between bg-gray-100 p-2 rounded-lg mb-2">
          <div className="flex items-start space-x-2">
            <div className="w-1 self-stretch bg-blue-500 rounded"></div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-medium text-blue-500">
                Replying to {replyTo.sender}
              </div>
              <div className="text-sm text-gray-600 truncate">
                {replyTo.content}
              </div>
            </div>
          </div>
          <button
            className="p-1 rounded-full hover:bg-gray-200"
            onClick={onCancelReply}>
            <X className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      )}

      {/* Message input */}
      <form onSubmit={handleSubmit} className="flex items-end space-x-2">
        <button
          type="button"
          className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
          <Smile className="w-6 h-6" />
        </button>

        <div className="flex-1 relative">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              // Send message on Enter without shift key
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                if (message.trim()) {
                  onSendMessage(message);
                  setMessage('');
                }
              }
            }}
            placeholder={replyTo ? 'Type a reply...' : 'Type a message...'}
            className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none max-h-32"
            rows={1}
          />
        </div>

        <button
          type="submit"
          disabled={!message.trim()}
          className={`p-3 rounded-full ${
            message.trim()
              ? 'bg-blue-500 text-white hover:bg-blue-600'
              : 'bg-gray-200 text-gray-400'
          }`}>
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};
