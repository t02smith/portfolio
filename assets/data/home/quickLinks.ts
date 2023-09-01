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
    icon_link: "/icons/quick_links/about.svg",
    draft: false,
    description:
      "Here you will find out more about me. My hopes, my dreams, what I look like and what I actually do with my time.",
  },
  {
    name: "My Projects",
    link: "/projects",
    icon_link: "/icons/quick_links/books.svg",
    draft: false,
    description:
      "Here you will see a collection of projects I've worked on that I've deemed interesting enough to put on display.",
  },
  {
    name: "Blog",
    link: "/blog",
    icon_link: "/icons/quick_links/megaphone.svg",
    draft: false,
    description:
      "For those of you who care what I have to say, this page will contain regular blog posts about things I'm interested in. This includes programming tutorials, tech reviews, and things going on in my life.",
  },
];

export default quickLinks;
