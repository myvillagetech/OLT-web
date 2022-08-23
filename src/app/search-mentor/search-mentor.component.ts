import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-search-mentor',
  templateUrl: './search-mentor.component.html',
  styleUrls: ['./search-mentor.component.css'],
})
export class SearchMentorComponent implements OnInit {
  mentors: any = [];
  specialityList: any = [];
  type:any;
  specialist:any = '';
  speciality:any;
  selDate:any;
  constructor(
    public commonService: CommonServiceService,
    public router: Router
  ) {}
  images = [
    {
      path: 'assets/img/features/feature-01.jpg',
    },
    {
      path: 'assets/img/features/feature-02.jpg',
    },
    {
      path: 'assets/img/features/feature-03.jpg',
    },
    {
      path: 'assets/img/features/feature-04.jpg',
    },
  ];
  ngOnInit(): void {
    this.getMentors();
    this.getspeciality();
  }

  getMentors() {
    this.commonService.getMentors().subscribe((res) => {
      this.mentors = res;
    });
  }

  getspeciality() {
    this.commonService.getSpeciality().subscribe((res) => {
      this.specialityList = res;
    });
  }

  checkType(event:any) {
    if (event.target.checked) {
      this.type = event.target.value;
    } else {
      this.type = '';
    }
  }

  search() {
    if (this.type && this.speciality) {
      this.mentors = this.mentors.filter(
        (a:any) => a.type === this.type && a.speciality === this.speciality
      );
    } else {
      this.getMentors();
    }
  }

  checkSpeciality(event:any) {
    if (event.target.checked) {
      this.speciality = event.target.value;
    } else {
      this.speciality = '';
    }

    var filter = this.specialityList.filter(
      (a:any) => a.speciality === event.target.value
    );
    if (filter.length != 0) {
      filter[0]['checked'] = true;
    }
    this.specialityList.forEach((index:any) => {
      if (index.speciality != event.target.value) {
        index['checked'] = false;
      }
    });
  }

  bookAppointment(id:any) {
    this.router.navigateByUrl('/mentee/booking?id=' + id);
  }
}
