import React from 'react';
import Superhero from './Superhero';
import Button from '@material-ui/core/Button';
import { Grid, TextField } from '@material-ui/core';

class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', superheros: [] };
  }

  changeState = (event) => {
    this.setState({ value: event.target.value });
  }

  getSuperHero = () => {
    const superHeroName = this.state.value;

    fetch(`https://www.superheroapi.com/api.php/1431485360327467/search/${superHeroName}`)
      .then(respuesta => respuesta.json())
      .then(json => {   
        if(json.error){
          console.log('Not exists this superhero');
          //  Aqui no sé como mostrar un error, si hacerlo con un componente, con un popup, o tener una frase escondida en el form 
          //  y mostrarla cuando haya el error.
        }else{
          this.setState({ superheros: json.results });
        }
        })
  }

  render() {
    return (
      <div>
        <Grid container spacing={12}>
            <Grid container spacing={24}>
                <Grid item sm={11}>
                  <TextField fullWidth variant='outlined' margin='normal' label='Superhero' onChange={this.changeState}></TextField>
                </Grid>
                <Grid item sm={1} className="containerSearchButton">
                  <Button variant='contained' color='primary' onClick={this.getSuperHero}>Search!</Button>
                </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={24}>
            {this.state.superheros.map((superhero, i) => <Superhero name={superhero.name}
              realname={superhero['biography']['full-name']} ocupation={superhero['work'].occupation} based={superhero['work'].base}
              srcImg={superhero['image'].url} key={i}></Superhero>)}
        </Grid>
      </div>
    );
  }
}

export default MainComponent;