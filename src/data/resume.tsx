import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
export const DATA = {
  name: "Andy RATOETRARIVO",
  initials: "AR",
  url: "https://andyratoetrarivo.vercel.app",
  location: "Ankorahoatra, Tana 101",
  locationLink: "https://www.google.com/maps/place/Antananarivo",
  description:
    "DevSecOps Cloud Engineer passionné par la cybersécurité, les infrastructures cloud et le développement logiciel.",
  summary:
    "Étudiant en cybersécurité et ingénierie logicielle, je combine compétences techniques et leadership à travers des projets concrets, des clubs, et des missions pro. Actuellement alternant chez Numer Madagascar, j’ai optimisé l’infrastructure cloud et mis en place des solutions IAM à grande échelle.",
  avatarUrl: "/me.jpg", // ton image dans /public
  skills: [
    "AWS",
    "React",
    "Next.js",
    "Terraform",
    "Ansible",
    "Docker",
    "Github Actions",
    "PostgreSQL",
    "Linux",
    "Python",
    "Spring Boot",
    "Cypress",
    "TypeScript",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Accueil" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "andynekena.ratoetrarivo@gmail.com",
    tel: "+261327751045",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/AndyPendragon", // à remplacer
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/andynekena-ratoetrarivo/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Envoyer un mail",
        url: "mailto:andynekena.ratoetrarivo@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Numer Madagascar",
      href: "https://www.numer.tech",
      badges: ["Alternance"],
      location: "Antananarivo, Madagascar",
      title: "SecOps Cloud Engineer",
      logoUrl: "/numer.png",
      start: "Jan 2024",
      end: "Aujourd’hui",
      description:
        "Migration de 450 utilisateurs de Gmail vers Postfix. Implémentation de Casdoor IAM pour +500 utilisateurs. Réduction des coûts AWS de $1600 à $800/mois.",
    },
    {
      company: "Particulière au COMESA",
      href: "#",
      badges: ["Mission"],
      location: "Antananarivo, Madagascar",
      title: "Coach technique",
      logoUrl: "/comesa.jpeg",
      start: "Juin 2023",
      end: "Nov 2023",
      description:
        "Formation Webflow CMS, maintenance de site vitrine, conseils matériels et sensibilisation à la cybersécurité.",
    },
    {
      company: "HEI",
      href: "https://hei.school",
      badges: ["Alternance"],
      location: "Antananarivo, Madagascar",
      title: "IT Support",
      logoUrl: "/hei.png",
      start: "Mar 2023",
      end: "Juil 2023",
      description:
        "Support technique pour les cours et événements. Gestion du WiFi, Raspberry Pi, projecteurs. Installation de matériel et logistique événementielle.",
    },
  ],

  education: [
    {
      school: "HEI (Haute École d’Informatique)",
      href: "https://hei.school",
      degree: "Licence en Ingénierie Logicielle – spécialité Cybersécurité",
      logoUrl: "/hei.png",
      start: "2022",
      end: "Présent",
    },
    {
      school: "Lycée Jules Ferry Faravohitra",
      href: "https://www.google.com/search?q=lycee+jules+ferry+faravohitra",
      degree: "Baccalauréat Scientifique",
      logoUrl: "/faravohitra.png",
      start: "2019",
      end: "2022",
    },
  ],

  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
  ],
  hackathons: [
    {
      title: "Organizer - HEI Qualification interne pour Hackathon Inter-Universitaire",
      dates: "Avril 2025",
      location: "Ivandry, Madagascar",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "/hei.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
