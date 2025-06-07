import { Icons } from "@/components/icons";
import {
  CloudIcon,
  DatabaseIcon,
  HomeIcon,
  LaptopIcon,
  NotebookIcon,
  ScaleIcon,
  ServerIcon,
  WrenchIcon,
  GlobeIcon,
  ShieldIcon,
} from "lucide-react";

export const DATA = {
  name: "Andy RATOETRARIVO",
  initials: "AR",
  url: "https://andyratoetrarivo.vercel.app",
  location: "Ankorahoatra, Tana 101",
  locationLink: "https://www.google.com/maps/place/Antananarivo",
  description:
    "SecOps Cloud Engineer, axé sur la cybersécurité/cyber-résilience en entreprise, les infrastructures cloud et au coté de développement logiciel.",
  summary:
    "Me specialisant en cybersécurité d'entreprise accompagnant l'ingénierie logicielle dans leurs infrastructures. Je combine compétences techniques et aisance relationnel à travers mes missions et activités de clubs. Actuellement alternant chez Numer Madagascar, j’ai optimisé l’infrastructure et les coûts du cloud. Mais aussi une mise en place des solutions sécuritaires de gestion d'identité IAM à grande échelle.",
  avatarUrl: "/me.jpg",
  skills: [
    {
      Icon: ScaleIcon,
      name: "Sécurité - Governance, Risk, and Compliance",
      description:
        "EBIOS, ISO 27001 (initiation), gestion et analyse de risques, politiques de sécurité, conformité, sensibilisation",
      href: "/skills/security-grc",
      cta: "En savoir plus",
      background: <></>
        // <Image
        //   src="/red-background.jpeg"
        //   alt="red-background"
        //   width={1200}
        //   height={900}
        //   className="absolute h-full w-full object-cover"
        // />
      ,
      className: "col-span-5 lg:col-span-3",
    },
    {
      Icon: WrenchIcon,
      name: "DevOps & Infrastructure",
      description:
        "Ansible, Terraform, Bash, Python, GitHub Actions, Docker, Instatus",
      href: "/skills/devops",
      cta: "En savoir plus",
      background: <></>,
      className: "col-span-5 lg:col-span-2",
    },
    {
      Icon: CloudIcon,
      name: "Cloud & AWS",
      description:
        "WAF, EC2, S3, SES, IAM, Amplify, CloudWatch, Route 53, AWS Budgets",
      href: "/skills/cloud",
      cta: "En savoir plus",
      background: <></>,
      className: "col-span-5 lg:col-span-2",
    },
    {
      Icon: ShieldIcon,
      name: "Sécurité - Blue Team",
      description:
        "IAM, Casdoor, MFA, Firewall, analyse de logs, sauvegardes automatisées, classification des données",
      href: "/skills/security-blue",
      cta: "En savoir plus",
      background: <></>,
      className: "col-span-5 lg:col-span-3",
    },
    {
      Icon: ServerIcon,
      name: "Systèmes & Réseaux",
      description: "SSH, VNC, Linux, systemd, Postfix, Dovecot, Nginx, DNS, SSH",
      href: "/skills/sysnet",
      cta: "En savoir plus",
      background: <></>,
      className: "col-span-5 lg:col-span-3",
    },
    {
      Icon: LaptopIcon,
      name: "Support IT",
      description: "Dépannage, gestion de parc, support niveau 1/2",
      href: "/skills/it-support",
      cta: "En savoir plus",
      background: <></>,
      className: "col-span-5 lg:col-span-2",
    },
    {
      Icon: GlobeIcon,
      name: "Web & CMS",
      description: "React, Next.js, TypeScript, Node.js, CMS",
      more: "Wordpress, Webflow, Wix",
      href: "/skills/web",
      cta: "En savoir plus",
      background: <></>,
      className: "col-span-5 lg:col-span-2",
    },
    {
      Icon: DatabaseIcon,
      name: "Backend & DB",
      description: "Spring Boot, PostgreSQL, Supabase, Java, SQLite, Neon",
      href: "/skills/backend",
      cta: "En savoir plus",
      background: <></>,
      className: "col-span-5 lg:col-span-3",
    },
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
      title:
        "Organizer - HEI Qualification interne pour Hackathon Inter-Universitaire",
      dates: "Avril 2025",
      location: "Ivandry, Madagascar",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image: "/hei.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
