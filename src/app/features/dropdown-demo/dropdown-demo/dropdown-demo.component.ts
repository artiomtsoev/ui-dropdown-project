import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OptionItem } from 'src/app/core/models/map-item.model';
import { ItemsService } from 'src/app/core/services/items.service';

@Component({
  selector: 'app-dropdown-demo',
  templateUrl: './dropdown-demo.component.html',
  styleUrls: ['./dropdown-demo.component.scss']
})
export class DropdownDemoComponent {
  public selectedItem!: OptionItem;
  public selectedItemMessageResult!: string;

  constructor(private readonly optionService: ItemsService) { }

  public options$: Observable<OptionItem[]> = this.optionService.getItemsList();

  public selectionChanged(optionItem: OptionItem) {
    this.selectedItem = optionItem;
    this.selectedItemMessageResult = `Current selected item option is '${this.selectedItem.name}' with id '${this.selectedItem.id}'`;
  }
}
