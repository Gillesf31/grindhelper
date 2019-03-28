import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChronometerService {
  private play: boolean = false;
  private pause: boolean = false;
  private stop: boolean = false;

  public playPauseStop$ = new EventEmitter();

  public playTimer() {
    this.play = true;
    this.pause = false;
    this.stop = false;

    this.playPauseStop$.emit({
      play: this.play
    })
  }

  public pauseTimer() {
    this.play = false;
    this.pause = true;
    this.stop = false;

    this.playPauseStop$.emit({
        pause: this.pause
    });
  }

  public stopTimer() {
    this.play = false;
    this.pause = false;
    this.stop = true;

    this.playPauseStop$.emit({
        stop: this.stop
    });
  }
}
