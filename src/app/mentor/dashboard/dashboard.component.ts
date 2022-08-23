import { Component, OnInit, TemplateRef } from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { CommonServiceService } from './../../common-service.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  list: any = [];
  modalRef!: BsModalRef;
  appointmentId:any;
  appointments: any = [];
  mentees: any = [];
  patientsLength:any;
  appointmentsLength:any;
  TotalPatientsLength:any;
  activeTab = 'upcomming';

  constructor(
    private toastr: ToastrService,
    public commonService: CommonServiceService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.getMentees();
    this.getAppointments();
  }

  search(activeTab:any) {
    this.activeTab = activeTab;
  }

  result(activeTab:any) {
    this.activeTab = activeTab;
  }


  openModal(template: TemplateRef<any>, appointment:any) {
    this.appointmentId = appointment;
    this.modalRef = this.modalService.show(template, {
      class: 'modal-sm modal-dialog-centered',
    });
  }

  confirm(value:any) {
    delete this.appointmentId['mentees'];
    let data = {
      ...this.appointmentId,
    };
    data['status'] = 'accept';
    this.commonService.updateAppointment(data, data.id).subscribe((res) => {
      this.toastr.success('', 'Updated successfully!');
      this.modalRef.hide();
      this.appointments = this.appointments.filter((a:any) => a.id != data.id);
      this.getMentees();
      this.getAppointments();
    });
  }

  decline() {
    delete this.appointmentId['mentees'];
    let data = {
      ...this.appointmentId,
    };
    data['status'] = 'decline';
    this.commonService.updateAppointment(data, data.id).subscribe((res) => {
      this.toastr.success('', 'Decline successfully!');
      this.modalRef.hide();
      this.appointments = this.appointments.filter((a:any) => a.id != data.id);
      this.getMentees();
      this.getAppointments();
    });
  }

  getAppointments() {
    this.commonService.getAppointments().subscribe((res) => {
      this.appointments = res;
      let scope = this;
      this.appointments.forEach((index:any) => {
        let filter = scope.mentees.filter((a:any) => a.key === index.patient_key);
        if (filter.length != 0) {
          index['mentees'] = filter[0];
        }
      });
      this.appointmentsLength = this.appointments.length;
    });
  }

  getMentees() {
    this.commonService.getpatients().subscribe((res) => {
      this.mentees = res;
      this.TotalPatientsLength = this.mentees.length;
    });
  }

  cancel() {
    this.modalRef.hide();
  }
}
