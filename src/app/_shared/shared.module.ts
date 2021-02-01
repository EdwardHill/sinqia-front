import { SocketService } from './services/socket.service';
import { ShowMessagesService } from './services/show-messages.service';
// import { InMemoryApisService } from './mocks/services/in-memory-apis.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';
import { PaginatorComponent } from './components/paginator/paginator.component';
// import { HttpClientModule } from '@angular/common/http';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SatDatepickerModule, SatNativeDateModule } from 'saturn-datepicker';


@NgModule({
  declarations: [PaginatorComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    NgxChartsModule,
    SatDatepickerModule,
    SatNativeDateModule
  ],
  exports: [
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    PaginatorComponent,
    NgxChartsModule,
    SatDatepickerModule,
    SatNativeDateModule
  ],
  providers:
    [
      // InMemoryApisService,
      ShowMessagesService,
      
      // SocketService,

    ]
})
export class SharedModule { }
