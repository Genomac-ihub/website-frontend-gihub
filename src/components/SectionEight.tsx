import React from "react";
import arrow from "../assets/arrow_right.png";

const SectionEight = () => {
  return (
    <div className="md:p-15 flex flex-col items-center dark:bg-[#040404] dark:text-white transition duration-400">
      <button className="flex bg-[#FF770014] justify-between items-center p-2 px-4 rounded-3xl mb-10">
        <p className="font-semibold text-[14px] text-orange-500">
          Research Project
        </p>
        <img src={arrow} className="ml-2" alt="" />
      </button>

      <div className="md:flex gap-10 w-full p-10">
        <div className="md:gap-10 grid md:grid-cols-2">
          <div className="rounded-[10px] bg-[#F1F4F9] p-10 md:w-[400px] mb-10  dark:bg-[#181818]">
            <p>🧬</p>
            <p className="text-[18px] my-5 font-semibold">
              Foundations of Computational Biology & Genomics
            </p>
            <ul className="list-disc ml-5">
              <li>
                Explore cancer genetics, metastasis pathways, and variant
                analysis..
              </li>
              <li>
                Learn to retrieve and preprocess data from the cancer genome
                Atlas (TCGA).
              </li>
              <li>
                Work with copy number variations (CNVs), RNA-Seq, and proteomics
                data.
              </li>
            </ul>
          </div>
          <div className="rounded-[10px] bg-[#F1F4F9] p-10  md:w-[400px] mb-10  dark:bg-[#181818]">
            <p>💻</p>
            <p className="text-[18px] my-5 font-semibold">
              Bioinformatics Programming & Data Science
            </p>
            <ul className="list-disc ml-5">
              <li>
                Master Python, R, and Bash/Linux for bioinformatics scripting.
              </li>
              <li>
                Utilize Biopython, Pandas, matplotlib, and Seaborn for genomic
                analysis.
              </li>
              <li>Retrieve and merge biological datasets using APIs.</li>
            </ul>
          </div>
          <div className="rounded-[10px] bg-[#F1F4F9] p-10  md:w-[400px] mb-10  dark:bg-[#181818]">
            <p>🤖</p>
            <p className="text-[18px] my-5 font-semibold">
              Machine Learning & AI for Bioinformatics{" "}
            </p>
            <ul className="list-disc ml-5">
              <li>Learn Logistic Regression, Random Forest, SVMs, and CNNs.</li>
              <li>AI for mutation classification & biomarker discovery.</li>
              <li>Engineer predictive genomic models using ML techniques.</li>
            </ul>
          </div>
          <div className="rounded-[10px] bg-[#F1F4F9] p-10  md:w-[400px] mb-10  dark:bg-[#181818]">
            <p>📊</p>
            <p className="text-[18px] my-5 font-semibold">
              Research & Industry Application{" "}
            </p>
            <ul className="list-disc ml-5">
              <li>
                Design and execute a full-scale research project leading to
                publication.
              </li>
              <li>
                Gain industry-relevant skills for biotech, pharma, and precision
                medicine.
              </li>
              <li>
                Present findings and deploy research-backed bioinformatics
                solutions.
              </li>
            </ul>
          </div>
        </div>
        <div className="rounded-[10px] bg-[#F1F4F9] p-10 flex flex-col justify-center md:w-[300px] mb-10  dark:bg-[#181818]">
          <p>📊</p>
          <p className="text-[18px] my-5 font-semibold">
            Full-Stack Bioinformatics Development & Workflow Automation
          </p>
          <ul className="list-disc ml-5">
            <li>
              Master Automate genomic pipelines with Nextflow & Snakemake.
            </li>
            <li>
              Build and deploy bioinformatics APIs & interactive web tools using
              Flask.
            </li>
            <li>Optimize cloud-based AI-powered bioinformatics app.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SectionEight;
