import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OptionItem } from '../models/map-item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  public getItemsList(): Observable<OptionItem[]> {
    const dropdownItems: OptionItem[] = [
      { name: 'Option 1', id: 1 },
      { name: 'Option 2', id: 2 },
      { name: 'Option 3', id: 3 },
      { name: 'Option 4', id: 4 },
      { name: 'Option 5', id: 5 },
      { name: 'Option 6', id: 6 },
      { name: 'Option 7', id: 7 },
      { name: 'Option 8', id: 8 },
      { name: 'Option 9', id: 9 },
    ];
    return of(dropdownItems);
  }
}
