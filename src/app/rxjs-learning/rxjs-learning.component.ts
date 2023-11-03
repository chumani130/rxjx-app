import { Component, OnInit } from '@angular/core';
import { Observable, of, interval, from } from 'rxjs';

@Component({
  selector: 'app-rxjs-learning',
  templateUrl: './rxjs-learning.component.html',
  styleUrls: ['./rxjs-learning.component.scss']
})
export class RxjsLearningComponent implements OnInit {
  agents!: Observable<string>
  ageName!: string;

  studentList = ['mark', 'Ram', 'Sita', 'Lisa'];
  students: Observable<string[]> = of(this.studentList);

  studentNames: Observable<string> = of('Ram');

  studentObj = {id: 10, name: 'Ram'}
  student$: Observable<any> = of(this.studentObj);

  // from operatoror
  orderArr = ['Fashion', 'Eletronics', 'Household', 'Mobile'];
  orders$: Observable<string> = from(this.orderArr);



  constructor() { }

  ngOnInit(): void {

    this.students.subscribe(data => {
      console.log(data);
    })
    this.studentNames.subscribe(data => {
      console.log(data);
    })
    this.student$.subscribe(data => {
      console.log(data);
    })

    this.orders$.subscribe(data => {
      console.log(data);
    })

  }
 }

// for creating observables


//export class RxjsLearningComponent implements OnInit {
//   agents!: Observable<string[]>;
//   agentName: string = ''; // Initialize agentName as an empty string

//   constructor() { }

//   ngOnInit(): void {
//     this.agents = new Observable<string[]>((observer) => {
//       try {
//         observer.next(['Ram']);
//         interval(3000).subscribe(() => {
//           observer.next(['Mark']);
//         });
//         interval(6000).subscribe(() => {
//           observer.next(['Sita']);
//         });
//         // Don't complete the observable here.
//       } catch (e) {
//         observer.error(e);
//       }
//     });

//     // You can't directly assign an observable to agentName. Instead, extract values from the observable.
//     this.agents.subscribe((data: string[]) => {
//       this.agentName = data[0]; // Assign the first agent name to agentName.
//     });
//   }
// }
