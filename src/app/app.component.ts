import { Component, OnInit } from '@angular/core';
import { NasabahService } from './service/nasabah-service';
import { Nasabah } from './model/nasabah-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  
  title = 'study-case-app';
  nasabah: Nasabah[] = [];

  constructor(private nasabahService: NasabahService){
  }

  ngOnInit(): void {
   this.getAllNasabah()
  }

  getAllNasabah(){
    this.nasabahService.getAllNasabahData().subscribe((item)=>{
      this.nasabah = item
      console.log('success data', item)
    })
  }

  isVissible:boolean = false

  showPopUp(){
    this.isVissible = !this.isVissible
  }

  registerData(name:String, mataUang:String, kota:String, saldo:String, negara:String){
    this.nasabahService.submitData(name, mataUang, saldo, kota, negara).subscribe((item)=>{
      console.log('success', item)
    })
  }

}

