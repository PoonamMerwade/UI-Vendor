import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendor } from '../model/vendor';


@Injectable({
  providedIn: 'root'
})
export class VendorServiceService {
  private baseUrl="http://localhost:9191/vendor-service/vendor";
  public username: String;
 public password: String;

  
  constructor(private http:HttpClient) {
    
   }
  
    getVendor(vendorId: number): Observable<Vendor> {
      return this.http.get<Vendor>(`${this.baseUrl}/get/${vendorId}`);
    }

    // getProducts(vendorId: number): Observable<Vendor> {
    //   return this.http.get<Vendor>(`${this.baseUrl}/${vendorId}`);
    // }
  
    createVendor(vendor:Vendor): Observable<Vendor> {
      return this.http.post<Vendor>(this.baseUrl+"/add",vendor);
    }
  
    // updateVendor(vendorId: number, value: any): Observable<Vendor> {
    //     return this.http.put<Vendor>(`${this.baseUrl}`, value);
    //   }
  
    updateVendor(vendor: Vendor): Observable<Vendor>{
      return this.http.put<Vendor>(this.baseUrl, vendor);
    }
    
      deleteVendor(vendorId:number): Observable<any> {
      return this.http.delete(`${this.baseUrl}/delete/${vendorId}`, { responseType: 'text' });
    }
  
    // getVendorsList(): Observable<any> {
    //   return this.http.get(this.baseUrl+"/getAll");

    getAll(): Observable<Vendor[]> {
      return this.http.get<Vendor[]>(this.baseUrl + '/getAll');
    }
}