import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
}) 
export class Tab1Page {
  songs: { title: string; imageUrl: string }[] = [
    {
      title: 'Song 1',
      imageUrl: 'https://ionicframework.com/docs/img/demos/card-media.png',
    },
    {
      title: 'Song 2',
      imageUrl: 'https://ionicframework.com/docs/img/demos/card-media.png',
    },
    {
      title: 'Song 3',
      imageUrl: 'https://ionicframework.com/docs/img/demos/card-media.png',
    },
    {
      title: 'Song 4',
      imageUrl: 'https://ionicframework.com/docs/img/demos/card-media.png',
    },
    { title: 'Song 5', imageUrl: 'https://ionicframework.com/docs/img/demos/card-media.png' },
  ];

  constructor() {}
}
