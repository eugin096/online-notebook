import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service.service';
@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.scss']
})

export class NotebookComponent implements OnInit {
  currentPage: number = 1;
  text: string = '';
  newNote: string[] = [];
  activeTab: number = 1;
  notes: string[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadNotes();
  }
  
  loadNotes() {
    this.notes = this.dataService.getText(this.currentPage);
  }
  saveNote() {
    this.dataService.saveText(this.currentPage, this.text);
    this.text = '';
    this.loadNotes();
  }

  goToPage(pageNumber: number) {
    this.currentPage = pageNumber;
    this.notes = this.dataService.getText(this.currentPage);
  }

  setActiveTab(tabNumber: number) {
    this.activeTab = tabNumber;
  }
}
