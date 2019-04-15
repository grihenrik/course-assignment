import { Component, OnInit } from '@angular/core';
import { CourseItem, AssignmentItem } from '../templates/templates';
import { DataService } from '../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courseID: number;
  courseItem: CourseItem;
  assignments: AssignmentItem[];

  constructor(protected dataService: DataService, protected route: ActivatedRoute, protected router: Router) {
    this.courseID = Number(route.snapshot.paramMap.get('id'));
   }

  ngOnInit() {
    this.courseItem = this.dataService.getCourse(this.courseID);
    this.assignments = this.dataService.getCourseAssingments(this.courseID);
    console.log('CourseComponent: '+JSON.stringify(this.courseItem)+'ass: '+JSON.stringify(this.assignments));
  }
  

}
