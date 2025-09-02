import React from "react";

const SectionThree = () => {
  return (
    <div className="md:p-15 p-10 flex flex-col justify-center items-center dark:bg-[#040404] dark:text-white transition duration-400">
      <button className="flex bg-[#FF770014] justify-between items-center p-2 px-4 rounded-3xl">
        <p className="font-semibold text-[14px] text-orange-500">
          What you need to know about the Bootcamp
        </p>
        <p className="ml-3">🔥</p>
      </button>
      <div className="w-[70%] text-center text-[14px] mt-3">
        Become a high-value Computational Biologist & Full-Stack Bioinformatics
        Engineer in 6 months with hands-on training in data science, machine
        learning, and real-world bioinformatics tools.
      </div>

      <div className="mt-5 w-[100%] flex flex-col md:gap-10">
        <div className=" justify-between md:flex w-full gap-4">
          <div className="md:mt-0 mt-4 flex  items-center  md:w-[30%]   p-10 rounded-2xl bg-[#F1F4F9] border border-[#DFDFDFDF] dark:bg-[#181818] dark:border-[#3C3C3C]">
            {/* <img src="" alt="" /> */}
            <p className="text-center text-[16px]">
              Web-Based Bioinformatics Tools Deployment (Flask, APIs, Cloud)
            </p>
          </div>
          <div className="md:mt-0 mt-4 md:w-[65%]  h-[] p-10 rounded-2xl bg-[#F1F4F9] border border-[#DFDFDFDF] dark:bg-[#181818] dark:border-[#3C3C3C]">
            <img src="" alt="" />
            <p className="text-center text-[16px]">
              Bioinformatics Pipeline Development with Nextflow & Snakemake
            </p>
          </div>
        </div>

        <div className="md:mt-0 mt-4 md:flex justify-between">
          <div className="md:w-[30%]   flex  items-center  h-[] p-10 rounded-2xl bg-[#F1F4F9] border border-[#DFDFDFDF] dark:bg-[#181818] dark:border-[#3C3C3C]">
            {/* <img src="" alt="" /> */}
            <p className="text-center text-[16px]">
              Automating Genomic Analysis with Workflow Management Systems
            </p>
          </div>
          <div className="md:mt-0 mt-4 flex  items-center  md:w-[30%]   h-[] p-10 rounded-2xl bg-[#F1F4F9] border border-[#DFDFDFDF] dark:bg-[#181818] dark:border-[#3C3C3C]">
            {/* <img src="" alt="" /> */}
            <p className="text-center text-[16px]">
              Machine Learning for Variant Analysis & Precision Medicine
            </p>
          </div>
          <div className="md:mt-0 mt-4 flex  items-center  md:w-[30%]   h-[] p-10 rounded-2xl bg-[#F1F4F9] border border-[#DFDFDFDF] dark:bg-[#181818] dark:border-[#3C3C3C]">
            {/* <img src="" alt="" /> */}
            <p className="text-center text-[16px]">
              Genomic Data Science & AI-driven Bioinformatics
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
