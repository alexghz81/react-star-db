import React, {Component} from 'react';
import './app.css';
import Header from "../header/header";
import ItemDetails, {Record} from "../item-details/item-details";
import SwapiService from "../../services/swapi-service";
import Row from "../row/row";
import ErrorBoundry from "../error-boundry/error-boundry";
import {PersonDetails, PersonList, PlanetDetails, PlanetList, StarshipDetails, StarshipList} from "../sw-components";
import RandomPlanet from "../random-planet/random-planet";


export default class App extends Component {
  swapiService = new SwapiService();

  state = {}

  render() {
    const {
      getPerson,
      getStarship,
      getStarshipImage,
      getPersonImage,
      getPlanetImage
    } = this.swapiService;

    const personDetails = (
      <ItemDetails
        itemId={11}
        getData={getPerson}
        getImageURL={getPersonImage}>
        <Record field={'gender'} label={'Gender'}/>
        <Record field={'eyeColor'} label={'Eye color'}/>
      </ItemDetails>
    );
    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageURL={getStarshipImage}>
        <Record field={'model'} label={'Model'}/>
        <Record field={'length'} label={'Length'}/>
        <Record field={'costInCredits'} label={'Cost'}/>
      </ItemDetails>
    )

    return (
      <ErrorBoundry>
        <div>
          <Header/>
          <RandomPlanet/>
          <PersonDetails itemId={11}/>
          <PlanetDetails itemId={5}/>
          <StarshipDetails itemId={13}/>
          <PersonList>
            {({name}) => <span>{name}</span>}
          </PersonList>
          <PlanetList>
            {({name}) => <span>{name}</span>}
          </PlanetList>
          <StarshipList>
            {({name}) => <span>{name}</span>}
          </StarshipList>
          {/*<Row left={planetList}/>*/}
        </div>
      </ErrorBoundry>
    )
  }
}




