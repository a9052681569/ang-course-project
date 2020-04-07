import { trigger, transition, style, animate } from '@angular/animations';

export const favouriteOnLeaveAnimation = trigger('favouriteOnLeaveAnimation', [
    transition(':leave', [
        animate('.2s', style({ opacity: 0 }))
    ])
]);
