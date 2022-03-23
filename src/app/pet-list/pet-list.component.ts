import { Component, OnInit } from '@angular/core';
import { SavePetService } from '../save-pet.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

  constructor(private savePetService: SavePetService) { }

  ngOnInit(): void {
  }

  get Pets(){
    return this.savePetService.getPets();
  }

}
