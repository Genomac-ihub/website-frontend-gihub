import python from '../assets/python.png'
import bioPython from '../assets/bioPython.png'
import rStudio from '../assets/rStudio.png'
import matplotli from '../assets/matplotli.png'
import rmarkdown from '../assets/rmarkdown.png'
import jupyterNotebooks from '../assets/jupyter.png'
import seaborn from '../assets/seaborn.png'
import pandas from '../assets/pandas.png'
import dplyr from '../assets/tidyr.png'
import bash from '../assets/bash.png'
import nextflow from '../assets/nextflow.png'
import snakemake from '../assets/snakemake.png'
import flask from '../assets/flask.webp'
import rest from '../assets/rest.jpeg'

// define the type for one tool
type ComputationalTool = {
  name: string;
  image: string; // or StaticImageData if using Next.js image imports
};

// then type the array
export const computationalTools: ComputationalTool[] = [
  {
    name: "Python/Linux",
    image: python,
  },
  {
    name: "BioPython",
    image: bioPython,
  },
  {
    name: "R Studio & ggplot2",
    image: rStudio,
  },
  {
    name: "Matplotli",
    image: matplotli,
  },
  {
    name: "RMarkdown",
    image: rmarkdown,
  },
  {
    name: "Jupyter Notebooks",
    image: jupyterNotebooks,
  },
  {
    name: "Seaborn",
    image: seaborn,
  },
  {
    name: "Pandas",
    image: pandas,
  },
  {
    name: "Dplyr & tidyr",
    image: dplyr,
  },
  {
    name: "Bash/Linux",
    image: bash,
  },
  {
    name: "Nextflow",
    image: nextflow,
  },
  {
    name: "Snakemake",
    image: snakemake,
  },
  {
    name: "Flask",
    image: flask,
  },
  {
    name: "REST APIs",
    image: rest,
  },
];