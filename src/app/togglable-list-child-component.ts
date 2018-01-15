import { BaseComponent } from './base-component';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { TogglableItem } from './togglable-list-component';

export abstract class TogglableListChildComponent extends BaseComponent {
  item: TogglableItem;

  @Input() toggle = new EventEmitter<void>();

  onToggle(): void { this.toggle.emit(); }
}
