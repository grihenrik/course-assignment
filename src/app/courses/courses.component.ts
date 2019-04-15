import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { CourseItem } from '../templates/templates';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: CourseItem[];
  constructor(protected dataService: DataService,protected router: Router) {
    
   }

  ngOnInit() {
    this.courses = this.dataService.getCourses();
    console.log("CoursesComponent: "+JSON.stringify(this.courses));
  }
  onSelect(id: number){
    console.log(`Course id: ${id} clicked`);
    this.router.navigate([`/course/${id}`]);
  }
}
