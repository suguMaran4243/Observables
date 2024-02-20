import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Observables';
  counterSub;
  // myObservable =new Observable((observer)=>
  // {
  // console.log('observerable starts..');
  // setTimeout(()=> {observer.next('1')},1000)
  // setTimeout(()=> {observer.next('2')},2000)
  // // setTimeout(()=> {observer.error(new Error('Something went wrong .Please again later'))},2000)
  // setTimeout(()=> {observer.next('3')},3000)
  // setTimeout(()=> {observer.next('4')},4000)
  // // setTimeout(()=> {observer.complete()},6000)
 

  // })
  // ngOnInit() {
  //   this.myObservable.subscribe((val)=>
  //   {
  //     console.log(val)
  //   },(err)=>
  //   {
  //     alert(err.message)
  //   },()=>
  //   {
  //     alert('Observable completed')
  //   })
    
  // }
 counterObservalnle =interval(1000);
 

 ngOnInit(){
   
  
 }
 unSubscribe()
 {
  this.counterSub.unsubscribe()
 }
 Subscribe()
 {
  this.counterSub=this.counterObservalnle.subscribe((val)=>
  {
    
    console.log(val);
  })
 }

 
  
}
