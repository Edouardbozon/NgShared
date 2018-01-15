import { BaseComponent } from './base-component';

export abstract class TogglableComponent extends BaseComponent {
  state = false;
  toggle(): void { this.state = !this.state; }
}
