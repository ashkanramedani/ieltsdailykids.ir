import {
  ChangeDetectorRef,
  Component,
  HostBinding,
  Input,
  OnDestroy,
} from '@angular/core';
import { PlayerService, Track } from '../../services/player.service';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'ngx-player',
  styleUrls: ['./player.component.scss'],
  templateUrl: './player.component.html',
  providers: [PlayerService],
})
export class PlayerComponent implements OnDestroy {
  @Input()
  @HostBinding('class.collapsed')
  collapsed: boolean;
  private updateSubscription: Subscription;

  track: Track;
  player: HTMLAudioElement;
  shuffle: boolean;

  constructor(
    private playerService: PlayerService,
    private _detect: ChangeDetectorRef
  ) {
    this.track = this.playerService.random();
    this.createPlayer();
    this.updateSubscription = interval(1000).subscribe(() =>
      this.updateProgress()
    );
  }

  ngOnDestroy() {
    this.player.pause();
    this.player.src = '';
    this.player.load();
    this.updateSubscription.unsubscribe();
  }

  prev() {
    if (!this.player.loop) {
      if (this.shuffle) {
        this.track = this.playerService.random();
      } else {
        this.track = this.playerService.prev();
      }
    }

    this.reload();
  }

  next() {
    if (!this.player.loop) {
      if (this.shuffle) {
        this.track = this.playerService.random();
      } else {
        this.track = this.playerService.next();
      }
    }

    this.reload();
  }
  rewind(seconds: number) {
    this.player.currentTime = Math.max(0, this.player.currentTime - seconds);
  }
  forward(seconds: number) {
    this.player.currentTime = Math.max(0, this.player.currentTime + seconds);
  }
  playPause() {
    if (this.player.paused) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }

  toggleShuffle() {
    this.shuffle = !this.shuffle;
  }

  toggleLoop() {
    this.player.loop = !this.player.loop;
  }

  setVolume(volume: number) {
    this.player.volume = volume / 100;
  }

  getVolume(): number {
    return this.player.volume * 100;
  }

  setProgress(duration: number) {
    this.player.currentTime = (this.player.duration * duration) / 100;
  }

  getProgress(): number {
    return (this.player.currentTime / this.player.duration) * 100 || 0;
  }
  private updateProgress() {
    this._detect.detectChanges();
  }
  private createPlayer() {
    this.player = new Audio();
    this.player.onended = () => this.next();
    this.player.ontimeupdate = () => this.updateProgress();
    this.setTrack();
  }

  private reload() {
    this.setTrack();
    this.player.play();
  }

  private setTrack() {
    this.player.src = this.track.url;
    this.player.load();
  }
}
