const quickLinks: Array<{
  link: string;
  icon_link: string;
  name: string;
  draft: boolean;
  description: string;
}> = [
  {
    name: "About Me",
    link: "/about",
    icon_link: "/icons/quick_links/about.png",
    draft: false,
    description:
      "Here you will find out more about me. My hopes, my dreams, what I look like and what I actually do with my time.",
  },
  {
    name: "My Projects",
    link: "/projects",
    icon_link: "/icons/quick_links/books.png",
    draft: false,
    description:
      "Here you will see a collection of projects I've worked on that I've deemed interesting enough to put on display.",
  },
];

export default quickLinks;
