/// <reference types="vite/client" />

declare global {
  interface Window {
    TelegramWebviewProxy: any;
  }
}
