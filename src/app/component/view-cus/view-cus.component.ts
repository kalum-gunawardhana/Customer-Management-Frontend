import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface ViewCus {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const VIEW_CUS: ViewCus[] = [
  { id: 1, name: 'test', email: 'test@customer.com', phone: '1234567890' },
  { id: 2, name: 'admin', email: 'admin@customer.com', phone: '0123456789' }
];

@Component({
  selector: 'capp-view-us',
  imports: [MatTableModule],
  templateUrl: './view-cus.component.html',
  styleUrl: './view-cus.component.css'
})
export class ViewCusComponent {
  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'actions'];
  dataSource = [...VIEW_CUS];

  deleteCustomer(id: number): void {
    const confirmDelete = confirm('Are you sure you want to delete this customer?');
    if (confirmDelete) {
      this.dataSource = this.dataSource.filter(customer => customer.id !== id);
    }
  }
}
