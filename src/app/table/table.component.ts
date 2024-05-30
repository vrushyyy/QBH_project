import { Component, Input, Output, EventEmitter } from '@angular/core';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() users: any[] = [];
  pdfSrc: string = '';

  @Output() userEdited = new EventEmitter<any>();
  @Output() userDeleted = new EventEmitter<any>();

  editUser(user: any) {
    this.userEdited.emit(user);
  }

  deleteUser(user: any) {
    this.userDeleted.emit(user);
  }

  generatePDF() {
    const doc = new jsPDF();
    doc.text('User Data', 10, 10);

    let yPos = 20;
    this.users.forEach(user => {
      doc.text(`Name: ${user.name}`, 10, yPos);
      doc.text(`Email: ${user.email}`, 10, yPos + 10);
      doc.text(`Phone: ${user.phone}`, 10, yPos + 20);
      doc.text(`Address: ${user.address}`, 10, yPos + 30);
      yPos += 40;
    });

    const pdfData = doc.output('blob');
    const pdfUrl = URL.createObjectURL(pdfData);
    this.pdfSrc = pdfUrl;
  }
}
