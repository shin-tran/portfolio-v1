import SkeletonBox from "./SkeletonBox";
const SkeletonAvatar = ({ size = "80px" }: { size?: string }) => (
  <SkeletonBox width={size} height={size} radius="50%" />
);
export default SkeletonAvatar;
