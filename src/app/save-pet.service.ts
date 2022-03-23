import { Injectable } from '@angular/core';
import { Pet } from './pet';

@Injectable({
  providedIn: 'root'
})
export class SavePetService {

  pets_list: Pet[] = [];

  savePet(pet: Pet) {
    this.pets_list.push(this.newPet(pet.type, pet.age, pet.breed));
  }

  newPet(type: string, age: number, breed: string): Pet {
    return {
      type: type,
      age: age,
      breed: breed
    }
  }

  getPets() {
    return this.pets_list;
  }

  constructor() { }
}
