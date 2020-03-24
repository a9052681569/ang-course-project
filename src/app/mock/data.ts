import { IEvent } from '../interfaces/i-event';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';


export const events$: Observable<IEvent[]> = of([
    {
        text: 'Hi Angular',
        date: new Date(),
        status: true,
        id: Math.random()
    },
    {
        text: 'Hi React',
        date: new Date(),
        status: true,
        id: Math.random()
    },
    {
        text: 'Hi Pidor',
        date: new Date(),
        status: true,
        id: Math.random()
    },
    {
        text: 'Hello Vue',
        date: new Date(),
        status: true,
        id: Math.random()
    },
    {
        text: 'Hello JS',
        date: new Date(),
        status: true,
        id: Math.random()
    }
])
.pipe(delay(3000));
