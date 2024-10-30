import mathImg from "../assets/bgbanner.jpg";
import commerceImg from "../assets/bgbanner.jpg";
import compSciImg from "../assets/bgbanner.jpg";
import artsImg from "../assets/bgbanner.jpg";

export const SCHOOL_GROUPS = [
  {
    id: 1,
    sgroup: "BioMath",
    bimg: mathImg,
    head1: "Why Choose Bio-Math Group?",
    para1: `The Bio-Math group is perfect for students interested in pursuing careers in medicine, engineering, or research. This combination allows students to explore biology for medical-related fields while honing their analytical skills through mathematics.`,
    head2: "What Are the Career Opportunities After Bio-Math?",
    para2: `Students can venture into fields such as MBBS, Biotechnology, Bioinformatics, Engineering (Biotech, Bio-Medical), and more. With Bio-Math, you get the best of both worlds and a wide range of career options.`,
    coach: "Dr. John Doe",
    description: `Led by Dr. John Doe, an expert in biological sciences and advanced mathematics, the Bio-Math program integrates hands-on learning with theoretical knowledge.`,
    facilities: [
      "Modern biology and chemistry labs",
      "Access to advanced scientific calculators",
      "Guidance for competitive exams (e.g., NEET, JEE)",
    ],
  },
  {
    id: 2,
    sgroup: "Commerce",
    bimg: commerceImg,
    head1: "Why Choose Commerce Group?",
    para1: `The Commerce group is tailored for those interested in business, finance, and economics. This group is ideal for students aiming for careers in banking, accounting, management, and more.`,
    head2: "What Are the Career Opportunities After Commerce?",
    para2: `Students can pursue Chartered Accountancy (CA), Company Secretary (CS), Business Administration, Economics, and more. This group opens doors to some of the most lucrative career paths in the corporate world.`,
    coach: "Mr. David Smith",
    description: `Under the mentorship of Mr. David Smith, an experienced business strategist, students gain insights into the financial sector and real-world economics.`,
    facilities: [
      "State-of-the-art accounting software",
      "Workshops on financial literacy",
      "Networking opportunities with industry professionals",
    ],
  },
  {
    id: 3,
    sgroup: "ComputerScience",
    bimg: compSciImg,
    head1: "Why Choose Computer Science Group?",
    para1: `The Computer Science group is for students interested in programming, technology, and innovation. It equips students with skills in coding, software development, and computer systems that are vital in today's tech-driven world.`,
    head2: "What Are the Career Opportunities After Computer Science?",
    para2: `With this group, students can dive into fields like Software Engineering, Information Technology, Data Science, Artificial Intelligence, and more. The opportunities are vast, and the tech industry is ever-evolving.`,
    coach: "Ms. Alice Johnson",
    description: `Guided by Ms. Alice Johnson, a seasoned software engineer, students receive practical training in various programming languages and technology trends.`,
    facilities: [
      "Access to high-speed internet and coding labs",
      "Hands-on experience with AI and machine learning",
      "Internship and coding competition opportunities",
    ],
  },
  {
    id: 4,
    sgroup: "Arts",
    bimg: artsImg,
    head1: "Why Choose Arts Group?",
    para1: `The Arts group provides students with the freedom to explore various disciplines, including literature, history, sociology, and more. It's perfect for students passionate about understanding human society and culture.`,
    head2: "What Are the Career Opportunities After Arts?",
    para2: `Students can pursue careers in journalism, law, education, social work, and the fine arts. This group helps students develop critical thinking and creativity, offering a broad range of career paths.`,
    coach: "Dr. Sarah Lee",
    description: `Led by Dr. Sarah Lee, a prominent sociologist, the Arts group encourages students to engage with diverse cultural and historical perspectives.`,
    facilities: [
      "Creative arts and literature workshops",
      "Field trips to museums and cultural sites",
      "Guest lectures from professionals in media and arts",
    ],
  },
];
