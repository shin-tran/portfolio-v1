declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.gif";
// declare module "@assets/lottie/string/contact.d";
// declare module "@assets/lottie/string/development.d";

export {};

declare global {
  interface Window {
    dataLayer: unknown[]; // ✅ không dùng `any[]` để tránh lỗi eslint
  }
}
