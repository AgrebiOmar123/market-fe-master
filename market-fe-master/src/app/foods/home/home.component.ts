
import { Component, OnInit } from '@angular/core';
import { Foods } from '../foods';
import { FoodsService } from '../foods.service';
 
declare var window: any;
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  allFoods: Foods[] = [];
  deleteModal: any;
  idTodelete: number = 0;
 
  constructor(private foodsService: FoodsService) {}
 
  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
 
    this.get();
  }
 
  get() {
    this.foodsService.get().subscribe((data) => {
      this.allFoods = data;
    });
  }
 
  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }
 
  delete() {
    this.foodsService.delete(this.idTodelete).subscribe({
      next: (data) => {
        this.allFoods = this.allFoods.filter(_ => _.id != this.idTodelete)
        this.deleteModal.hide();
      },
    });
  }
}