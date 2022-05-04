

import { TextField, TextFieldProps } from '@mui/material';
import React from 'react';
import { uid } from '../../commun/utils/uid';

type Props = {
  labelText: string;
  TextFieldProps?: TextFieldProps;
};

const InputFile: React.FC<Props> = ({ labelText, TextFieldProps }) => {
  const id = uid();
  return (
    <>
      <label htmlFor={id}>
        {labelText}
      </label>
      <TextField { ...TextFieldProps } id={id} type={'file'} sx={{ display: 'none' }} />
    </>
  );
}

export default InputFile;