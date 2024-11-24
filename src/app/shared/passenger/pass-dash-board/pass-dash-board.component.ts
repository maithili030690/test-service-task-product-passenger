import { Component, OnInit } from '@angular/core';
import { Ipassenger } from '../../models/passenger';
import { PassengerService } from '../../services/passenger.service';

@Component({
  selector: 'app-pass-dash-board',
  templateUrl: './pass-dash-board.component.html',
  styleUrls: ['./pass-dash-board.component.scss']
})
export class PassDashBoardComponent implements OnInit {
passArr!:Array<Ipassenger>
checkInCount!:number
  constructor(
    private _passService:PassengerService
  ) { }

  ngOnInit(): void {
    this.passArr =this._passService.fetchPassAllData()
  }

 getCheckInCount(){
  this.checkInCount = this.passArr.filter(pass=>{
    return pass.checkedIn
  }).length
 }
 onRemoveUpdate(eve:any){
  this.getCheckInCount()
 }
}
