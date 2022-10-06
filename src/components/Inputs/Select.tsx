import { InputBase, Select as MuiSelect, SelectProps } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Select = (props: SelectProps) => {
  return (
    <MuiSelect MenuProps={MenuProps} {...props} input={<InputBase />}>
      {props.children}
    </MuiSelect>
  );
};

export default Select;
