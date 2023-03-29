import { Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionItem } from 'src/app/core/models/map-item.model';

@Component({
  selector: 'ui-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-dropdown.component.html',
  styleUrls: ['./ui-dropdown.component.scss']
})
export class UiDropdownComponent {
  @Input() options!: OptionItem[] | null;
  @Input()
  set currentSelection(value) {
    this._currentSelection = value;
  }

  @Output() currentSelectionChange = new EventEmitter<OptionItem>();

  @ViewChild('dropdownComponent') dropdownComponent!: ElementRef;

  public selectedEmpty: string = 'Select an option';
  public isExpanded!: boolean;
  public limitedOptionsCount: number = 7;

  get currentSelection() {
    return this._currentSelection;
  }

  private _currentSelection!: OptionItem;

  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (event: Event) => {
      if (event.target !== this.dropdownComponent.nativeElement) {
        this.isExpanded = false;
      }
    });
  }

  public setCurrentSelection(option: OptionItem) {
    this.currentSelection = option;
    this.currentSelectionChange.emit(option);
  }

  public expanDropdownList() {
    this.isExpanded = !this.isExpanded
  }
}
