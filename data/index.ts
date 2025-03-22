import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Artsify - Ai Image Generation tool",
    des: "Empower Your Creativity: Transform Your Artistic Vision with AI-Driven Innovation - Empowering Art with Assistant",
    img: "/p1.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://artsify.vercel.app/",
  },
  {
    id: 2,
    title: "UAE Verified Properties Listings",
    des: "At Dubai Luxury Property, our mission is to significantly improve the experience of finding properties in Dubai. The problems we faced inspired us to put our heads together to develop the ‘bigger picture’ that would lead you on an immersive journey to learn about Dubai's communities and properties.",
    img: "/p2.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://dubai-luxury-property.netlify.app/",
  },
  {
    id: 3,
    title: "Viacyber - A personal Blog's Portal",
    des: "ViaCyber is a dynamic personal blog portal where creativity meets technology. Whether you're a tech enthusiast, writer, or digital creator, ViaCyber provides a seamless experience for sharing insights, stories, and expertise. With a sleek, modern design and user-friendly navigation, it offers a perfect space to engage with an audience.",
    img: "/p3.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://viacyber.netlify.app/",
  },
  {
    id: 4,
    title: "Personal UI/UX Portfolio",
    des: "Extensive experience in user interface design, wireframing, and prototyping, ensuring intuitive and engaging user experiences.",
    img: "/p4.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://behance.net/ak_graphics148/",
  },
];

export const testimonials = [
  {
    quote:
      "Highly recommended for React websites. --> We have an ongoing large enterprise level project that you can probably do: Figma, nextjs and nodejs. There is a lot to be done. So I will send you this invitation at this time, so we can talk more in details. This job description is not the actual job description in detail. This is just a way to contact you at this time. We will not be worried about your rate. You seem to be very reasonable. Please contact us as soon as you can.",
    name: "dorisechianu",
    title: "South Africa",
  },
  {
    quote:
      "full stack, Figma, Frontend developer and backend. Nextjs , Nodejs, database. --> Professional, attentive, caring, and we will work with him in future. Thank you . :)",
    name: "Michael From Web Deisign",
    title: "United States",
  },
  {
    quote:
      "Simply convert those files from powerpoint /pdf to figma files with css information. You can either use the ppt or pdf files, as you prefer as long as results is exactly the same on Figma. I attached the fonts too, and on their titles you can see their use (header, CTAs, body). Need to be done in 1-2 days max. Can increase budget if done quicker. --> excellent work, thanks,",
    name: "Thomas Domingue",
    title: "United Kingdom",
  },
];

export const companies = [
  {
    id: 1,
    name: "Logic Worms",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "9 Sol",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "Vialogic",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "Upwork",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "Fiverr",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer - 3+ years",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "ui/UX Designer - 5+ years",
    desc: "Designed mobile & web app dashboards.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Node Js Developer - 1 year",
    desc: "Auth Node Js/ Express Api both Rest and Graphql approach",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Wordpress Developer - 2+ years",
    desc: "Experienced WordPress developer with 2 years of expertise in custom themes, plugins, Gutenberg blocks, and WooCommerce integration. Skilled in optimizing performance, SEO-friendly development, and responsive design",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link:"https://github.com/Aaqib99"
  },
  {
    id: 3,
    img: "/link.svg",
    link:"https://www.linkedin.com/in/aaqib-khan-940a05184/",
  },
];
