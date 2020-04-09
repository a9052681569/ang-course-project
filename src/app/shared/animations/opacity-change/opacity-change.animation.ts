import { trigger, transition, style, animate } from '@angular/animations';

export const opacityChangeAnimation = trigger('opacityChangeAnimation', [
    transition(':enter', [
        style({opacity: 0}),
        animate('.2s', style({ opacity: 1 }))
    ])
  ]);
