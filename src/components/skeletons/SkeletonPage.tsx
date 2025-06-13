import SkeletonBox from "./SkeletonBox";
import SkeletonText from "./SkeletonText";
import SkeletonSection from "./SkeletonSection";
import SkeletonAvatar from "./SkeletonAvatar";
const SkeletonPage = () => (
  <div className="container py-5">
    <SkeletonBox width="40%" height="32px" radius="8px" />
    <SkeletonText lines={3} />
    <SkeletonSection />
    <div className="d-flex align-items-center mt-4 gap-4">
      <SkeletonAvatar size="100px" />
      <div className="flex-grow-1">
        <SkeletonBox width="60%" height="16px" />
        <SkeletonBox width="50%" height="14px" className="mt-2" />
      </div>
    </div>
  </div>
);
export default SkeletonPage;
