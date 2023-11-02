import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-learning',
  templateUrl: './rxjs-learning.component.html',
  styleUrls: ['./rxjs-learning.component.scss']
})
export class RxjsLearningComponent  implements OnInit {

  agents!: Observable<string>;
  constructor() { }

  ngOnInit(): void {
    this.agents = new Observable(
      function(observer){
        try {
          observer.next('Ram');
          observer.next('Mark');
          observer.next('Sita');
        }
        catch(e) {
          observer.error(e);
        }
      }
    );
    this.agents.subscribe(data => {
      console.log(data);
    })
  }

}
