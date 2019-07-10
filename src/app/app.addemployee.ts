import { Component, Input} from "@angular/core";


@Component({ 
    selector:'add-comp',
    templateUrl:'addemployee.html'
})

export class AddEmployeeComponent {
    empId:number;
    empName:string;
    empSalary:number;
    empDepartment:string;

    empall:any[]=[];
 
 OnDelete(data:any){
     this.empall.splice(this.empall[data],1);
 }
 AddEmployee(){
     this.empall.push({empId:this.empId, empName:this.empName, empSalary:this.empSalary ,empDepartment:this.empDepartment});
 }
 

 
}