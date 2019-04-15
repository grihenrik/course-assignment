import { Injectable } from '@angular/core';
import {BaseCommService} from './base-comm.service';
import { HttpClient } from '@angular/common/http';
import { CourseItem, AssignmentItem } from '../templates/templates';


@Injectable({
  providedIn: 'root',
})
export class DataService extends BaseCommService {

  constructor(protected httpClient: HttpClient) { 
    super(httpClient);
  }
  getCourses(): CourseItem[] {
    return courseItems;
  }
  getCourse(index: number): CourseItem {
    return courseItems.filter((item)=>item.course_id===index).pop();
  }
  getCourseAssingments(course_id: number): AssignmentItem[] {
    return assignmentItem.filter((item)=>item.course_id_FK===course_id);
  }
}

const courseItems: CourseItem[]=[
  {
    course_id: 0,
    name: 'Browser',
    start_date: '2019-01-01',
    end_date: '2019-03-18'
  },
  {
    course_id: 1,
    name: 'Server Side',
    start_date: '2019-01-01',
    end_date: '2019-03-18'
  },
  {
    course_id: 2,
    name: 'Web Frameworks',
    start_date: '2019-03-20',
    end_date: '2019-04-30'
  }
  
]
const assignmentItem: AssignmentItem[] = [
  {
    assignment_id: 0,
    name: 'Week 19 essay',
    desc: 'Write an essay',
    state: 'armed',
    created_date: '2019-04-01',
    due_date: '2019-04-15',
    course_id_FK: 0
  },
  {
    assignment_id: 1,
    name: 'Week 18 game',
    desc: 'ES6 Game dev',
    state: 'armed',
    created_date: '2019-03-25',
    due_date: '2019-04-01',
    course_id_FK: 0
  },
  {
    assignment_id: 2,
    name: 'Week 17 coding',
    desc: 'ES6 class props',
    state: 'done',
    created_date: '2019-03-01',
    due_date: '2019-03-15',
    course_id_FK: 0
  }
]