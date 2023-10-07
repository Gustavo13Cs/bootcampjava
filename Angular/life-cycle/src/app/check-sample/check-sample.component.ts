import { Component, OnInit, DoCheck,AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements OnInit,DoCheck,AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewInit,OnDestroy {

  quantidade:number = 0
  constructor() { }
 
  adicionar() {
    this.quantidade += 1
  }
  decrementar() {
    this.quantidade -= 1
  }

  // checked -> content -> view

  //quanto o primeiro conteudo e iniciado
  ngAfterViewInit(): void {
    console.log("AfterViewInit")
  }
  // depois da inicialização da view
  ngAfterContentInit(): void {
    console.log("AfterContentInit")
  }

  // apos alguma alteração verifica o conteudo
  ngAfterViewChecked(): void {
    console.log("AfterViewChecked")
  }
  // apos alguma alteração verifica a view 
  ngAfterContentChecked(): void {
    console.log("AfterContentChecked")
  }
  ngDoCheck(): void {
    console.log("DoCheck")
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log("goodbye my friend")
  }

}
