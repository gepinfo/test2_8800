import { Component, OnInit } from '@angular/core';
import { Screen129985Service } from './screen129985.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-screen129985',
  templateUrl: './screen129985.component.html',
  styleUrls: ['./screen129985.component.scss'],
})

export class Screen129985Component implements OnInit {
    public test2:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
    }

    constructor (
        private screen129985Service: Screen129985Service,
        private router: Router,
    ) { }

    ngOnInit() {
        this.test2.created_by = sessionStorage.getItem('email') || ''; 
        
        
    
    }
    GpRoute(queryId:any) {
        this.router.navigate(['./test1'], { queryParams: { 'id': queryId } })
    }
}