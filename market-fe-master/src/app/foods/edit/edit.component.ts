import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Foods } from '../foods';
import { FoodsService } from '../foods.service';
import {RestaurantService  } from 'src/app/restaurants/restaurants.service';
 
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
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
      phone:0
    }
  };
  allrestaurants: any;
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private foodsService: FoodsService,
    private restaurantService:RestaurantService
  ) {}

 
 
 
  ngOnInit(): void {
    this.get();
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }
  get() {
    this.restaurantService.get().subscribe((data: any) => {
      console.log("data:",data);
      this.allrestaurants = data;
    });
  }
  getById(id: number) {
    this.foodsService.getById(id).subscribe((data) => {
      this.foodsForm = data;
    });
  }
 
  update() {
    this.foodsService.update(this.foodsForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/foods/home"]);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}