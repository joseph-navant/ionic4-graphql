import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';
import { ApolloUserResult } from '../models/apollo-result';

const GET_USERS = gql`
  {
    users {
      id
      name
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private apollo: Apollo) {}

  getUserList() {
    return this.apollo
      .watchQuery({
        query: GET_USERS
      })
      .valueChanges.pipe(map((result: ApolloUserResult) => result.data && result.data.users));
  }
}
