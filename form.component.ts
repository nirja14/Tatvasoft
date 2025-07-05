import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule} from '@angular/Forms';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  
  student = {
    name: '',
    rollNo: '',
    marks: ''
  };

  studentsList: any[] = [];

  getGrade(marks: number): string {
    if (marks >= 90) return 'A';
    if (marks >= 75) return 'B';
    if (marks >= 60) return 'C';
    if (marks >= 40) return 'D';
    return 'F';
  }

  onSubmit() {
    const marks = Number(this.student.marks);
    const grade = this.getGrade(marks);
    this.studentsList.push({
      name: this.student.name,
      rollNo: this.student.rollNo,
      marks: this.student.marks,
      grade: grade
    });

    // Reset form
    this.student = { name: '', rollNo: '', marks: '' };
  }
}
