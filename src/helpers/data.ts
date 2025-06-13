export const APP_DATA = {
  GITHUB_URL: "https://github.com/shin-tran",
  EMAIL: "mailto:ngocshintrann@gmail.com",
  PHONE: "tel:0696969696",
  LINE_URL: "about:blank",
  FACEBOOK_URL: "https://www.facebook.com/shintran.ngoc",
};

export const EXPERIENCES = [
  {
    id: 1,
    title: {
      vi: "Công ty TNHH Kusuda Products",
      en: "株式会社楠田商品",
    },
    company: {
      vi: "Làm thực tập sinh chế biến thủy sản, trải qua đào tạo kỹ thuật tại Nhật Bản.",
      en: "水産加工の実習生として、日本での技術研修を経験しました。",
    },
    company2: {
      vi: "✅Học về văn hóa làm việc tại Nhật Bản và tầm quan trọng của làm việc nhóm.",
      en: "✅ 日本の職場文化やチームワークの重要性を学びました。",
    },
    duration: {
      vi: "Tháng 3/2020 - Tháng 2/2023",
      en: "3月 2020年 — 2月 2023年",
    },
  },
  {
    id: 2,
    title: {
      vi: "Công ty TNHH Yakiniku Sakai Holdings",
      en: "株式会社焼肉坂井ホールディングス",
    },

    company: {
      vi: "Làm nhân viên chính thức tại nhà hàng mì ramen, phụ trách phục vụ khách hàng và hỗ trợ chế biến món ăn.",
      en: "ラーメン店の正社員として勤務し、接客・調理補助を担当しました。",
    },
    company2: {
      vi: "✅Rèn luyện kỹ năng giao tiếp với khách hàng, học cách làm việc hiệu quả.",
      en: "✅ 顧客対応スキルを磨き、効率的な仕事の進め方を学びました。",
    },
    duration: {
      vi: "Tháng 2/2023 - Tháng 7/2023",
      en: "2月 2023年 — 7月 2023年",
    },
  },
  {
    id: 3,
    title: {
      vi: "Tự học tại nhà",
      en: "自宅学習",
    },
    company: {
      vi: "Học kiến thức mới mỗi ngày",
      en: "毎日新しい知識を学ぶしています。",
    },
    company2: {
      vi: "💻Thực hành phát triển ứng dụng web bằng HTML, CSS, JavaScript, TypeScript, React.",
      en: "💻 HTML、CSS、JavaScript、Typescript、React を使ったWebアプリケーション開発を実践中。",
    },
    duration: {
      vi: "Tháng 7/2023 - Hiện tại",
      en: "7月 2023年 — 現在",
    },
  },
];

