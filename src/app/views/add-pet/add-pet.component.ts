import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { PetModel } from '../../shared/pet.model';
import { PetService } from '../../core/pet.service';
import { DataStorageService } from '../../core/dataStorage.service';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css'],
})
export class AddPetComponent {
  @ViewChild('formAddRef') submitForm: NgForm;
  defaultStatus = 'available';

  isSubmitted: boolean = false; // pentru fereastra confirmare/eroare dupa submit

  constructor(
    private router: Router,
    private petService: PetService,
    private route: ActivatedRoute,
    private dataStorageService: DataStorageService
  ) {}

  onSubmit(form: NgForm) {
    this.isSubmitted = true;

    const petProps = form.value;
    const newPet = new PetModel(
      petProps.id,
      {
        id: petProps.categoryI,
        name: petProps.categoryN,
      },
      petProps.name,
      [petProps.photo],
      [{ id: petProps.tagI, name: petProps.tagN }],
      petProps.status
    );
    this.dataStorageService.addPet(newPet);

    console.log(form);

    setTimeout(() => {
      this.isSubmitted = false;
      this.router.navigate(['/list']);
      window.scrollTo(0, 0);
    }, 1000);
  }

  onCancel() {
    this.submitForm.reset();
  }
}