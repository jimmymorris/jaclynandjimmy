import React from 'react';

type Question = {
  question: string;
  answer: string[];
};

const FAQ = ({ questions }: { questions: Question[] }) => (
  <div className="space-y-4 w-full">
    {questions.map(({ question, answer }) => (
      <details
        className="group border-l-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
      >
        <summary className="flex items-center justify-between cursor-pointer">
          <h3 className="text-lg font-medium text-gray-900">{question}</h3>

          <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </summary>

        {answer.map((text: string) => (
          <p
            className="mt-4 leading-relaxed text-gray-700"
            dangerouslySetInnerHTML={{ __html: text }}
          />
        ))}
      </details>
    ))}
  </div>
);

export default FAQ;
