import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Token} from './token';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'projectVKR';
  public  token: Token;
  public documentId: string;

  constructor(private http: HttpClient){}
  ngOnInit(){
          
    this.http.get('http://localhost:3000/oauth').subscribe((data:any) => ACCESS_TOKEN=new Token(data.access_token, data.expires_in));
  }

}

export let ACCESS_TOKEN:Token;
