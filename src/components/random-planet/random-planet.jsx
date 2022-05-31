import React, {Component} from 'react';

import SwapiService from '../../services/swapi-service';

import './random-planet.css';
import Spinner from "../spinner/spinner";
import ErrorHandler from "../error-handler/error-handler";

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false,
  };

  constructor() {
    super();
  }

  componentDidMount() {
    this.updatePlanet();
    setInterval(this.updatePlanet, 2500)
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false
    });
  };

  onError = (err) => {
    this.setState({
      loading: false,
      error: true
    });
  }

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 19) + 2;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  }

  render() {
    const {planet, loading, error} = this.state;
    const errorMessage = error ? <ErrorHandler/> : null;
    const spinner = loading ? <Spinner/> : null;
    const hasData = !(loading || error);
    const content = hasData ? <PlanetView planet={planet}/> : null;
    return (
      <div className="random-planet jumbotron rounded">
        {errorMessage}
        {spinner}
        {content}
      </div>

    );
  }
}

const PlanetView = ({planet}) => {
  const {id, population, rotationPeriod, diameter, name} = planet;
  return (
    <>
      <img className="planet-image"
           src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </>
  )
}