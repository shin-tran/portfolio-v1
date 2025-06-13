import SkeletonBox from "./SkeletonBox";
const SkeletonText = ({ lines = 3 }: { lines?: number }) => (
  <div>
    {Array.from({ length: lines }).map((_, i) => (
      <SkeletonBox key={i} width={`${90 - i * 5}%`} className="mb-2" />
    ))}
  </div>
);
export default SkeletonText;
