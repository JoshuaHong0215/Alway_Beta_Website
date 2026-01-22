/// <reference types="vite/client" />

declare module "*.png";
declare module "*.svg";
declare module "*.jpeg";
declare module "*.jpg";

// import.meta.glob 타입 정의
interface ImportMeta {
  glob(pattern: string, options?: { eager?: boolean }): Record<string, any>;
}