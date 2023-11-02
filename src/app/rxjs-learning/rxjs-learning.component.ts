import { Component, OnInit } from '@angular/core';
import { Observable, of, interval } from 'rxjs';

@Component({
  selector: 'app-rxjs-learning',
  templateUrl: './rxjs-learning.component.html',
  styleUrls: ['./rxjs-learning.component.scss']
})
export class RxjsLearningComponent implements OnInit {
  agents!: Observable<string[]>;
  agentName: string = ''; // Initialize agentName as an empty string

  constructor() { }

  ngOnInit(): void {
    this.agents = new Observable<string[]>((observer) => {
      try {
        observer.next(['Ram']);
        interval(3000).subscribe(() => {
          observer.next(['Mark']);
        });
        interval(6000).subscribe(() => {
          observer.next(['Sita']);
        });
        // Don't complete the observable here.
      } catch (e) {
        observer.error(e);
      }
    });

    // You can't directly assign an observable to agentName. Instead, extract values from the observable.
    this.agents.subscribe((data: string[]) => {
      this.agentName = data[0]; // Assign the first agent name to agentName.
    });
  }
}
