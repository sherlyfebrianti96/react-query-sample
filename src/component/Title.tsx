import { Typography } from '@mui/material';

interface TitleProps {
  text: string;
}

export const Title = (props: TitleProps) => {
  return (
    <Typography variant="h2" sx={{ marginBottom: '0.6em' }}>
      {props.text}
    </Typography>
  );
};
