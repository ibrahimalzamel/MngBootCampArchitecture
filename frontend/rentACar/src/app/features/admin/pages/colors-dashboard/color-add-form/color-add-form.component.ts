import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/features/rentals/models/colorModels/color';
import { ColorService } from 'src/app/features/rentals/services/color.service';

@Component({
  selector: 'app-color-add-form',
  templateUrl: './color-add-form.component.html',
  styleUrls: ['./color-add-form.component.css']
})
export class ColorAddFormComponent implements OnInit {
  dataLoaded: boolean = false;
  colorToEdit!: Color;
  colors: Color[] = [];
  colorForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private colorService: ColorService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) this.geColorById(params['id']);
      else this.createColorForm();
  });
  }
  geColorById(id : number){
    this.colorService.getById(id).subscribe(response => {
      this.colorToEdit = response;
      this.dataLoaded = true;
      this.createColorForm();

     });

   }
   createColorForm(){
     this.colorForm = this.formBuilder.group({
      name: [this.colorToEdit?.name || '', Validators.required]     });

   }

   add() {
     if (!this.colorForm.valid) {
       this.toastrService.warning('There are missing fields.');
       return;
     }
     let modelToAdd: Color = { ...this.colorForm.value };
     this.colorService.add(modelToAdd).subscribe(() => {
       this.toastrService.success('Model has been added.');
       this.router.navigate(['color']);
     });
   }

   update() {
     if (!this.colorForm.valid) {
       this.toastrService.warning('There are missing fields.');
       return;
     }
     let modelToUpdate: Color = { id: this.colorToEdit.id, ...this.colorForm.value };
     this.colorService.update(modelToUpdate).subscribe(() => {
       this.toastrService.success('Model has been updated.');
       this.router.navigate(['color']);
     });
   }

   delete() {
     if (!window.confirm('Are you sure to delete?')) return;
     let modelToDelete: Color = { id: this.colorToEdit.id, ...this.colorForm.value };
     this.colorService.delete(modelToDelete.id).subscribe(() => {
       this.toastrService.success('Model has been deleted.');
       this.router.navigate([ 'color']);
     });
   }
}
