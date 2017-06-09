import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import 'rxjs/add/observable/of';
import { AppStore } from '../app-store';
import { Widget } from './widget.model';
import { ADD_WIDGETS } from './widgets.reducer';

const widgets = [
  {
    'id': 1,
    'name': 'Widget 1',
    'description': 'This is a description',
    'user': 1
  },
  {
    'id': 2,
    'name': 'Widget 2',
    'description': 'This is a description',
    'user': 3
  },
  {
    'id': 3,
    'name': 'Widget 3',
    'description': 'This is a lovely widget edited again!',
    'user': 2
  }
];

@Injectable()
export class WidgetsService {
  widgets$: Observable<Widget[]> = this.store.select('widgets');

  constructor(
    private store: Store<AppStore>
  ) {
    this.store.dispatch({ type: ADD_WIDGETS, payload: widgets });
  }

}
