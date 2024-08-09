import React from 'react';

const RecentMessages: React.FC = () => {
  const messages = [
    { name: 'James Benny', message: `Hey, Let me know if you're still available...` },
    { name: 'William Chynita', message: 'Okay thanks' },
    { name: 'Henry David', message: `Alright I'll get back to you ASAP` },
    { name: 'Charlotte Flair', message: 'Sounds good buddy' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg">Recent Messages</h2>
        <button className="text-gray-400">•••</button>
      </div>
      {messages.map((msg, index) => (
        <div key={index} className="flex items-center mb-3">
          <img src={`https://via.placeholder.com/40`} alt={msg.name} className="rounded-full mr-3" />
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