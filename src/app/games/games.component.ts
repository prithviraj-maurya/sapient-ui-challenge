import { ListService } from './../list.service';
import { Component, OnInit } from '@angular/core';
import { gameDetail } from '../model/AppModel';
import { GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  gameDetailsList: Array<gameDetail>;
  rowData: any;
  quickSearchValue: string = '';
  columnDefs = [
    {headerName: 'Title', field: 'title',sortable: true, filter: true, resizable: true},
    {headerName: 'Link', field: 'url',sortable: true, filter: true, resizable: true},
    {headerName: 'Platform', field: 'platform',sortable: true, filter: true, resizable: true},
    {headerName: 'Score', field: 'score',sortable: true, filter: true, resizable: true},
    {headerName: 'Genre', field: 'genre',sortable: true, filter: true, resizable: true},
    {headerName: 'Editors Choice', field: 'editors_choice',sortable: true, filter: true, resizable: true},
    {headerName: 'Year of Release', field: 'release_year',sortable: true, filter: true, resizable: true}
  ];
   gridOptions: GridOptions = {
    columnDefs: this.columnDefs,
    rowData: null,
    enableFilter: true
  };
  constructor(public listService: ListService) { }

  ngOnInit(): void {
    this.listService.getGameDetails().subscribe((data: Array<gameDetail>) => {
      this.gameDetailsList = data;
      this.rowData = data;
    },err => {
      console.log(err);
      this.gameDetailsList = [];
    }); 
  }
}
