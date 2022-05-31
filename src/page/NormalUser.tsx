import { CircularProgress } from '@mui/material';
import { Title } from '../component/Title';
import { UserTable } from '../component/UserTable';
import { useNormalUser } from '../hooks/normal/useNormalUser';

export const NormalUserPage = () => {
  const userTableData = useNormalUser();

  return (
    <div>
      <Title text="Normal API Fetch" />
      <UserTable data={userTableData.users?.data || []} />
      {userTableData.loading && <CircularProgress />}
    </div>
  );
};

