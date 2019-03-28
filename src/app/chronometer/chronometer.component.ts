import { ChronometerService } from './../chronometer.service';
import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { faPlay, faPause, faUndoAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-chronometer',
  templateUrl: './chronometer.component.html',
  styleUrls: ['./chronometer.component.scss']
})
export class ChronometerComponent implements OnInit, OnDestroy  {

  faPlay = faPlay;
  faPause = faPause;
  faUndoAlt = faUndoAlt;

  private playPauseStopUnsubscribe: any;
  private play: boolean;

  constructor(private timerService: ChronometerService) {
  }

  ngOnInit() {
    this.playPauseStopUnsubscribe = this.timerService.playPauseStop$.subscribe((res: any) => this.setPlay(res));
  }

  ngOnDestroy() {
    this.playPauseStopUnsubscribe.unsubscribe();
  }

  private setPlay(res: any) {
    (res.play) ? this.play = true : this.play = false;
  }

  playTimer() {
    this.timerService.playTimer();
  }

  pauseTimer() {
    this.timerService.pauseTimer();
  }

  stopTimer() {
    this.timerService.stopTimer();
  }
}
