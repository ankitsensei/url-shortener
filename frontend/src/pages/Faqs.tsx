import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Navbar from "../components/Navbar";

const faqData = [
  {
    question: "What is a URL Shortener?",
    answer:
      "A URL Shortener converts long and messy links into short, clean, and shareable URLs. It helps improve readability and makes links easier to share on social media, messages, and emails.",
  },
  {
    question: "How do I shorten a URL?",
    answer:
      "Simply paste your long URL into the input field on the homepage and click the shorten button. Your shortened link will be generated instantly.",
  },
  {
    question: "Is the shortened URL permanent?",
    answer:
      "Yes, shortened URLs remain active unless they are manually deleted or violate platform policies.",
  },
  {
    question: "Do shortened links expire?",
    answer: "By default, links do expire after some days.",
  },
  {
    question: "Is my data secure?",
    answer: "Yes.",
  },
  {
    question: "Can I track link analytics?",
    answer:
      "Yes, you can monitor clicks, user activity, and other analytics for your shortened links.",
  },
  {
    question: "Is registration required?",
    answer: "No, basic URL shortening can be used without registration.",
  },
];

const FaqItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="bg-white/60 rounded shadow-md overflow-hidden transition-all duration-300">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between px-6 py-2 text-left"
      >
        <h3 className="text-lg text-gray-800">{question}</h3>

        {isOpen ? (
          <ChevronUp className="text-purple-700" size={22} />
        ) : (
          <ChevronDown className="text-purple-700" size={22} />
        )}
      </button>

      {isOpen && (
        <div className="px-6 pb-5">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#E3DEFF]">
      <Navbar />

      <div className="max-w-4xl mx-auto px-5 py-14">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900">
            Frequently Asked Questions
          </h1>

          <p className="mt-4 text-lg text-gray-700">
            Everything you need to know about our URL Shortener platform.
          </p>
        </div>

        {/* FAQ Container */}
        <div className="space-y-5">
          {faqData.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFaq(index)}
            />
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-14 text-center bg-white/60 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Still have questions?
          </h2>

          <button className="mt-6 px-6 py-3 bg-purple-700 hover:bg-purple-800 text-white rounded-lg font-medium transition-all duration-300">
            You're stupid, don't contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
