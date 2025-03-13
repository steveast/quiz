import { RemoveListenerFn } from '@telegram-apps/signals';

export default class Sender {
  private readonly telegramWebviewProxy: any = (window.TelegramWebviewProxy) as any;
  private readonly events: RemoveListenerFn[] = [];
  
  public send(eventType: string, eventData?: Record<string, any>): this {
    this.telegramWebviewProxy.postEvent(eventType, eventData);
    return this;
  }
  
  public subscribe(fn: RemoveListenerFn): this {
    this.events.push(fn);
    return this;
  }
  
  public off(): this {
    this.events.forEach((fn) => fn());
    return this;
  }
}
