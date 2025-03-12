export default class Sender {
  private eventType: string;
  private eventData?: Record<string, any>;
  
  constructor(eventType: string, eventData?: Record<string, any>) {
    this.eventType = eventType;
    this.eventData = eventData;
  }
  
  public send(): this {
    const data = JSON.stringify({
      eventType: this.eventType,
      eventData:  this.eventData,
    });
    window.parent.postMessage(data, window.location.origin);
    return this;
  }
}
