import React, { Component } from 'react';
import Rx from 'rxjs/Rx';
import { count } from 'rxjs/operator/count';

// external produce new events
const myObservable = new Rx.Subject();
myObservable.subscribe(value => console.log(value));
myObservable.next('foo');

// internally produce new events
const myObservable2 = Rx.Observable.create(observer => {
  observer.next('foo');
  setTimeout( () => observer.next('bar', 100));
})

myObservable2.subscribe(value => console.log(value));



export default class RxDemo extends Component{
  test = () => {
  // const input = Rx.Observable.fromEvent(document.querySelector('input'), 'input');

    // input.filter(event => event.target.value.length > 2)
    //   .map(event => event.target.value)
    //   .subscribe(value => console.log(value));

    // input.delay(200)
    // .map(event => event.target.value)
    // .subscribe(value => console.log(value));

    // input.throttle(200)
    //   .map(event => event.target.value)
    //   .subscribe(value => console.log(value));

    //  input.take(3)
    //   .map(event => event.target.value)
    //   .subscribe(value => console.log(value));

    // const stopStream = Rx.Observable.fromEvent(document.querySelector('button', 'click'));
    // input.takeUntil(stopStream)
    //   .map(event => event.target.value)
    //   .subscribe(value => console.log(value));

    // input.map(event => event.target.value)
    //   .subscribe(value => console.log(value)); 

    // input.pluck('target', 'value').distinctUntilChanged()
    //   .subscribe(value => console.log(value));
    
    // Rx.Observable.fromEvent(document.querySelector('button'), 'click')
    //   .scan(count => count + 1, 0)
    //   .subscribe(count => document.querySelector('#count').innerHTML = count);
  }

  componentDidMount(){
    const increaseButton = document.querySelector('#increase');
    const increase = Rx.Observable.fromEvent(increaseButton, 'click')
      .map(() => state => Object.assign({}, state, {count: state.count + 1}))

    const decreaseButton = document.querySelector('#decrease');
    const decrease = Rx.Observable.fromEvent(decreaseButton, 'click')
      // We also map to a function that will decrease the count
      .map(() => state => Object.assign({}, state, {count: state.count - 1}));

    const inputElement = document.querySelector('#input');
    const input = Rx.Observable.fromEvent(inputElement, 'keypress')
      .map(event => state => Object.assign({}, state, {inputValue: event.target.value}));

    const timeA$ = Rx.Observable.interval(1000).take(21)
    const timeB$ = timeA$.filter(num => { 
      return (num % 2 != 0) 
        && (num % 3 != 0) 
        && (num % 5 != 0) 
        && (num % 7 != 0) })
    const timeC$ = timeB$.debounceTime(3000) 
    const timeD$ = timeC$.delay(2000)

    const timeA = timeA$.map(() => state => Object.assign({}, state, {a: state.a + 1})); 
    const timeB = timeB$.map(() => state => Object.assign({}, state, {b: state.a - 1}));    
    const timeC = timeC$.map(() => state => Object.assign({}, state, {c: state.a - 1}));    
    const timeD = timeD$.map(() => state => Object.assign({}, state, {d: state.a - 1}));        

    const state = Rx.Observable.merge(
      increase,
      decrease,
      input,
      timeA,
      timeB,
      timeC,
      timeD
    ).scan((state, changeFn) => changeFn(state), {
      count: 0,
      inputValue: '',
      a: 0,
      b: null,
      c: null,
      d: null
    });

    // state.subscribe(state => {
    //   document.querySelector('#count').innerHTML = state.count;
    //   document.querySelector('#hello').innerHTML = 'Hello ' + state.inputValue;
    //   document.querySelector('#A').innerHTML += ' ' + state.a;
    //   document.querySelector('#B').innerHTML += ' ' + state.b;
    //   document.querySelector('#C').innerHTML += ' ' + state.c;
    //   document.querySelector('#D').innerHTML += ' ' + state.d;
    // });

    let prevState = {};
    state.subscribe(state => {
      if (state.count !== prevState.count) {
        document.querySelector('#count').innerHTML = state.count;
      }
      if (state.inputValue !== prevState.inputValue){
        document.querySelector('#hello').innerHTML = 'Hello' + state.inputValue
      }

      if(state.a !== prevState.a){
        document.querySelector('#A').innerHTML += ' ' + state.a;    
      }

      if(state.b && state.b !== prevState.b){
        document.querySelector('#B').innerHTML += ' '+ state.b;      
      }

      if(state.c && state.c !== prevState.c){
        document.querySelector('#C').innerHTML += ' ' + state.c;      
      }

      if(state.d && state.d !== prevState.d){
        document.querySelector('#D').innerHTML += ' '+ state.d;      
      }
      prevState = state;
    })
    
  }


  render() {
    return (
      <div> 
        <div>
          <input type="text" />
          <button>stop</button>
        </div>
        <div>
          <input type="text" id="input"/>      
          <button id="increase">increase</button>        
          <button id="decrease">decrease</button>  
          <div id="count"></div>
          <div id="hello"></div>          
        </div>
        <div>
          <div id="A">A:</div>
          <div id="B">B:</div>
          <div id="C">C:</div>
          <div id="D">D:</div>
        </div>
      </div>
    );
  }
}

