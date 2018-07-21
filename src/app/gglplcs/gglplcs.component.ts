import {Component, ElementRef, EventEmitter, NgZone, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl} from "@angular/forms";
import { } from 'googlemaps';
import {MapsAPILoader} from "@agm/core";


@Component({
  selector: 'app-gglplcs',
  templateUrl: './gglplcs.component.html',
  styleUrls: ['./gglplcs.component.scss']
})
export class GglplcsComponent implements OnInit {

    public latitude: number;
    public longitude: number;
    public searchControl: FormControl;
    public zoom: number;
    public formatted_address: string;

      @ViewChild("search")
    public searchElementRef: ElementRef;

    @Output() updatedSearch=new EventEmitter();

    constructor(
        private mapsAPILoader: MapsAPILoader,
        private ngZone: NgZone
    ) {}

    ngOnInit() {
        //set google maps defaults
        this.zoom = 4;
        this.latitude = 39.8282;
        this.longitude = -98.5795;

        //create search FormControl
        this.searchControl = new FormControl();

        //set current position
        this.setCurrentPosition();

        //load Places Autocomplete
        this.mapsAPILoader.load().then(() => {
            let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", () => {
                this.ngZone.run(() => {
                    //get the place result
                    let place: google.maps.places.PlaceResult = autocomplete.getPlace();

                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }

                    //set latitude, longitude and zoom
                    this.latitude = place.geometry.location.lat();
                    this.longitude = place.geometry.location.lng();
                    this.zoom = 12;
                    this.formatted_address = place.formatted_address;
                    this.updatedSearch.emit(this.formatted_address);
                });
            });
        });
    }

    private setCurrentPosition() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.latitude = position.coords.latitude;
                this.longitude = position.coords.longitude;
                this.zoom = 12;
            });
        }
    }
}
