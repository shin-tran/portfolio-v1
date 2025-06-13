import "./skeleton.scss";
interface Props {
  width?: string;
  height?: string;
  radius?: string;
  className?: string;
}
const SkeletonBox = ({
  width = "100%",
  height = "16px",
  radius = "4px",
  className,
}: Props) => (
  <div
    className={`skeleton-box ${className ?? ""}`}
    style={{ width, height, borderRadius: radius }}
  />
);
export default SkeletonBox;
