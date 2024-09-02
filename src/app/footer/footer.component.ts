import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  user:any;
  email:any
  ngOnInit(): void {
    this.user=sessionStorage.getItem("user")
   
    
  }

  onClick(){
    this.user=sessionStorage.getItem("user")
    if (this.user) {
      this.user = JSON.parse(this.user);
      this.email=this.user?.email
      console.log(this.user?.email);
    } else {
      this.user = null; // Handle case where no user is found
    }
  }

  

}
