import {
  Avatar,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { UserType } from '../interface/UserType';

interface UserTableProps {
  data: Array<UserType>;
}

export const UserTable = (props: UserTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="Uset Table">
        <TableHead>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell>Fist Name</TableCell>
            <TableCell>List Name</TableCell>
            <TableCell>Avatar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map(user => (
            <TableRow>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.first_name}</TableCell>
              <TableCell>{user.last_name}</TableCell>
              <TableCell>
                <Avatar
                  alt={`${user.first_name} ${user.last_name} (${user.email})`}
                  src={user.avatar}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
