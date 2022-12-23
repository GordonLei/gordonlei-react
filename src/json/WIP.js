const WIP = [
  {
    title: "Portfolio",
    technology: ["Node.js", "React", "TailwindCSS"],
    subheader: "My personal website",
    description:
      "My personal website for my portfolio. Will be working on making the website look good for different viewports as well as color palettes!",
    demoLink: "",
    githubLink: "https://github.com/GordonLei/gordonlei-react/tree/main",
    images: [process.env.PUBLIC_URL + "/img/website.png"],
  },
  {
    title: "Neco-Arc",
    technology: ["Node.js", "Discord.js"],
    subheader: "Personal Discord bot",
    description:
      'Personal project to learn how to make a Discord bot. It currently can search through the Anilist database via their API as well as allows users to "play" a game where they can test their knowledge about GRE vocabulary definitions. Will expand to my eventual project of a website dedicated for mechanical keyboard information (resources, group buy dates, etc).',
    demoLink: "",
    githubLink: "https://github.com/GordonLei/Neco-Arc",
    images: [
      process.env.PUBLIC_URL + "/img/neco-arc/neco-arc_1.gif",
      process.env.PUBLIC_URL + "/img/neco-arc/neco-arc_2.gif",
    ],
  },
];

export default WIP;
