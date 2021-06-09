import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private angularFireAuth: AngularFireAuth,
    private httpClient: HttpClient
    ) { }

  createUser(email: string, password: string){
    return this.angularFireAuth.createUserWithEmailAndPassword(email,password);
  }

  login(email:string, password: string){
    return this.angularFireAuth.signInWithEmailAndPassword(email, password);
  }

  loginRestApi(email: string, password: string){
    return this.httpClient.post('',{email,password})
  }

}
