
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Foods } from 'src/app/foods/foods';
 
@Injectable({
  providedIn: 'root',
})
export class FoodsService {
  constructor(private http: HttpClient) {}
  get(){
    return this.http.get<Foods[]>('http://localhost:8080/food');
  }
  create(payload: Foods) {
    return this.http.post<Foods>('http://localhost:8080/food', payload);
  }
  getById(id: number) {
    return this.http.get<Foods>(`http://localhost:8080/food/${id}`);
   }
    
   update(payload:Foods){
    return this.http.put(`http://localhost:8080/food/`,payload);
   }
   delete(id:number){
    return this.http.delete<Foods>(`http://localhost:8080/food/${id}`);
 }
}
