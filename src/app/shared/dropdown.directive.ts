import { Directive, HostListener, HostBinding } from "@angular/core";
import { flattenStyles } from "@angular/platform-browser/src/dom/dom_renderer";

@Directive({
    selector: '[appDropdown]'
})
// Attribute Directive.
// Adds a certain CSS class it sits on. On click. 
// When clicked again it removes the CSS class.
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;
    
    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }
}