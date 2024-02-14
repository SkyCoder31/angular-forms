import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoserviceService {
  servicearr:Array<any>=[
    {id:1,title:"Abc1"},
    {id:2,title:"Abc2"},
    {id:3,title:"Abc3"},
    {id:4,title:"Abc4"},
    {id:5,title:"Abc5"}
  ]

  constructor() { }
  addPost(){
    let newPost={
      id:21,
      title:"ABC21"
    };
    this.servicearr.push(newPost);
  }
}
