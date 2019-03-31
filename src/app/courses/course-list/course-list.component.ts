import { Component, OnInit } from '@angular/core';
import { ICourse } from '../course';
import { CourseService } from '../course.service';
import { AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  pageTitle: string = "Course List";
  imageWidth: number = 50;
  imageVisible : boolean;
  filteredCourses: ICourse[];
  errorMessage: string;
  _listFilter: string;

  get listFilter() {
    return this._listFilter;
  }
  
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredCourses = this._listFilter ? this.performFilter() : this.courses;
  }

  courses;  

  constructor(private courseService: CourseService) { 


  }

  ngOnInit() {

    this.courseService.getCoursesFromFireStore().subscribe(
      (response) =>{
        this.courses = response;
        this.filteredCourses = this.courses; 
      },
       error => {
          console.log("Error is", error);
          this.errorMessage ="Unknown error occured";
       }
    )

  }

  showImage() {
    this.imageVisible = !this.imageVisible;
  }

  performFilter() : ICourse[] {
    let filterBy = this.listFilter.toLocaleLowerCase();
    return this.courses.filter((item) => (item.courseName.toLocaleLowerCase() == filterBy));    
  }

  onRatingClicked(event) {
    this.pageTitle = `Course List ${event.rating} rating was clicked`;
    console.log(`Course List ${event.rating} rating was clicked`);
  }

}
