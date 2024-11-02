export type Author = {
  name: string;
  link: string;
  role: string;
}

export type Project = {
  key: number;
  title: string;
  description: string;
  tools: string[];
  authors: Author[];
  link?: string;
  logo: string;
  file: string;
};

export const ME: Author = {
  name: "Tom Smith",
  role: "Full-Stack Dev",
  link: "/"
}

export const projects: Project[] = [
  {
    file: "blockware.md",
    key: 0,
    title: "Using Blockchain For Video Game Distribution",
    description:
      "A decentralised software marketplace that allows users to buy and sell versioned software using the Ethereum blockchain. Users can then download this software using a built-in P2P file-sharing network.",
    logo: "/icons/projects/blockware.png",
    link: "https://github.com/t02smith/blockware",
    authors: [ME],
    tools: [
      "go",
      "vue",
      "solidity",
      "javascript",
      "sass",
      "pinia",
      "ethereum",
      "ipfs",
    ],
  },
  {
    file: "robpress+and+robbank.md",
    key: 1,
    title: "RobPress and RobBank",
    description:
      "In RobPress I aimed to exploit various vulnerabilities in a website for the purpose of stealing information, and gaining control over the system. In RobBank I patched various security vulnerabilities in a website to secure it against an attacker.",
    logo: "/icons/projects/rob.png",
    authors: [ME, {
      name: "Tom Cutts",
      role: "Cyber Specialist",
      link: "https://github.com/Spratt93",
    }],
    tools: ["php", "burpSuite"],
  },
  {
    file: "this+website.md",
    key: 2,
    title: "This Website",
    description:
      "Some more information about the site you're looking at right now, including what tech stack I'm using, and why I'm using it.",
    logo: "/icons/projects/this-site.png",
    link: "https://github.com/t02smith/portfolio",
    authors: [ME],
    tools: ["vue", "sass", "typescript", "azure"],
  },
  {
    file: "untitled+chore+app.md",
    key: 3,
    title: "Untitled Chore App",
    description:
      "A weekly chore manager that will generate chore timetables to users in a household and ranks each user based upon their overall contribution to the household.",
    logo: "/icons/projects/uca.png",
    link: "link: https://github.com/t02smith/untitled-chore-app",
    authors: [ME, {
      name: "Tom Cutts",
      role: "Frontend Dev",
      link: "https://github.com/Spratt93",
    }, {
      name: "Dean Davey",
      role: "Backend Dev",
      link: "https://github.com/Davey-Dean",
    },
      {
        name: "Jaret Wrintmore",
        role: "Backend Dev",
        link: "https://github.com/W8up",
      },],
    tools: [
      "vue",
      "python",
      "fastapi",
      "pinia",
      "javascript",
      "bootstrap",
      "azure",
      "sass",
      "cosmosdb",
    ],
  },
  {
    file: "wolkit.md",
    key: 4,
    title: "WoL-Kit",
    description:
      "Using the Wake-on-LAN standard to wake various devices using network-based and environmental factors.",
    logo: "/icons/projects/wolkit.png",
    link: "https://github.com/t02smith/wolkit",
    authors: [ME],
    tools: ["python", "fastapi", "raspberryPi"],
  },
];
