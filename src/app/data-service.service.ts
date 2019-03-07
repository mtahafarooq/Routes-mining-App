import { Injectable } from '@angular/core';
import { Waypoints } from './data.model';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private data: Waypoints = {
    source: '',
    dest1: '',
    dest2: '',
    dest3: ''
  };
  constructor() { }

  setdest1(address: string) {
    this.data.dest1 = address;
  }

  setdest2(address: string) {
    this.data.dest2 = address;
  }

  setdest3(address: string) {
    this.data.dest3 = address;
  }

  setSource(address: string) {
    this.data.source = address;
  }

  getData(): Waypoints {
    return this.data;
  }
}
