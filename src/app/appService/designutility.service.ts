import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignutilityService {

  constructor() { }

  messageAlert(){
    alert('Thanks for Subscribe. We will get in touch with you shortaly!!!')
  }
}
