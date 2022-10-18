import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mydatepipe'
})
export class MydatepipePipe implements PipeTransform {

  transform(dateTime: string): string {
    const months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date = dateTime.substring(0,10);
    const userEnteredDateArray = date.split('-');
    let yearValue = userEnteredDateArray[0];
    let monthValue = userEnteredDateArray[1];
    let dateValue = userEnteredDateArray[2];
    return months[parseInt(monthValue)] + ' '+ dateValue + ', ' + yearValue;
  }
}
