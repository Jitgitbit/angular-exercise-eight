import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription: Subscription
  private secondObsSubscription: Subscription

  constructor() { }

  ngOnInit() {
    this.firstObsSubscription = interval(1000).subscribe(count => {
      console.log(`semi-custom Observable says what?`,count);                                    // MEMORY LEAK !!!!! DANGER DANGER !
    });

    const customIntervalObservable = Observable.create(observer => {
      let count = 0;
      setInterval(()=>{
        observer.next(count);
        if(count > 7){
          observer.error(new Error('==> Oh no, count is greater than 7 !'));
        }
        count++;
      }, 1000);
    });

    this.secondObsSubscription = customIntervalObservable.subscribe(data => {
      console.log(`CUSTOM Observable says what?`,data);
    }, error => {
      console.log(`==> error log says what?`,error);
      alert(error.message);
    });
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();                 // now when you navigate away, the interval stops, no more memory leak !
    this.secondObsSubscription.unsubscribe();
  }
}
