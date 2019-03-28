import { ChronometerService } from './../chronometer.service';
import { Component } from '@angular/core';
import { faPlus, faMinus, faUndoAlt  } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-count-rep',
  templateUrl: './count-rep.component.html',
  styleUrls: ['./count-rep.component.scss']
})
export class CountRepComponent {
  faPlus = faPlus;
  faMinus = faMinus;
  faUndoAlt = faUndoAlt;

  repNumber = 2;

  constructor(private chronometerService: ChronometerService) {}

  onPlus() {
    this.repNumber = this.repNumber + 1;
    this.chronometerService.stopTimer();
    this.chronometerService.playTimer();
  }

  onMinus() {
    if (this.repNumber > 0) {
      this.repNumber = this.repNumber - 1;
    }
  }

  onReset() {
    if (this.repNumber !== 0) {
      this.repNumber = 0;
    }
  }
}
