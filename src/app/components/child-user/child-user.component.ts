import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DesignutilityService } from 'src/app/appService/designutility.service';

@Component({
  selector: 'app-child-user',
  templateUrl: './child-user.component.html',
  styleUrls: ['./child-user.component.css']
})
export class ChildUserComponent implements OnInit {

  constructor(private _msgService: DesignutilityService) { }

  ngOnInit(): void {
  }

 @Input() productSelected: boolean = false;
 @Input() selectProduct: string= '';
 @Output() addedProduct = new EventEmitter<any>();

  onAddProduct(){
    this.addedProduct.emit(this.selectProduct);
  }  

  onSubscribe(){
    this._msgService.messageAlert();
  }


}
