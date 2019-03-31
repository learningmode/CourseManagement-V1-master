import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn : 'root'
})

export class CourseService{
    url : string = "https://raw.githubusercontent.com/Swadreams/Angular-Batch-Project/master/src/api/courses/courses.json";
    
    constructor(private http: HttpClient, private db: AngularFireDatabase){

    }

    getCourses(): Observable<any>{
        return this.http.get(this.url);
    }

    getCoursesFromFireStore(){
        return this.db.list('/courses').valueChanges();
    }
}
