import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Response, Headers} from '@angular/http';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productObj:object = {};
  title:String = 'Add New';
  /*successMessage:string ="New product has been added !";
  isAdded:boolean = false;*/

  data:object = {};
  id:number;
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http, private route: ActivatedRoute, public snackBar: MatSnackBar) { }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

  // add
  addProduct = function(){
    this.http.post("http://localhost:5555/products", this.productObj).subscribe(
      (res: Response) => {
        //this.isAdded = true;
        this.openSnackBar("New product has been added !" , "Done");
      }
    );
  }
  // edit
  updateProduct = function(){
    this.http.put("http://localhost:5555/products/"+  this.id, this.productObj, {headers : this.headers}).toPromise().then(
      () => {
        //this.isAdded = true;
        //this.successMessage ="Product has been updated !";
        this.openSnackBar("Product has been updated !" , "Done");
      }
    );
  }
  // get
  fetchProduct = function(){
    this.route.params.subscribe( params => {this.id = +params['id'] } );

    if(this.id){
      this.http.get('http://localhost:5555/products/'+ this.id , {headers : this.headers}).subscribe(
        (res: Response) => {
          this.data = res.json();
        }
      );
      this.title = 'Update';
    }
    
  }

  onSubmit = function(product){
  	this.productObj = {
  		name: product.pname,
  		price: product.price
  	}

    if(product.id){ 
      this.updateProduct();
    }else{
     this.addProduct();
    }
 
  }

  ngOnInit() {
      this.fetchProduct();
  }

}
