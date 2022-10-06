import { forwardRef } from 'react';

import { Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';

const SlideUp = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default SlideUp;
