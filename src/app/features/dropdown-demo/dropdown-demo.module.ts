import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatSlideToggleModule } from "@angular/material";
import { UiDropdownComponent } from "src/app/shared/ui-dropdown/ui-dropdown.component";
import { DropdownDemoComponent } from './dropdown-demo/dropdown-demo.component';

@NgModule({
    declarations: [DropdownDemoComponent],
    imports: [
        UiDropdownComponent, CommonModule
    ],
    exports: [DropdownDemoComponent],
})
export class DropdownDemoModule { }