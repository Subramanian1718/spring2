import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { JobService } from './job.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'job-module';

  constructor(private jobService: JobService) {
    this.getJobDetails();
  }

  register(registerForm: NgForm) {
    this.jobService.registerJob(registerForm.value).subscribe(
      (resp: any) => {
        console.log(resp);
        registerForm.reset();
        this.getJobDetails();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  getJobDetails() {
    this.jobService.getJobs().subscribe(
      (resp) => {
        console.log(resp);
        this.jobDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  jobDetails = null as any;

  deleteJob(job: any) {
    this.jobService.deleteJob(job.id).subscribe(
      (resp) => {
        console.log(resp);
        this.getJobDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  jobToUpdate = {
    id: null as any,
    title: "",
    description: "",
    location: "",
    company: "",
    salary: ""
  };

  edit(job: any) {
    this.jobToUpdate = { ...job };
  }

  updateJob() {
    this.jobService.updateJob(this.jobToUpdate).subscribe(
      (resp) => {
        console.log(resp);
        this.getJobDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
