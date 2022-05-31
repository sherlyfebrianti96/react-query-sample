import { CircularProgress } from '@mui/material';
import { Title } from '../component/Title';
import { UserTable } from '../component/UserTable';
import { useRqUser } from '../hooks/react-query/useRqUser';

export const ReactQueryUserPage = () => {
  const userTableData = useRqUser();

  return (
    <div>
      <Title text="API Fetch with React Query" />
      <UserTable data={userTableData.users?.data || []} />
      {userTableData.isLoading && <CircularProgress />}
      {userTableData.isError && <div>Error fetching list.</div>}
    </div>
  );
};
