declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.gif";

export {};

declare global {
  interface Window {
    dataLayer: unknown[]; // ✅ không dùng `any[]` để tránh lỗi eslint
  }
}
