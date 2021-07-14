import { R3ResolvedDependencyType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'app-meteorological',
  templateUrl: './meteorological.component.html',
  styleUrls: ['./meteorological.component.scss']
})

export class MeteorologicalComponent implements OnInit {

  public form: FormGroup;
  public weekForecast: any;
  public submitted: boolean = false;
  public notFound: boolean = false;

  constructor(
    private _fb: FormBuilder,
    private service: ApiService,
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this._fb.group({
      city: [null, Validators.required]
    })
  }

  get f() {
    return this.form.controls;
  }

  getWeather() {
    this.submitted = true;
    if (this.form.valid) {
      this.service.getWeather(this.f.city.value)
        .then(response => {
          this.validateObject(response),
          this.submitted = false;
        })
        .catch(error => console.error(error))
    }
  }

  validateObject(obj) {
    switch (obj.by) {
      case 'city_name':
        this.weekForecast = obj;
        this.notFound = false;
        break;
      case null || 'default':
        this.weekForecast = null;
        this.notFound = true;
        break;
      default:
        this.weekForecast = null;
        this.notFound = false;
        break;
    }
  }

}
