import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1 class="jumbotron">ZOOmAPP</h1>
    <div class="row">
      <div class="col-md-9">
        <label>View as:</label>
        <select (change)="onChange($event.target.value)" class="form-control form-control-lg">
          <option selected="selected" value="all">All Animals</option>
          <option value="young">All Young Animals</option>
          <option value="old">All Old Animals</option>
        </select>
      </div>
      <div class="col-md-3">
        <button class="btn btn-default btn-lg"><span class="add-plus">&nbsp;+<br></span>Add New Animal</button>
      </div>
    </div>
    <hr>
    <div class="form-group row" *ngIf="selectedAnimal">
      <div class="col-md-6">
        <h2>EDIT FORM</h2>
        <h3>{{selectedAnimal.species}}</h3>
        <img src={{selectedAnimal.image}}>
      </div>
      <div class="col-md-6">
        <label>Edit species:</label>
        <input class="form-control"[(ngModel)]="selectedAnimal.species">
        <label>Edit image URL:</label>
        <input type="url" class="form-control" [(ngModel)]="selectedAnimal.image">
        <label>Edit name:</label>
        <input class="form-control"[(ngModel)]="selectedAnimal.name">
        <label>Edit location:</label>
        <input class="form-control"[(ngModel)]="selectedAnimal.location">
        <label>Edit sex:</label>
        <input class="form-control"[(ngModel)]="selectedAnimal.sex">
        <label>Edit caretakers:</label>
        <input class="form-control"[(ngModel)]="selectedAnimal.caretakers">
        <label>Edit likes:</label>
        <input class="form-control"[(ngModel)]="selectedAnimal.likes">
        <label>Enter dislikes:</label>
        <input class="form-control"[(ngModel)]="selectedAnimal.dislikes"><br>
        <button class="btn btn-primary btn-lg" (click)="finishedEditing()">Submit</button>
      </div>
    </div>
    <animal-list [childAnimalList]="masterAnimals"></animal-list>
  </div>
  `
})

export class AppComponent {
  public currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  public age: number;
  public birthDates;

  masterAnimals: Animal[] = [
    new Animal('/resources/images/arcticFox.jpg','Arctic Fox','Moon','10-13-2016','Carnivore','Northern Trail',5,'Female','Cool shade','Loud Noises'),
    new Animal('/resources/images/northwestBlackTailedDeer.jpg','Northwest Black Tailed Deer','Prince','11-25-2009','Carnivore','Northern Trail',5,'Male','Cool shade','Loud Noises'),
    new Animal('/resources/images/ocelot.jpg','Ocelot','Tinkerbell','01-01-2013','Carnivore','Northern Trail',5,'Female','Cool shade','Loud Noises'),
  ];

    selectedAnimal = null;

  getAge(bday){
    this.birthDates = new Date(bday);
    return this.age = this.currentTime.getFullYear()-this.birthDates.getFullYear();
  }

  editAnimal(clickedAnimal){
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

}
