import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { VideoPlayerComponent } from './video-player.component';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [VideoPlayerComponent],
  template: `
  <h2>Basic Example</h2>
    <cld-video-player 
      id="video1"
      publicId="glide-over-coastal-beach"
    ></cld-video-player>
    <h2>Config Example</h2>
    <cld-video-player 
      id="video2"
      publicId="glide-over-coastal-beach"
      [playerConfig]='{"muted": "true"}'
      [sourceConfig]='{"info": {"title": "Glide Over Coastal Beach"}, "transformation": {"effect": "blur"}}'
    ></cld-video-player>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
