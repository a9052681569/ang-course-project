import { Component, Input } from '@angular/core';
import { IRepository } from 'src/app/store/reducers/search.reducer';

@Component({
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.css']
})
export class RepoCardComponent {

  @Input()
  public repo: IRepository;
}
