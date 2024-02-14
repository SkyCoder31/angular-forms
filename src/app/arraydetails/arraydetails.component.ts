import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-arraydetails',
  templateUrl: './arraydetails.component.html',
  styleUrls: ['./arraydetails.component.css']
})
export class ArraydetailsComponent implements OnInit {
  moviegenre:any;
  rating:any;
  constructor(private route:ActivatedRoute){
    
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>{
      let id=value.get('id');
      console.log(id);
      this.moviegenre=value.get('moviegenre');
      console.log(this.moviegenre);
      this.rating=value.get('rating');
      console.log(this.rating);
    })
  }

}
