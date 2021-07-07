import React  from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

const Contacto = () => {
    const classes = useStyles();

    return (
      <section id="CONTACTO">
        <div id="H2">
          <h2>LLENÁ TUS DATOS Y ENTERATE DE TODAS LAS NOVEDADES</h2>
        </div>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField required id="standard-required" label="Required" defaultValue="Nombre" color="secondary"/>
          <br/>
          <TextField required id="standard-required" label="Required" defaultValue="Apellido" color="secondary"/>
          <br/>
          <TextField required id="standard-required" label="Required" defaultValue="Email" type="email" color="secondary"/>
          <br/>
          <TextField id="date" label="Cumpleaños" type="date" color="secondary" defaultValue="2000-01-01"
          className={classes.textField}
          InputLabelProps={{
              shrink: true,
          }}
          />
          <br/>
          <br/>
          <Button variant="contained" color="secondary">ENVIAR</Button>
        </form>
      </section>
    );
}

export default Contacto;