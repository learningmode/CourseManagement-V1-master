import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';


@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
   
  selectedCourse: any;
  constructor( private router: Router,private route: ActivatedRoute,private courseService: CourseService) {

   }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    console.log("this.route.snapshot"+this.route.snapshot.pathFromRoot);
    this.getCourse(id);
  }

  getCourse(id){
      
       this.courseService.getCourses()
       .subscribe(response =>{
         if(response.length){
            response.filter(item =>{
              if(item.courseId == id){
                 this.selectedCourse = item;
                 console.log(`Selected course: ${this.selectedCourse}`);
                 return;
              }
            })
         }
       },error=>{
         console.log('Error occured:',error)
       })
  }


  onBack(){
    this.router.navigate(['courses']);
  }

}
