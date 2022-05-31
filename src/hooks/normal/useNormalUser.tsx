import { useEffect, useState } from 'react';
import { UserPaginationType } from '../../interface/UserPaginationType';

export const useNormalUser = () => {
  const [users, setUsers] = useState<UserPaginationType>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      const request = await fetch('https://reqres.in/api/users?page=2');
      const response = (await request.json()) as UserPaginationType;
      
      setUsers(response);
      
      setLoading(false);
    };

    setLoading(true);
    fetchUsers().catch();
  }, []);

  return { loading, users };
};

