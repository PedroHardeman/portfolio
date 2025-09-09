export interface AboutSection {
  id: string
  content: string
}

export const useAboutContent = () => {
  const aboutSections: AboutSection[] = [
    {
      id: `1`,
      content: `Hi, I'm Pedro!`,
    },
    {
      id: `2`,
      content: `I'm a Frontend Developer with over 8 years of experience turning ideas into responsive, accessible, and scalable web applications.`,
    },
    {
      id: `3`,
      content: `I specialize in <b>React</b>, <b>TypeScript</b>, and <b>NextJS</b>. I've worked across industries like marketing, healthcare, travel, and logistics. 
        Over the years, I've built everything from high-traffic portals to SaaS platforms, always with a focus on clean code, performance, and user experience.`,
    },
    {
      id: `4`,
      content: `Beyond coding, I enjoy <b>mentoring teammates</b>, and <b>helping teams grow together</b>. 
        Collaboration is at the heart of how I work, and I believe the best products are built in environments where people share knowledge, 
        give feedback, and improve continuously.`,
    },
    {
      id: `5`,
      content: `Currently based in Amsterdam and <b>looking for an opportunity</b> where I can bring my frontend expertise, collaborative mindset, 
        and passion for building user-first applications.`,
    },
    {
      id: `6`,
      content: `Don't take just my word for it! Check these totally real recommendations:`,
    },
    // {
    //   id: `6`,
    //   content: `When I'm not coding, you'll probably find me gaming 🎮 (a lifelong hobby), expending time with my wife and dog, 
    //     or diving into new techs to see how small details can create big improvements.`,
    // }
  ]

  return {
    aboutSections,
  }
}
