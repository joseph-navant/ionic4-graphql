import { User } from './user';

export interface ApolloResult {
  loading: boolean;
  networkStatus: number;
  stale: boolean;
}

export interface ApolloUserResult extends ApolloResult {
  data: UserData;
}

export interface UserData {
  users: User[];
}
