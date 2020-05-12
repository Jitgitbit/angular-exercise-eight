import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})                 // <--- same as registering in app.module !
export class UserService {
  activatedEmitter = new Subject<boolean>();          // a subject is active, as opposed to a Observable(which is Passive) !
}