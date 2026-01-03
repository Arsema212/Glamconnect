import { useState } from 'react';
import Sidebar from '../../components/layout/Sidebar';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Help = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      question: 'How to make booking for the first time ?',
      answer: 'Follow this link you will find the booking page',
      link: '/booking/services',
    },
    {
      question: 'When can I make payments ?',
      answer: 'you can pay for the services after finishing your service, using chappa or cash',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      
      <div className="flex-1">
        {/* Header Section with Pink Background */}
        <div className="bg-pink-50 py-16 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Help & Support</h1>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search support"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black"
                />
                <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto px-8 py-12">
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-700">
                  {faq.answer}
                  {faq.link && (
                    <a href={faq.link} className="text-blue-600 hover:underline ml-1">
                      this link
                    </a>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;

