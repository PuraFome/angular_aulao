import { Component } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { of } from 'rxjs';

type Callback<T> = (value: T) => void;

class Observer<T> {
  #subject = new Set<Callback<T>>([]);

  subscribe(cb: Callback<T>){
    this.#subject.add(cb);

    const unsubcribe = () =>{
      this.#subject.delete(cb);
    };

    return { unsubcribe };
  }

  next(value: T){
    for (const cb of this.#subject){
      console.log(cb);
      cb(value);
    }
  }
}

interface User {
  id: number;
}

const obs$ = new Observer<User>();

const $obs = obs$.subscribe((value) => {
  console.log(value)
});

obs$.next({ id: 2});

$obs.unsubcribe();

obs$.next({ id: 3});


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tributech';

  buttonColor = 'red';
  colors: string[] = ['red','pink', 'purple', 'blue']

  colorChange(){
    if (this.buttonColor == 'red'){
      this.buttonColor = 'blue'
      console.log(this.buttonColor)
    }else{
      this.buttonColor = 'red'
    }
  }


  constructor(){
    // setTimeout(() => {
    //   this.buttonColor = 'pink';
    //   console.log(this.buttonColor)
    // }, 4000)

    // this.colors.forEach(value =>
    //   setTimeout(()=>{
    //     this.buttonColor = value
    //   },4000)
    // )
  }
}
