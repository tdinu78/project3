import {AfterViewInit, Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {SupplierModel} from "../supplier.model";
import {GglplcsComponent} from "../../gglplcs/gglplcs.component";
import {SearchfrmService} from "./searchfrm.service";
import {NavItem} from "../../navbar/navitem.model";
import {SupplierRespModel} from "../supplierResp.model";

@Component({
  selector: 'app-searchfrm',
  templateUrl: './searchfrm.component.html',
  styleUrls: ['./searchfrm.component.scss'],
  providers: [SearchfrmService]
})
export class SearchfrmComponent{
    @Output() searchDone=new EventEmitter();
    sdata:SupplierModel;
    sdataArr:Array<SupplierModel>;
    sdataArrCount:number;
    @Input() s_category:string;

  constructor(private searchfrmService: SearchfrmService){
      this.sdata={
          type:this.s_category,
          name: null,
          lifecycle: null,
          place: null,
          phoneNumber: null,
          email: null,
          minPrice: null,
          minInv: null,
          maxInv: null,
          outdoor: null,
          accommodation: null,
          fireworks: null,
          events: null,
          preparations: null,
          parking: null,
          password: null,
      }
  }
    updatePlace(place){
        if(place!=null) {
            this.sdata.place = place;
        }else{
            //are eroare
        }
    }

    onSubmit():void{
        this.searchfrmService.getSearchResults(this.sdata)
            .subscribe((data : SupplierRespModel)=>{
            this.sdataArr=data.results;
            this.sdataArrCount=data.count;
            this.searchDone.emit(data);
        },
                error => {
                    console.log('am eroarea: ', error);
                    this.sdataArr = [];
                    this.searchDone.emit(null);
                });
        }
}
