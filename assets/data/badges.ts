type Tool = {
  name: string;
  backgroundColour?: string;
  icon: string;
  link?: string;
  textColour?: string;
  iconFill?: string;
};

const badges: Record<string, Tool> = {
  vue: {
    name: "Vue.js",
    icon: "logos:vue",
    textColour: "#41B883",
    link: "https://vuejs.org/",
  },
  typescript: {
    name: "TypeScript",
    icon: "devicon:typescript",
    textColour: "#3178C6",
    link: "https://www.typescriptlang.org/",
  },
  solidity: {
    name: "Solidity",
    icon: "vscode-icons:file-type-solidity",
    textColour: "eggshell-white",
    link: "https://soliditylang.org/",
  },
  sass: {
    name: "Sass",
    icon: "logos:sass",
    textColour: "#CF649A",
    link: "https://sass-lang.com/",
  },
  python: {
    name: "Python",
    icon: "logos:python",
    textColour: "#3776AB",
    link: "https://www.python.org/",
  },
  nuxt: {
    name: "Nuxt",
    icon: "logos:nuxt-icon",
    textColour: "#42b883",
    link: "https://nuxt.com/",
  },
  javascript: {
    name: "JavaScript",
    icon: "logos:javascript",
    textColour: "#FCDC00",
    link: "https://www.javascript.com/",
  },
  ipfs: {
    name: "IPFS",
    icon: "simple-icons:ipfs",
    textColour: "#51B5E0",
    link: "https://www.ipfs.com/",
  },
  go: {
    name: "Golang",
    icon: "logos:go",
    textColour: "#00ADD8",
    link: "https://go.dev/",
  },
  ethereum: {
    name: "Ethereum",
    icon: "mdi:ethereum",
    textColour: "eggshell-white",
    link: "https://ethereum.org/",
  },
  azure: {
    name: "Azure",
    icon: "logos:microsoft-azure",
    textColour: "#1E85DC",
    link: "https://azure.microsoft.com/",
  },
  bootstrap: {
    name: "Bootstrap",
    icon: "logos:bootstrap",
    textColour: "#702BF7",
    link: "https://getbootstrap.com/",
  },
  fastapi: {
    name: "FastAPI",
    icon: "devicon:fastapi",
    textColour: "#049688",
    link: "https://fastapi.tiangolo.com/",
  },
  pinia: {
    name: "Pinia",
    icon: "logos:pinia",
    textColour: "#FFE46B",
    link: "https://pinia.vuejs.org/",
  },
  raspberryPi: {
    name: "Pi",
    icon: "devicon:raspberrypi",
    textColour: "#C51850",
    link: "https://www.raspberrypi.com/",
  },
  burpSuite: {
    name: "Burp Suite",
    icon: "fluent-emoji-flat:orange-circle",
    textColour: "#FF6633",
    link: "https://portswigger.net/burp",
  },
  php: {
    name: "PHP",
    icon: "logos:php",
    textColour: "#6181B6",
    link: "https://www.php.net/",
  },
  cosmosdb: {
    name: "Cosmos DB",
    icon: "devicon:cosmosdb",
    textColour: "#B6DEEC",
    link: "https://azure.microsoft.com/products/cosmos-db/",
  },
  recommended: {
    name: "Recommended",
    icon: "tabler:star-filled",
    textColour: "yellow",
    iconFill: "yellow",
  },
  draft: {
    name: "Draft",
    icon: "fxemoji:warningsign",
    textColour: "#ffb02e",
  },
  html: {
    name: "HTML",
    icon: "vscode-icons:file-type-html",
    textColour: "#E44F26",
  },
  css: {
    name: "CSS",
    icon: "vscode-icons:file-type-css",
    textColour: "#1572B6",
  },
  angular: {
    name: "Angular",
    icon: "vscode-icons:file-type-angular",
    textColour: "#DD0031",
  },
  java: {
    name: "Java",
    icon: "devicon:java",
    textColour: "#ea2d2e",
  },
  spring: {
    name: "Spring",
    icon: "devicon:spring",
    textColour: "#77bc1f",
  },
  postgres: {
    name: "PostgreSQL",
    icon: "logos:postgresql",
    textColour: "#336791",
  },
  k8s: {
    name: "Kubernetes",
    icon: "devicon:kubernetes",
    textColour: "#326ce5",
  },
  gitlab: {
    name: "GitLab",
    icon: "devicon:gitlab",
    textColour: "#e24329",
  },
};

export default badges;
