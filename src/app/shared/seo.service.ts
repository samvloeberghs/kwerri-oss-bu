import { Injectable, Inject } from '@angular/core';
import { DOCUMENT, Title } from '@angular/platform-browser';

@Injectable()
export class SeoService {
  //--------------------------------------------
  //! Set the variables to their default values
  //--------------------------------------------
  constructor(private document: DOCUMENT) {
  }

  //----------------------------
  //! Set the title of the page
  //----------------------------

  setTitle_(title: string) {
    this.document.title = title
  }


  /*
  getTitle(): string {
    return this.titleService.getTitle();
  }

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
  */

}