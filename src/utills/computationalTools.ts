import python from './src/assets/python.png'
import bioPython from './src/assets/bioPython.png'
import rStudio from './src/assets/rStudio.png'
import matplotli from './src/assets/matplotli.png'
import rmarkdown from './src/assets/rmarkdown.png'
import jupyterNotebooks from './src/assets/jupyter.png'
import seaborn from './src/assets/seaborn.png'
import pandas from './src/assets/pandas.png'
import dplyr from './src/assets/tidyr.png'
import bash from './src/assets/bash.png'
import nextflow from './src/assets/nextflow.png'
import snakemake from './src/assets/snakemake.png'
import flask from './src/assets/flask.webp'
import rest from './src/assets/rest.jpeg'

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