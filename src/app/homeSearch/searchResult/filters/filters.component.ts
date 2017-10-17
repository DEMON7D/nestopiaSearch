import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'filter',
  templateUrl: 'filters.html',
  styleUrls: ['./filters.css']
})
export class FiltersComponent {

  property: string = "All";
  beds: string;
  bathrooms: string;

  @Output() onChangedProperty = new EventEmitter<string>();
  changeProperty() {
    this.onChangedProperty.emit(this.property);
  }

  @Output() onChangedBeds = new EventEmitter<string>();
  changeBeds() {
    this.onChangedBeds.emit(this.beds);
  }

  @Output() onChangedBathrooms = new EventEmitter<string>();
  changeBathrooms() {
    this.onChangedBathrooms.emit(this.bathrooms);
  }

}
