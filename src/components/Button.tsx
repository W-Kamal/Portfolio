import { styled } from '@stitches/react';

const Btn = styled('button', {
  backgroundColor: 'gainsboro',
  borderRadius: '9999px',
  fontSize: '13px',
  padding: '10px 15px',
  '&:hover': {
    backgroundColor: 'lightgray',
  },
});

() => <Btn>Btn</Btn>;

export default Btn