import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from '../restaurant';

import { RestaurantService } from '../restaurants.service';
 
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  Restaurantform: Restaurant = {
    id: 0,
    name: '',
    imageUrl: '',
    address:'',
    phone:0
  
  };
 
  constructor(private restaurantService:RestaurantService,
    private router:Router) {}
 
  ngOnInit(): void {}
 
  create(){
    this.restaurantService.create(this.Restaurantform)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/restaurants/home"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}