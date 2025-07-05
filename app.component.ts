import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoComponent } from "./demo/demo.component";
import { DirectivesComponent } from './directives/directives.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from "./form/form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DemoComponent, DirectivesComponent, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Welcome to Angular Application';
  collegeName='LDCE';
 isDisabled= false;
 onClick(){
  console.log("Button Clicked!");
 }

}
