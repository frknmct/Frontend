import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarImageService } from 'src/app/services/car-image.service';


@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  carDetails:CarDetail;
  carImages:CarImage[]=[];
  dataLoaded=false;
  constructor(
    private carDetailService:CarDetailService,
    private carImageService:CarImageService,
    private activatedRoot:ActivatedRoute,
    ) { }

  ngOnInit(): void {

    this.activatedRoot.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarDetailsById(params["carId"]);
      }
    })
  }

  getCarDetailsById(carId:number){
    this.carDetailService.getCarDetailsById(carId).subscribe(response=>{
      console.log(response)
      this.carDetails=response.data;
      this.dataLoaded=true;
    })
  }

  getCarImage(carId:number){
    this.carImageService.getByCarId(carId).subscribe(response=>{
      this.carImages=response.data;
    })
  }
}
