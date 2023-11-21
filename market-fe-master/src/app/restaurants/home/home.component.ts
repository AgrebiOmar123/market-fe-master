import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurants.service';
declare var window: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allRestaurants: Restaurant[] = [];
  deleteModal: any;
  idTodelete: number = 0;
  constructor(private restaurantService: RestaurantService) {}
  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
    this.get();
  }
  get() {
    this.restaurantService.get().subscribe((data) => {
      this.allRestaurants = data;
    });
  }
  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }
 
  delete() {
    this.restaurantService.delete(this.idTodelete).subscribe({
      next: (data) => {
        this.allRestaurants = this.allRestaurants.filter(_ => _.id != this.idTodelete)
        this.deleteModal.hide();
      },
    });
  }
}


 

 
 
 
   
 
 
 

