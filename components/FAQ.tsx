type Question = {
  question: string;
  answer: string[];
};

const FAQLoading = () => (
  <div className="group border border-l-4 border-primary text-primary">
    <div className="animate-pulse flex items-center p-4 gap-6">
      <div className="flex-1 space-y-6 py-1">
        <div className="h-4 bg-primary-focus rounded"></div>
      </div>
      <div data-shape="circle" className="rounded-full bg-primary-focus h-10 w-10"></div>
    </div>
  </div>
);

const FAQ = ({ questions, isLoading }: { questions: Question[]; isLoading: boolean }) => (
  <div className="mt-4 space-y-4 w-full">
    {isLoading
      ? Array(6)
          .fill('placeholder')
          .map((x, i) => <FAQLoading key={`${x}-${i}`} />)
      : questions.map(({ question, answer }) => (
          <details
            key={question}
            className="group border border-l-4 border-primary text-primary [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex items-center justify-between cursor-pointer p-6">
              <h3 className="text-lg font-medium">{question}</h3>

              <span className="ml-1.5 flex-shrink-0 rounded-full bg-primary p-1.5 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45 fill-primary-content"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>
            <div className="bg-primary p-6">
              {answer.map((text: string, idx) => (
                <p
                  key={`${question}-${idx}`}
                  className="mt-4 leading-relaxed text-primary-content"
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              ))}
            </div>
          </details>
        ))}
  </div>
);

export default FAQ;
