import { Component, OnInit } from '@angular/core';
import { Test1Service } from './test1.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss'],
})

export class Test1Component implements OnInit {
    public test2:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
    }
    public queryId:any = ''
    public name:any = '';

    constructor (
        private test1Service: Test1Service,
        private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.test2.created_by = sessionStorage.getItem('email') || ''; 
        
            this.activatedRoute.queryParams.subscribe(params => { 
 	 	this.queryId = params['id'];
                    this.test2.name = params['name'];
            });
        
    
    }
    GpCreate() {
        this.test1Service.GpCreate(this.test2).subscribe((data:any) => {
            this.test2.name = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
}