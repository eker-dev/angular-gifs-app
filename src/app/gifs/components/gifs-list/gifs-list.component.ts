import { Component, input } from "@angular/core";
import { GifsListItemComponent } from "./gifs-list-item/gifs-list-item.component";

@Component({
	selector: "gifs-list",
	imports: [GifsListItemComponent],
	templateUrl: "./gifs-list.component.html",
})
export class GifsListComponent {
	listadoGifs = input.required<string[]>();
}
