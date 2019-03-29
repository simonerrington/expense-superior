import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


	loginFunction() {
		let dataid:any = this["username"];
		let datapass:any = this["password"];

		if (dataid == "Employee"){
			if (datapass != "password"){
			}else{
				document.location.href = "employeepage";
			}
	    } else if (dataid == "Manager"){
			if (datapass != "password"){
			}else{
	      		document.location.href = "managerpage";
			}
	    } else if (dataid == "Admin"){
	      if (datapass != "password"){
			}else{
	      		document.location.href = "adminpage";
			}
	    } else if (dataid == "hrmember"){
	      if (datapass != "password"){
			}else{
	      		document.location.href = "hrpage";
			}
		} else{
	    	alert("Invalid Login id")
	    }

	  }
}
