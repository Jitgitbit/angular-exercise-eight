import { Injectable, EventEmitter } from '@angular/core';

@Injectable({providedIn: 'root'})                 // <--- same as registering in app.module !
export class UserService {
  activatedEmitter = new EventEmitter<boolean>();
}