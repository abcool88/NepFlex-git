import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchMediaService } from 'app/core/match-media.service';
/*
  Based on the Angular Style Guide, the following should be considered for the core module:
    - Include singleton services that can be used across the application
    - Import the core module ONLY ONCE in app.module.ts - if core is imported in a feature
      module, multiple instances of the service can result
    - Include components, directives and pipes that are only used by the app component

    Reference: https://angular.io/styleguide#!#04-11
*/
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [MatchMediaService ]
})

export class CoreModule { }
