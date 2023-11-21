import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Foods } from '../foods';
import { FoodsService } from '../foods.service';
import { RestaurantService } from 'src/app/restaurants/restaurants.service';
 
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  foodsForm: Foods = {
    id: 0,
    name: '',
    cookTime: '',
    favorite: true,
    stars:0,
    imageUrl:'',
    restaurant:{
      id: 0,
      name: '',
      imageUrl: '',
      address:'',
      phone:0,
    }
  };

  allrestaurants: any;
 
  constructor(
    private foodsService:FoodsService,
    private restaurantService:RestaurantService,
    private router:Router)
     {}
 
    ngOnInit(): void {
      this.get();
    }
   
    get() {
      this.restaurantService.get().subscribe((data: any) => {
        console.log("data:",data);
        this.allrestaurants = data;
      });
    }
  create(){
    this.foodsService.create(this.foodsForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/foods/home"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}
