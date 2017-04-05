import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component'
import { MIDIService } from './midi.service';
import { AnimationService } from './animation.service'
import { ColorPageComponent } from './color-page/color-page.component';
import { ShowComponent } from './show/show.component';
import { MapToIterablePipe } from './map-to-iterable.pipe';
import { StringifyPipe } from './stringify.pipe';
import { DecimalToPercentPipe } from './decimal-to-percent.pipe'

const appRoutes: Routes = [
  { path: '', component: ColorPageComponent},
  { path: 'color', component: ColorPageComponent },
  // pages
]

@NgModule({
  declarations: [
    AppComponent,
    ColorPageComponent,
    ShowComponent,
    MapToIterablePipe,
    StringifyPipe,
    DecimalToPercentPipe,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),

    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
     MIDIService,
     AnimationService,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
