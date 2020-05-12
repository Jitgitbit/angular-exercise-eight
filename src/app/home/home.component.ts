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
        count++;
      }, 1000);
    });

    this.secondObsSubscription = customIntervalObservable.subscribe(data => {
      console.log(`CUSTOM Observable says what?`,data);
    });
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();                 // now when you navigate away, the interval stops, no more memory leak !
    this.secondObsSubscription.unsubscribe();
  }
}
