import { EventsFilterPipe } from './events-filter.pipe';
import { IEvent } from 'src/app/interfaces/i-event';

const events: IEvent[] = [
  {
    text: 'react',
    date: new Date(),
    status: false,
    id: 1
  },
  {
    text: 'angular',
    date: new Date(),
    status: false,
    id: 2
  },
  {
    text: 'vue',
    date: new Date(),
    status: false,
    id: 3
  }
];

describe('EventsFilterPipe', () => {
  let pipe: EventsFilterPipe;
  beforeEach(() => {
    pipe = new EventsFilterPipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('should filter', () => {
    expect(pipe.transform(events, 'ang').length).toEqual(1);
    expect(pipe.transform(events, 'ang')).toEqual([events[1]]);
  });
});
