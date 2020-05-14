import { Component, OnInit, Input } from '@angular/core';
import { Vendor } from '../model/vendor';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input()
  public vendor: Vendor;
  
  constructor() { }

  ngOnInit() {
  }

}
