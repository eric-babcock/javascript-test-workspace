import { TextField, Box } from '@mui/material'

export default function ValidationTextFields() {
  return (
    <Box
      component='form'
      sx={{
        '& .MuiTextField-root': {m:1, width:'30ch' }
      }}
      noValidate
      autoComplete='off'
    >
      <h2>Validation</h2>
      <div>
        <TextField
          error
          id="outlined-error"
          label="Error"
          defaultValue="Hello World"
        />
        <TextField
          error
          id='outlined-error-helper-text'
          label='Error'
          defaultValue='Hello World'
          helperText='Incorrect entry.'
        />
      </div>
      <div>
        <TextField
          error
          id='filled-error'
          label="Error"
          defaultValue='Hello World'
          variant='filled'
        />
        <TextField
          error
          id='filled-error-helper-text'
          label='Error'
          defaultValue='Hello World'
          helperText="Incorrect entry"
          variant='filled'
        />
      </div>
      <div>
        <TextField
          error
          id='standard-error'
          label='Why?'
          defaultValue='Hello World'
          variant='standard'
        />
        <TextField
          error
          id='standard-error-helper-text'
          label='Error'
          defaultValue='Hello World'
          helperText='Incorrect entry.'
          variant='standard'
        />
      </div>
    </Box>
  )
}