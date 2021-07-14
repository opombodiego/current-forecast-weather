import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alert-error',
  template: `
  <div class="alert alert-warning" role="alert">
    Nenhuma cidade encontrada!
    Verifique se digitou corretamente, ou tente inserir novamente.
  </div>
  `
})

export class AlertErrorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
