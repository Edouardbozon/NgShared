import { BaseComponent } from './base-component';

export interface TogglableItem {
  state: boolean;
  [key: string]: any;
}

export abstract class TogglableListComponent extends BaseComponent {
  items: Array<TogglableItem>;
  toggle(index: number) { this.items[index].state = false; }
}
