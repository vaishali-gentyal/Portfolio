import { Grid } from '@mui/material'
import React from 'react'

export const CardContainer = (props) => {
  return (
    <Grid container columnSpacing={props.columnSpacing}
    justifyContent="space-between"
    sx={{
      width:'100%',
      minHeight:'350px',
      maxHeight:'100%',
      margin:"40px 0px",
      padding:"30px",
      ...props.sx,
    }}
    >{props.children}</Grid>
  )
}
