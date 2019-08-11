import { Injectable } from '@angular/core';
import { ShareDataService } from '../../share-data.service';

@Injectable({
  providedIn: 'root'
})
export class DataServiceImplementService {

  constructor(
    private shareDataService:ShareDataService,
    ) { 
  }




}
