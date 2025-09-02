import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "What is bioinformatics and why is it important?",
      answer:
        "Bioinformatics is the use of computational tools to manage, analyze, and interpret biological data. It's crucial in genomics, drug discovery, and personalized medicine."
    },
    {
      question: "Do I need a background in biology to study bioinformatics?",
      answer:
        "While a biology background helps, many bioinformaticians come from computer science or math backgrounds and learn the biology along the way."
    },
    {
      question: "Which programming languages are essential for bioinformatics?",
      answer:
        "Python and R are the most widely used languages in bioinformatics. Bash scripting and SQL are also valuable for data processing and querying large datasets."
    },
    {
      question: "What kind of datasets do bioinformaticians work with?",
      answer:
        "Common datasets include DNA/RNA sequences, protein structures, gene expression data, and genomic variants, often from sources like NCBI, Ensembl, and TCGA."
    },
    {
      question: "What tools or platforms should I learn?",
      answer:
        "You should get comfortable with tools like BLAST, Bioconductor, Galaxy, and workflow managers like Nextflow or Snakemake. Familiarity with cloud platforms is also beneficial."
    },
    {
      question: "Is machine learning used in bioinformatics?",
      answer:
        "Absolutely! Machine learning is used for protein structure prediction, gene expression classification, disease risk prediction, and more."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" bg-white text-black py-16 px-2 sm:px-6 lg:px-10">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Frequently Asked Questions – Bioinformatics
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
            Here are some answers to common questions for aspiring bioinformaticians.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
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
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
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

export default Accordion;
