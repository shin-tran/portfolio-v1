import html from "@assets/svg/skills/html.svg";
import css from "@assets/svg/skills/css.svg";
import sass from "@assets/svg/skills/sass.svg";
import cplusplus from "@assets/svg/skills/cplusplus.svg";
import tailwincss from "@assets/svg/skills/tailwincss.svg";
import javascript from "@assets/svg/skills/javascript.svg";
import typescript from "@assets/svg/skills/typescript.svg";
import react from "@assets/svg/skills/react.svg";
import git from "@assets/svg/skills/git.svg";

// get img at https://techicons.dev/
export const skillsImage = (skill: string) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "sass":
      return sass;
    case "html5":
      return html;
    case "css3":
      return css;
    case "c++":
      return cplusplus;
    case "tailwincss":
      return tailwincss;
    case "javascript":
      return javascript;
    case "react":
      return react;
    case "typescript":
      return typescript;
    case "git":
      return git;
    default:
      break;
  }
};
