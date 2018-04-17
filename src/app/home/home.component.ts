import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatTableDataSource, MatSort} from '@angular/material';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataSource = new MatTableDataSource();
  displayedColumns = ['id', 'name', 'price', 'action'];
 
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http, public dialog: MatDialog) { }

  // Fetch product data
  getProducts = function(){
  	this.http.get('http://localhost:5555/products').subscribe(
  		(res: Response) => {
        this.dataSource.data = res.json();
  		}
  	);
  }

  // Delete product data
  deleteProduct = function(pid){ 
  /* if(confirm("Are you sure to delete?")){
      this.http.delete('http://localhost:5555/products/'+ pid, {headers: this.headers}).toPromise().then(
          () => {
            this.getProducts();
          }
      );
    }*/
    let dialogRef = this.dialog.open(DeleteDialog, {
      width: '400px',
      data: { id: pid }
    });

    dialogRef.afterClosed().subscribe(result => {       
      
      if(result){
        this.http.delete('http://localhost:5555/products/'+ result, {headers: this.headers}).toPromise().then(
          () => {
            this.getProducts();
          }
        );
      }        
      //  console.log('The dialog was closed');
      });
  }

 
  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  @ViewChild(MatSort) sort: MatSort;
  
  ngAfterViewInit() {    
      this.dataSource.sort = this.sort;
  }

  // For filter table data
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
  
  // init functions
  ngOnInit() { 
  	this.getProducts();     
  }

}

/****************** Delete Popup Component ******************/
@Component({
  selector: 'delete-dialog',
  templateUrl: 'delete-dialog.html',
})
export class DeleteDialog {

  constructor(
    public dialogRef: MatDialogRef<DeleteDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}