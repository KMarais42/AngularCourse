import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Observable } from "rxjs/Observable";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  restrictedProjectNames = ['Test'];
  validProductStati = [
    { value: '', label: '-- select product status --', hidden: 'hidden' },
    { value: 'stable', label: 'Stable' },
    { value: 'critical', label: 'Critical' },
    { value: 'finished', label: 'Finished' }
  ];
  formValues;
  formSubmitted = false;
  ngOnInit() {
    this.projectForm = new FormGroup({
      'project name': new FormControl(null, [Validators.required], this.restrictedNames.bind(this)),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'project status': new FormControl(this.validProductStati[0].value, [Validators.required])
    });
  }
  onSubmit() {
    this.formValues = []
    this.formSubmitted = true;
    for (let value in this.projectForm.value) {
      this.formValues.push({label: value, value: this.projectForm.value[value]});
    }
  }
  restrictedNames(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (this.restrictedProjectNames.indexOf(control.value.trim()) >= 0) {
          resolve({'restrictedName': true})
        }
        else {
          resolve(null);
        }
      }, 1500)
    });
    return promise;
  }
}
