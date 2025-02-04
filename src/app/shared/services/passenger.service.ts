import { Injectable } from '@angular/core';
import { Ipassenger } from '../models/passenger';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {
  passengersArr: Array<Ipassenger> = [
    {
      id: 1,
      fullname: 'Stephen',
      checkedIn: true,
      checkInDate: 1490742000000,
      children: null,
    },
    {
      id: 2,
      fullname: 'Rose',
      checkedIn: false,
      checkInDate: null,
      children: [
        { name: 'Ted', age: 12 },
        { name: 'Chloe', age: 7 },
      ],
    },
    {
      id: 3,
      fullname: 'James',
      checkedIn: true,
      checkInDate: 1491606000000,
      children: null,
    },
    {
      id: 4,
      fullname: 'Louise',
      checkedIn: true,
      checkInDate: 1488412800000,
      children: [{ name: 'Jessica', age: 1 }],
    },
    {
      id: 5,
      fullname: 'Tina',
      checkedIn: false,
      checkInDate: null,
      children: null,
    },
  ]

  fetchPassAllData():Array<Ipassenger>{
    //Api call to fetch pass
    return this.passengersArr
  }
  updatePassInfo(updatedPass:Ipassenger){
    let getIndex =this.passengersArr.findIndex(pass=>{
      return pass.id === updatedPass.id
    })
    this.passengersArr[getIndex]=updatedPass
  }
  removePass(id:number){
    //Api call to remove
    let getIndex =this.passengersArr.findIndex(pass=>pass.id ===id)
    console.log(getIndex)
    this.passengersArr.splice(getIndex,1)
  }
}
