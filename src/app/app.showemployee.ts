import { Component,Input , OnChanges,OnInit} from "@angular/core";
import { EmployeeService } from "./app.employeeservice";



@Component({
    selector:'show-comp',
    templateUrl:'showemployee.html'
})

export class ShowEmployeeComponent implements OnInit,OnChanges{
    constructor(private service:EmployeeService){}

 
 @Input()
 empall:any[]=[];
 empId1:number;
 empName1:string;
 empSalary1:number;
 empDepartment1:number;

 empjson:any[]=[];
 ngOnInit(){
     this.service.getAllEmployee().subscribe((data:any)=>this.empjson=data);
 }
 ngOnChanges(){
     this.empjson.push({empId:this.empId1,empName:this.empName1,empSalary:this.empSalary1,empDepartment:this.empDepartment1});

 }
}