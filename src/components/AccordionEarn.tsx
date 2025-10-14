import React from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const AccordionEarn = () => {
    const [openIndex, setOpenIndex] = React.useState<number | null>(null);

    const faqData = [
        {
            question: "Is there a limit to the number of people I can refer?",
            answer:
                "There is no limit to the number of people you can refer. The more you refer, the more you increase your earnings..",
        },
        {
            question: "Where can I find my referral code?",
            answer:
                "Your referral code can be found in your account dashboard after you sign up or log in. Look for the 'Referral Program' section to access your unique link or code.",
        },
        {
            question: "How do I transfer my earnings into my bank?",
            answer:
                "You can transfer your earnings to your bank account through the payment options available in your account settings.",
        },
        {
            question:
                "What happens if the applicant doesn't input my code or uses the wrong code?",
            answer:
                "If the applicant doesn't input your code or uses the wrong code, you will not receive credit for the referral. It's important to ensure that your code is shared correctly.",
        },
        {
            question: "Must I be a learner at Genomac before I can participate in this?",
            answer: "No, you do not have to be a learner at Genomac to participate in the referral program.",
        },
    ];

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className=" text-black py-16 px-2 sm:px-6 lg:px-10 mx-auto max-w-screen-xl">
            <div className="flex flex-col md:flex-row md:gap-x-10 gap-y-8 mx-auto">
                {/* Header */}
                <div className="text-center md:text-left mb-10 w-full md:w-5/12">
                    <h1 className="text-4xl md:text-4xl md:text-left font-bold mb-4">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-gray-600 md:text-left max-w-xl mx-auto text-sm sm:text-xs">
                        Can't able to find answers you're looking for? <br /> Reach out to our <Link to="#" className="text-blue-500 hover:underline" >customer support</Link> team.
                    </p>
                </div>

                {/* Accordion */}
                <div className="space-y-3 w-full md:w-7/12">
                    {faqData.map((item, index) => (
                    <div
                        key={index}
                        className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 shadow-sm"
                    >
                        {/* Question */}
                        <button
                        className="w-full px-4 sm:px-6 py-4 text-left flex items-center justify-between"
                        onClick={() => toggleAccordion(index)}
                        >
                        <span className="text-base sm:text-lg font-medium text-gray-800">
                            {item.question}
                        </span>
                        <ChevronDown
                            className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                            openIndex === index ? "rotate-180" : ""
                            }`}
                        />
                        </button>

                        {/* Answer */}
                        <div
                        className={`transition-all duration-300 ease-in-out ${
                            openIndex === index
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                        >
                        <div className="px-4 sm:px-6 pb-4 border-t border-gray-100">
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed pt-4">
                            {item.answer}
                            </p>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AccordionEarn;