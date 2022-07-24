import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Book} from "./product-item/model/Book"


@Injectable()
export class BooksService{

private url = "https://localhost:4200/api/bookstore";
httpOptions= {
    Headers: new HttpHeaders({'content-type':'applicaion/json'})
}
constructor(private http:HttpClient){}

getBook(){
    return this.http.get(this.url)
}

}