export const PROJECTS = [
  {
    id: 1,
    images: [
      "/projects/po1.png",

      "/projects/po6.png",

      "/projects/po3.png",
      "/projects/po4.png",
      "/projects/po5.png",
      "/projects/po7.png",
    ],
    title: "project.portfolio.title",
    description: "project.portfolio.description",
    githubLink: "https://github.com/thanhhang31023/project-my-portfolio",
    demoLink: "https://hang-front-end-portfolio.vercel.app/",
    namePro: "portfolio",
    techs: [
      {
        group: "core", // dùng làm key dịch
        items: ["React", "Typescript", "Vite"],
      },
      {
        group: "ui",
        items: ["Tailwind CSS", "Sass", "React-Bootstrap", "Lottie-react"],
      },
      {
        group: "intl",
        items: ["i18next", "SEO meta tags"],
      },
      {
        group: "utils",
        items: ["EmailJS", "React Toastify", "React Router DOM"],
      },
    ],
  },

  {
    id: 5,
    images: [
      "/projects/lo0.png",
      "/projects/do1.png",
      "/projects/do2.png",
      "/projects/do3.png",
      "/projects/do4.png",
      "/projects/do.png",
    ],
    title: "project.mart.title",
    description: "project.mart.description",
    githubLink: "https://github.com/thanhhang31023/lofi-web-clone",
    demoLink: "https://lofi-web-clone.vercel.app",
    namePro: "mart",
    techs: [
      {
        group: "core", // dùng làm key dịch
        items: ["React", "Redux"],
      },
      {
        group: "ui",
        items: ["Sass", "React-Bootstrap", "Material UI"],
      },
      {
        group: "intl",
        items: ["React Audio Player", "React Timer Hook"],
      },
      {
        group: "utils",
        items: ["LocalStorage", "react-draggable(drag & drop)"],
      },
    ],
  },

  {
    id: 2,
    images: [
      "/projects/to.png",
      "/projects/to3.png",
      "/projects/to1.png",
      "/projects/to2.png",
    ],
    title: "project.todo.title",
    description: "project.todo.description",
    githubLink: "https://github.com/thanhhang31023/todo-app-typescript",
    demoLink: "https://todo-app-typescript-lake.vercel.app/",
    namePro: "todo",
    techs: [
      {
        group: "core", // dùng làm key dịch
        items: ["React", "TypeScript", "React Hooks"],
      },
      {
        group: "ui",
        items: ["SCSS (CSS Modules)", "Google Fonts"],
      },
      {
        group: "intl",
        items: ["LocalStorage", "@hello-pangea/dnd (Drag & Drop)"],
      },
      {
        group: "utils",
        items: ["Prettier", "ESLint"],
      },
    ],
  },
  {
    id: 3,
    images: [
      "/projects/mat.png",
      "/projects/mat1.png",
      "/projects/mat2.png",
      "/projects/mat3.png",
      "/projects/mat4.png",
      "/projects/mat5.png",
      "/projects/mat6.png",
    ],
    title: "project.library.title",
    description: "project.library.description",
    githubLink: "https://github.com/thanhhang31023/project-grocery-mart",
    demoLink: "https://thanhhang31023.github.io/project-grocery-mart/",
    namePro: "library",
    techs: [
      {
        group: "core", // dùng làm key dịch
        items: ["HTML5", "SCSS", " JavaScript (ES6+)"],
      },
      {
        group: "ui",
        items: ["Custom Grid SCSS", "Google Fonts"],
      },
      {
        group: "intl",
        items: ["Meta · Canonical tag"],
      },
      {
        group: "utils",
        items: ["LocalStorage"],
      },
    ],
  },
  {
    id: 4,
    images: [
      "/projects/mo.png",
      "/projects/mo1.png",
      "/projects/mo2.png",
      "/projects/mo3.png",
      "/projects/mo4.png",
      "/projects/mo5.png",
    ],
    title: "project.todo2.title",
    description: "project.todo2.description",
    githubLink: "https://github.com/thanhhang31023/popzy",
    demoLink: "https://thanhhang31023.github.io/popzy/",
    namePro: "todo2",
    techs: [
      {
        group: "core", // dùng làm key dịch
        items: ["JavaScript (ES6+)", "HTML5", "CSS"],
      },
      {
        group: "ui",
        items: ["Terser", "CSSO"],
      },
      {
        group: "intl",
        items: [],
      },
      {
        group: "utils",
        items: [],
      },
    ],
  },

  {
    id: 6,
    images: [
      "/projects/pett.png",
      "/projects/pett5.png",
      "/projects/pett2.png",
      "/projects/pett3.png",
      "/projects/pett4.png",
      "/projects/pett6.png",
    ],
    title: "project.landing.title",
    description: "project.landing.description",
    githubLink: "https://github.com/thanhhang31023/lucy-pet-care-landing-page",
    demoLink: "https://thanhhang31023.github.io/lucy-pet-care-landing-page/",
    namePro: "landing",
    techs: [
      {
        group: "core", // dùng làm key dịch
        items: ["HTML", "CSS", "Google Fonts", "SEO meta tags"],
      },
      {
        group: "ui",
        items: [],
      },
      {
        group: "intl",
        items: [],
      },
      {
        group: "utils",
        items: [],
      },
    ],
  },
];

export const SKILLS_DATA = [
  "HTML5",
  "CSS3",
  "Sass",
  "Javascript",
  "Typescript",
  "React",
  "Github",
];
