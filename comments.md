.md stands for markdown btw

ng new angular-exercise-eight

npm install --save bootstrap@3

ng serve

Important note on Subjects as a replacement for EventEmitters :
This only counts if you use them as cross-component EventEmitters (where you manually call next),
don't use Subject as EventEmitter when you're using @Output, rxjs is not suitable there !!!
