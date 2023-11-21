import { Component, OnInit } from '@angular/core';
import {Restaurant } from '../restaurant';
import {RestaurantService} from '../restaurants.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  Restaurantform: Restaurant = {
    id: 0,
    name: '',
    imageUrl: '',
    address:'',
    phone:0
  
  };
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private RestaurantService: RestaurantService
  ) {}
 
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }
 
  getById(id: number) {
    this.RestaurantService.getById(id).subscribe((data) => {
      this.Restaurantform = data;
    });
  }
 
  update() {
    this.RestaurantService.update(this.Restaurantform)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/restaurants/home"]);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}