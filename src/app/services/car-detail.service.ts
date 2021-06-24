import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/carDetail';
import { DataResponseModel } from '../models/dataResponseModel';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
  apiURL="https://localhost:44301/api/"
  constructor(private httpClient:HttpClient) { }

  getCarDetails():Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiURL+"cars/getcardetails"
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarDetailsById(carId: Number): Observable<DataResponseModel<CarDetail>> {
    let newPath = this.apiURL + 'cars/getcardetailsbycarid?carId=' + carId;
    //console.log(this.httpClient.get<DataResponseModel<CarDetail>>(newPath))
    return this.httpClient.get<DataResponseModel<CarDetail>>(newPath);
  }
}
