import React from 'react';

const RecentMessages: React.FC = () => {
  const messages = [
    { name: 'James Benny', message: `Hey, Let me know if you're still available...`, image: new URL('../assets/messages/james.png', import.meta.url).href },
    { name: 'William Chynita', message: 'Okay thanks', image: new URL('../assets/messages/william.png', import.meta.url).href },
    { name: 'Henry David', message: `Alright I'll get back to you ASAP`, image: new URL('../assets/messages/henry.png', import.meta.url).href },
    { name: 'Charlotte Flair', message: 'Sounds good buddy', image: new URL('../assets/messages/charlotte.png', import.meta.url).href },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg">Recent Messages</h2>
        <div className="relative group">
          <div className="w-1 h-1 bg-gray-500 rounded-full mb-1"></div>
          <div className="w-1 h-1 bg-gray-500 rounded-full mb-1"></div>
          <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
        </div>
      </div>
      {messages.map((msg, index) => (
        <div key={index} className="flex items-center mb-3 shadow-sm py-2">
          <img src={msg.image} alt={msg.name} className="rounded-full mr-3" />
          <div>
            <p className="font-medium">{msg.name}</p>
            <p className="text-sm text-gray-600">{msg.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentMessages;