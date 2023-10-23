import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  HostListener,
} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PetModel } from '../shared/pet.model';
import { PetService } from '../shared/pet.service';
import { DataStorageService } from '../shared/dataStorage.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css'],
})
export class PetListComponent implements OnInit {
  @Input() pet: PetModel;
  index: number;
  hardcodePetArray: PetModel[];

  petEdit: PetModel[];

  constructor(
    private router: Router,
    private petService: PetService,
    private route: ActivatedRoute,
    private dataStorageService: DataStorageService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.index = +params['id'];
    });

    this.hardcodePetArray = this.petService.gethardcodedPetArray();
  }

  onEditPetClick(index: any) {}

  OnDeletePet(index: any) {}
}
