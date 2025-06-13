import SkeletonBox from "./SkeletonBox";
const SkeletonCard = () => (
  <div className="project-card-view p-3">
    <SkeletonBox width="100%" height="215px" radius="12px" />
    <div className="mt-3">
      <SkeletonBox width="60%" height="20px" />
      <SkeletonBox width="90%" height="14px" className="mt-2" />
      <SkeletonBox width="80%" height="14px" className="mt-1" />
      <SkeletonBox width="50%" height="14px" className="mt-1" />
    </div>
  </div>
);
export default SkeletonCard;
