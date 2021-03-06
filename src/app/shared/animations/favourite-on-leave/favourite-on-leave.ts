import { trigger, transition, style, animate } from '@angular/animations';

export const favouriteOnLeaveAnimation = trigger('favouriteOnLeaveAnimation', [
    transition(':enter', [
        style({opacity: 0}),
        animate('.2s', style({ opacity: 1 }))
    ]),
    transition(':leave', [
        animate('.2s', style({ opacity: 0 }))
    ])
]);
