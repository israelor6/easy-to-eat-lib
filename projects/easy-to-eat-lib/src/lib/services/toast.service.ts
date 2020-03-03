import { Injectable, TemplateRef } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToastService {
  toasts: any[] = [];

  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ textOrTpl, ...options });
  }

  remove(toast) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }

  showSuccess(textOrTpl: string) {
    this.show(textOrTpl, { classname: 'background-primary text-light', delay: 5000 });
  }

  showDanger(dangerTpl: string) {
    this.show(dangerTpl, { classname: 'bg-danger text-light', delay: 5000 });
  }
}
