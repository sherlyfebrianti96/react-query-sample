import { useQuery } from 'react-query';
import { UserPaginationType } from '../../interface/UserPaginationType';

export const useRqUser = () => {
  const getUsers = async () =>
    (await fetch('https://reqres.in/api/users?page=2')).json();

  const { data, isLoading, isError } = useQuery('users', getUsers);

  return { users: data as UserPaginationType, isLoading, isError };
};
