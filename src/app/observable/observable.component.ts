import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DemoserviceService } from '../services/demoservice.service';


@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit{
  servicearr:Array<any>;
  constructor(private route:ActivatedRoute, private router:Router,private demoservice:DemoserviceService){
    this.servicearr=demoservice.servicearr;
  }
  str:any

  arr=[{
    name:"sankha",
    orderBy:1
  },
{
  name:"sankha",
  orderBy:2
},
{
  name:"sankha",
  orderBy:3
}]
  ngOnInit(){
    const obsTest$= new Observable(observer =>{
      setTimeout(()=>{
        observer.next('Sankha');
      },4000);
      setTimeout(()=>{
        observer.next('Dudh pee le');
      },6000);
      observer.next('Hello');

    }).subscribe(value =>{
      this.str=value;
      console.log(value);
    });

    this.route.queryParamMap.subscribe(value=>{
      console.log(value);
      const name=value.get('name');
    })

    const obsTest=function(){
     return 'Return from function'
    }
   const returnData=obsTest();
   console.log(returnData);
  }

  onSubmit(){
    this.router.navigate(['/moviebutton'],{queryParams:{name:1,orderBy:2}});
  }

  addNewData(){
    this.demoservice.addPost();
  }

}
