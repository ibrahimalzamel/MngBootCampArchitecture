import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/features/rentals/models/brandModels/brand';
import { BrandService } from 'src/app/features/rentals/services/brand.service';

@Component({
  selector: 'app-brand-add-form',
  templateUrl: './brand-add-form.component.html',
  styleUrls: ['./brand-add-form.component.css']
})
export class BrandAddFormComponent implements OnInit {
  dataLoaded: boolean = false;
  brandToEdit!: Brand;
  brands: Brand[] = [];
  brandForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private brandService: BrandService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) this.getBranById(params['id']);
      else this.createBrandForm();
  });
  }
  getBranById(id : number){
    this.brandService.getById(id).subscribe(response => {
      this.brandToEdit = response;
      this.dataLoaded = true;
      this.createBrandForm();

     });

   }
   createBrandForm(){
     this.brandForm = this.formBuilder.group({
      name: [this.brandToEdit?.name || '', Validators.required]     });

   }

   add() {
     if (!this.brandForm.valid) {
       this.toastrService.warning('There are missing fields.');
       return;
     }
     let modelToAdd: Brand = { ...this.brandForm.value };
     this.brandService.add(modelToAdd).subscribe(() => {
       this.toastrService.success('Model has been added.');
       this.router.navigate(['brands']);
     });
   }

   update() {
     if (!this.brandForm.valid) {
       this.toastrService.warning('There are missing fields.');
       return;
     }
     let modelToUpdate: Brand = { id: this.brandToEdit.id, ...this.brandForm.value };
     this.brandService.update(modelToUpdate).subscribe(() => {
       this.toastrService.success('Model has been updated.');
       this.router.navigate(['brands']);
     });
   }

   delete() {
     if (!window.confirm('Are you sure to delete?')) return;
     let modelToDelete: Brand = { id: this.brandToEdit.id, ...this.brandForm.value };
     this.brandService.delete(modelToDelete.id).subscribe(() => {
       this.toastrService.success('Model has been deleted.');
       this.router.navigate([ 'brands']);
     });
   }
}
