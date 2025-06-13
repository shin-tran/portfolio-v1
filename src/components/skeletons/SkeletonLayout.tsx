import SkeletonBox from "./SkeletonBox";

const SkeletonLayout = () => {
  return (
    <div>
      {/* Header giả */}
      <header className="border-bottom p-3">
        <div className="d-flex justify-content-between align-items-center container">
          <SkeletonBox width="120px" height="24px" />
          <div className="d-flex gap-3">
            <SkeletonBox width="60px" height="20px" />
            <SkeletonBox width="60px" height="20px" />
            <SkeletonBox width="60px" height="20px" />
          </div>
        </div>
      </header>

      {/* Nội dung chính giả */}
      <main className="container py-5">
        <SkeletonBox width="40%" height="32px" className="mb-3" />
        <SkeletonBox width="100%" height="16px" className="mb-2" />
        <SkeletonBox width="95%" height="16px" className="mb-2" />
        <SkeletonBox width="90%" height="16px" className="mb-2" />
        <SkeletonBox width="85%" height="16px" className="mb-2" />
      </main>

      {/* Footer giả */}
      <footer className="bg-light py-4">
        <div className="container">
          <SkeletonBox width="80%" height="14px" className="mb-2" />
          <SkeletonBox width="60%" height="14px" />
        </div>
      </footer>
    </div>
  );
};

export default SkeletonLayout;
