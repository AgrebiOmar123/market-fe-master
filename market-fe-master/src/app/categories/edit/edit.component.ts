import { Component, OnInit } from '@angular/core';
import { Categories } from '../categories';
import { CategoriesService } from '../categories.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  categorieform: Categories = {
    id: 0,
    name: '',
    description:'',
   
  };
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private fruitService: CategoriesService
  ) {}
 
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }
 
  getById(id: number) {
    this.fruitService.getById(id).subscribe((data) => {
      this.categorieform = data;
    });
  }
 
  update() {
    this.fruitService.update(this.categorieform)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/categories/home"]);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}