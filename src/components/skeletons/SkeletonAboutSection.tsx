import SkeletonBox from "./SkeletonBox";
import SkeletonAvatar from "./SkeletonAvatar";
import SkeletonText from "./SkeletonText";

const SkeletonAboutSection = () => {
  return (
    <div className="container py-5">
      <div className="mb-4 text-center">
        <SkeletonAvatar size="140px" />
      </div>
      <SkeletonText lines={4} />
      <div className="my-4">
        <SkeletonBox width="30%" height="20px" className="mb-3" />
        <SkeletonText lines={3} />
      </div>
    </div>
  );
};

export default SkeletonAboutSection;
