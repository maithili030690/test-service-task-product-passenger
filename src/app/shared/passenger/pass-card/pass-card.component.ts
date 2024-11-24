import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ipassenger } from '../../models/passenger';
import { PassengerService } from '../../services/passenger.service';

@Component({
  selector: 'app-pass-card',
  templateUrl: './pass-card.component.html',
  styleUrls: ['./pass-card.component.scss']
})
export class PassCardComponent implements OnInit {
@Input()passObj!:Ipassenger
@Output()emitPassInfo:EventEmitter<Ipassenger> = new EventEmitter<Ipassenger>()
isInEditMode:boolean=false
  constructor(
    private _passService :PassengerService
  ) { }

  ngOnInit(): void {
  }
  updateUserName(UpdateName:string){
    this.isInEditMode=!this.isInEditMode
    console.log({...this.passObj,fullname:UpdateName})
    this._passService.updatePassInfo({...this.passObj,fullname:UpdateName})
  }

  onRemovePass(id:number){
    console.log(id)
    this._passService.removePass(id)
    this.emitPassInfo.emit(this.passObj)
  }
}
