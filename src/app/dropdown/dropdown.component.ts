import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit{
  themes = [
    { name: 'Striped', class: 'table table-striped-columns' },
    { name: 'Dark Striped', class: 'table table-dark table-striped' },
    { name: 'Blue', class: 'table table-success table-striped'},
    { name: 'Normal', class: 'table'},
  ];
  selectedTheme = this.themes[0]; // default to the first theme
  

  type1()
  {
    alert("type 1 selected");
  }
  type2()
  {
    alert("type 2 selected");
  }
  type3()
  {
    alert("type 3 selected");
  }

  constructor(){

  }

  ngOnInit(): void {
    
  }


}
