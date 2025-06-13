import SkeletonBox from "./SkeletonBox";
import SkeletonText from "./SkeletonText";
const SkeletonSection = () => (
  <div className="my-4">
    <SkeletonBox width="30%" height="24px" radius="6px" />
    <SkeletonText lines={4} />
  </div>
);
export default SkeletonSection;
