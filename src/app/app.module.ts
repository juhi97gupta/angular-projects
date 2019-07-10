import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {ShowProductComponent} from './app.showproduct';
import {addProductComponent} from './app.addproduct'

@NgModule({
    imports: [
        BrowserModule
        
    ],
    declarations: [
        AppComponent,  ShowProductComponent, addProductComponent
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }