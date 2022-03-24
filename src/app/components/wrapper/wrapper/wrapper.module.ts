import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoListComponent } from '../subComponents/to-do-list/to-do-list.component';
import { DoneListComponent } from '../subComponents/done-list/done-list.component';
import { TaskInputComponent } from '../subComponents/task-input/task-input.component';
import { FilterComponent } from '../subComponents/filter/filter.component';
import { StatisticsComponent } from '../subComponents/statistics/statistics.component';
import { TaskListElementComponent } from '../subComponents/task-list-element/task-list-element.component';
import { WrapperComponent } from '../wrapper.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ToDoListComponent,
    DoneListComponent,
    TaskInputComponent,
    FilterComponent,
    StatisticsComponent,
    TaskListElementComponent,
    WrapperComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[WrapperComponent]
})
export class WrapperModule { }
