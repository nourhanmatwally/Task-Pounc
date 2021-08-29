import { Component } from '@angular/core';
import { flush } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'blog';
  ///////////////////////////

  pageTitle() {
    return 'master blog from method'
  }
  ///////////////////////////

  isHome = true;
  // isHome = false;

  ///////////////////////////
  DefultEmail = 'Nourhan@gmail.com'
  ///////////////////////////

  isHeader = true;
  // isHeader = false;

  //////////////////////////////
  // headerClasses = this.isHeader ? 'header bold italic' : 'supHeader bold italic'
  //////////////////////////////

  headerClasses() {
    return {
      header: this.isHeader,
      bold: this.isHeader,
      uppercase: this.isHeader,
      italic: this.isHeader,
    }
  }
  //////////////////////////////

  singleStyleBinding = this.isHeader ? '3rem' : '2rem'

  //////////////////////////////

  mulitapleStyleBiding = {
    fontSize: this.isHeader ? '3rem' : '2rem',
    fontWeght: this.isHeader ? 'bold' : '200'
  }

  //////////////////////////////

  toggleHeaderState() {
    this.isHeader = !this.isHeader;
  }


}
