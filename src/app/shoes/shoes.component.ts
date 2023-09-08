import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SearchModel } from 'src/models/search.model';
import { ShoeModel } from 'src/models/shoe.model';
import { ShoeService } from 'src/services/shoe.service';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.scss']
})
export class ShoesComponent implements OnInit{
  public shoes : Array<ShoeModel> = new Array<ShoeModel>();
  public search_model : SearchModel = new SearchModel()

  constructor(private formBuilder: FormBuilder, private service : ShoeService)
  {

  }

  shoeForm = this.formBuilder.group({
    color : ['',[]],
    heels : ['',[]],
    shoes : ['',[]],
    slippers : ['',[]],
    boots : ['',[]],
    sandals : ['',[]],

  });

  ngOnInit() {
    
  }

  
  
 
  GetShoes()
  {
    this.shoes = new Array<ShoeModel>();
    this.search_model.color = this.shoeForm.get('color')?.value ?? "";
    this.search_model.heels = this.toBool(this.shoeForm.get('heels')?.value ?? "false");
    this.search_model.sandals = this.toBool(this.shoeForm.get('sandals')?.value ?? "false");
    this.search_model.shoes = this.toBool(this.shoeForm.get('shoes')?.value ?? "false");
    this.search_model.slippers = this.toBool(this.shoeForm.get('slippers')?.value ?? "false");
    this.search_model.boots = this.toBool(this.shoeForm.get('boots')?.value ?? "false");
    console.log(this.search_model);
    this.service.GetShoes(this.search_model).subscribe(data => {
      this.shoes = data;
    });
  }

  GetImage(url : string)
  {
    return url;
  }

  toBool(a: any) {
    return Boolean(a).valueOf();
  }

}
