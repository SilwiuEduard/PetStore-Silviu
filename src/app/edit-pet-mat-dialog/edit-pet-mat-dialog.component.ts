import { Component, ElementRef, Inject, Input, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PetInterface } from '../shared/pet.interface';
import { DataStorageService } from '../shared/dataStorage.service';

@Component({
  selector: 'app-edit-pet-mat-dialog',
  templateUrl: './edit-pet-mat-dialog.component.html',
  styleUrls: ['./edit-pet-mat-dialog.component.css'],
})
export class EditPetMatDialogComponent {
  petFormEdit: FormGroup;
  petEditArray: PetInterface;

  // @ViewChild('saveButton', { static: true }) saveButton: ElementRef;

  constructor(
    private router: Router,
    private dataStorageService: DataStorageService,
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<EditPetMatDialogComponent>,
    @Inject(MAT_DIALOG_DATA) pet: PetInterface
  ) {
    this.petEditArray = pet;

    console.log('log petEditArray: ', this.petEditArray, 'log pet: ', pet);

    this.petFormEdit = fb.group({
      id: [this.petEditArray.id],
      category: this.fb.group({
        id: [this.petEditArray.category.id],
        name: [this.petEditArray.category.name, Validators.required],
      }),
      name: [pet.name, [Validators.required, Validators.pattern('[a-zA-Z].*')]],
      photoUrls: [pet.photoUrls],
      tags: this.fb.array([
        this.fb.group({
          id: this.fb.control(pet.tags),
          name: this.fb.control(pet.tags),
        }),
      ]),
      status: [pet.status, Validators.required],
    });

    console.log('log: petFormEdit', this.petFormEdit);
  }

  onCategorySelect(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    let categoryId = '1';
    let categoryName = 'Not selected';
    console.log(selectedValue);
    if (selectedValue === '2') {
      categoryId = '2';
      categoryName = 'Dog';
    } else if (selectedValue === '3') {
      categoryId = '3';
      categoryName = 'Cat';
    } else if (selectedValue === '4') {
      categoryId = '4';
      categoryName = 'Bird';
    } else if (selectedValue === '5') {
      categoryId = '5';
      categoryName = 'Fish';
    }

    this.petFormEdit.get('category.id').setValue(categoryId);
    this.petFormEdit.get('category.name').setValue(categoryName);
  }

  close(): void {
    this.matDialogRef.close();
  }

  save() {
    this.dataStorageService.editPet(this.petFormEdit.value);
  }
}
