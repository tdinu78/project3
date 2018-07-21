import {SupplierModel} from "./supplier.model";

export interface SupplierRespModel {
    rc: number;
    message: string;
    count:number;
    results: SupplierModel[];

}
