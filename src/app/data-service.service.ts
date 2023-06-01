import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private notebooks: { [pageNumber: number]: string[] } = {}

  constructor() {
    // Load saved data from local storage
    const savedData = localStorage.getItem('notebooks');
    if (savedData) {
      this.notebooks = JSON.parse(savedData);
    }
  }

  saveText(pageNumber: number, text: string) {
    if (!Array.isArray(this.notebooks[pageNumber])) {
      this.notebooks[pageNumber] = [];
    }
    this.notebooks[pageNumber].push(text);
    localStorage.setItem('notebooks', JSON.stringify(this.notebooks));
  }

  getText(pageNumber: number): string [] {
    return this.notebooks[pageNumber] || '';
  }
}
