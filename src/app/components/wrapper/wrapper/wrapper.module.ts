import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from '../wrapper.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DoneListModule } from '../subComponents/done-list/done-list/done-list.module';
import { FilterModule } from '../subComponents/filter/filter/filter.module';
import { StatisticsModule } from '../subComponents/statistics/statistics/statistics.module';
import { TaskImputModule } from '../subComponents/task-input/task-imput/task-imput.module';
import { ToDoListModule } from '../subComponents/to-do-list/to-do-list/to-do-list.module';



@NgModule({
  declarations: [
    WrapperComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DoneListModule,
    FilterModule,
    StatisticsModule,
    TaskImputModule,
    ToDoListModule
  ],
  exports:[WrapperComponent]
})
export class WrapperModule { }
