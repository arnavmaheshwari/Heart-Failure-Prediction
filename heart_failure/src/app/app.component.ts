import { HeartFailurePred } from './heart-failure-pred';
import { HeartFailurePredService } from './heart-failure-pred.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'heart_failure';

  constructor(private HeartFailurePredService:HeartFailurePredService){}

  HeartFailurePred: HeartFailurePred = new HeartFailurePred("","","","","","","","","","","");
  list:any = []

  
  predict(){
    if(this.HeartFailurePred.Cholestrol>120){
      this.HeartFailurePred.FastingBS = 1;
    }
    else{
      this.HeartFailurePred.FastingBS = 0;
    }
    
    //Getting the values from the object of class HeartFailurePred and storing them in a list 
    this.list = (Object.values(this.HeartFailurePred));

    // Converting each element of the list to a number
    this.list = this.list.map(Number);

    // Storing the list as a key:value pair, because data is sent to the backend in the form of JSON(key:value pair)
    var obj = {
      "data":this.list
    };

    // Converting object to JSON
    var json = JSON.stringify(obj);

    this.HeartFailurePredService.predict(json).subscribe(data=>{
      // Parsing the stringified json object
      const HeartDisease = JSON.parse(JSON.stringify(data));
      if(HeartDisease == true){
        alert("Heart Failure Imminent");
      }
      else{
        alert("Healthy Heart");
      }
    })
  }

}
