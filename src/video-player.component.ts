import {
  Component,
  Input,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import cloudinary from 'cloudinary-video-player';
import 'cloudinary-video-player/cld-video-player.min.css';

@Component({
  selector: 'cld-video-player',
  standalone: true,
  template: `
    <video
      #playerRef
      [id]="id"
      class="cld-video-player cld-fluid"
    ></video>
  `,
})
export class VideoPlayerComponent implements AfterViewInit {
  @Input() id: string = '';
  @Input() publicId: string = '';
  @Input() playerConfig: any = {};
  @Input() sourceConfig: any = {};

  @ViewChild('playerRef') playerRef!: ElementRef;

  private player: any;

  ngAfterViewInit() {
    this.initializePlayer();
  }

  private initializePlayer() {
    this.player = cloudinary.videoPlayer(this.playerRef.nativeElement, {
      cloud_name: 'demo',
      secure: true,
      controls: true,
      ...this.playerConfig,
    });
    this.player.source({ publicId: this.publicId, ...this.sourceConfig });
  }
}
