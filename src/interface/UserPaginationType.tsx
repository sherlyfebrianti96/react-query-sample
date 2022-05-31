import { PaginationType } from './PaginationType';
import { UserType } from './UserType';

export interface UserPaginationType extends PaginationType {
  data: Array<UserType>;
}
