import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css"
})
export class HeaderComponent {
  @Output() public pageSet = new EventEmitter<string>();
  collapsed = true;
  UpdatePage(page:string){
    this.pageSet.emit(page);
  }
}
