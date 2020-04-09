import { IRepository } from './search.reducer';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { FavouritesActionsType, FavouritesActions } from '../actions/favourites.actions';

export interface IFavouriteState extends EntityState<IRepository> {}

export const favouriteAdapter: EntityAdapter<IRepository> = createEntityAdapter<IRepository>();

export const initialState: IFavouriteState = favouriteAdapter.getInitialState();

export function favouritesReducer(state: IFavouriteState = initialState, action: FavouritesActionsType): IFavouriteState {
    switch (action.type) {
        case FavouritesActions.SET_FAVOURITES_SUCCESS: {
            return {...state, ...action.payload};
        }
        case FavouritesActions.ADD_TO_FAVOURITES_SUCCESS: {
            return favouriteAdapter.addOne({...action.payload, isFavourite: true}, state);
        }
        case FavouritesActions.REMOVE_FROM_FAVOURITES_SUCCESS: {
            return favouriteAdapter.removeOne(action.payload.id, state);
        }
        default: {
            return state;
        }
    }
}
