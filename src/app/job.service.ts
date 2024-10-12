import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  API = "http://localhost:8080";

  public registerJob(jobData: any) {
    return this.http.post(`${this.API}/job`, jobData);
  }

  public getJobs() {
    return this.http.get(`${this.API}/job`);
  }

  public deleteJob(jobId: any) {
    return this.http.delete(`${this.API}/job/${jobId}`);
  }

  public updateJob(job: any) {
    return this.http.put(`${this.API}/job/${job.id}`, job);
  }

  constructor(private http: HttpClient) { }
}
