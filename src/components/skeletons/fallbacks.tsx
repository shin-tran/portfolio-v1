import SkeletonPage from "./SkeletonPage";

import SkeletonProjectGrid from "./SkeletonProjectGrid";
import SkeletonAboutSection from "./SkeletonAboutSection";

import SkeletonLayout from "./SkeletonLayout";

const Fallbacks = {
  Page: <SkeletonPage />,

  ProjectGrid: (count = 6) => <SkeletonProjectGrid count={count} />,
  About: <SkeletonAboutSection />,

  Layout: <SkeletonLayout />,
};

export default Fallbacks;
