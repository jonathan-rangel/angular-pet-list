import { Component, OnInit } from '@angular/core';
import { Pet} from '../pet';
import { SavePetService } from '../save-pet.service';

@Component({
  selector: 'app-data-capture',
  templateUrl: './data-capture.component.html',
  styleUrls: ['./data-capture.component.css']
})
export class DataCaptureComponent implements OnInit {

  pet!: Pet;

  constructor(private savePetService: SavePetService) { }

  ngOnInit(): void {
    this.pet = {} as Pet;
  }

  savePet(pet: Pet) {
    this.savePetService.savePet(pet)
  }

}
