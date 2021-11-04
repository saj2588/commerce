import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField, Grid } from '@material-ui/core';

const FormInput = ({ name, label, required }) => {
  const { control } = useFormContext();
  const isError = false;



  return (
    <Grid item xs={12} sm={6}>
      <Controller    //react-hook-forms now requires a render props
        render={({ field }) => (
          <TextField {...field} fullWidth label={label} required={required} />
        )}
        control={control}
        name={name}
        defaultValue=""
      />
    </Grid>

  );

}

export default FormInput;