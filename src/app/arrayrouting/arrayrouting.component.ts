import { Component } from '@angular/core';

@Component({
  selector: 'app-arrayrouting',
  templateUrl: './arrayrouting.component.html',
  styleUrls: ['./arrayrouting.component.css']
})
export class ArrayroutingComponent {
arr=[{
  
  moviename:"Jack Reacher",
  moviegenre:"Action",
  rating:9
},
{
  
  moviename:"Tomb Raider",
  moviegenre:"Adventure",
  rating:8
},
{
  
  moviename:"Terminator",
  moviegenre:"Sci-Fi",
  rating:10
}];


}
