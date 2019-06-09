import React from 'react';
import {connect} from 'react-redux';
import HeroCard from './HeroCard'
import HeroIndexButton from './HeroIndexButton'
import { getHeroes, nextIndex, prevIndex } from '../adapter/heroAdapter';
import prevArrow from '../images/prev-arrow.png'
import prevArrowOn from '../images/prev-arrow-on.png'
import nextArrow from '../images/next-arrow.png'
import nextArrowOn from '../images/next-arrow-on.png'

class HeroContainer extends React.Component {

  handleClick = (heroData) => {
    console.log('Got clicked');
  }

  createHeroCards = () => {
    return this.props.heroes.map(hero => <HeroCard key={hero.id} heroData={hero} handleClick={this.handleClick}/>)
  }

  nextOnClick = () => {
    const { maxIndex, heroCount, nextIndex } = this.props

    return maxIndex < heroCount ? nextIndex() : null
  }

  previousOnClick = () => {
    const { minIndex, prevIndex } = this.props

    return minIndex > 0 ? prevIndex() : null
  }

  componentDidMount() {
    this.props.getHeroes()
  }

  render() {
    return ( this.props.heroes.length > 0 &&
      <div className="hero-container">
        <div className="hero-container-header">
          <h3>School alumni you may know</h3>
          <span>See all</span>

          <HeroIndexButton icon={prevArrow} iconOn={prevArrowOn} handleClick={this.previousOnClick}/>
          <HeroIndexButton icon={nextArrow} iconOn={nextArrowOn} handleClick={this.nextOnClick}/>
        </div>

        <div className="hero-list">
          {this.createHeroCards()}
        </div>
      </div>
    )
  }
}

///////////////////////////////////////////////////////////
//____________________REDUX HELPERS______________________//
///////////////////////////////////////////////////////////
const filterHeroes = ({heroes, minIndex, maxIndex}) => {
  const filtered = []

  for (let i = minIndex; i < maxIndex; i++) {
    filtered.push(heroes[i])
  }

  return filtered;
}

const mapStatetoProps = (state) => {
  console.log("We are inside mapStatetoProps()", state);

  return state.heroes.length > 0 ?
    {...state, heroes: filterHeroes(state), heroCount: state.heroes.length}
    : state
}

export default connect(mapStatetoProps, { getHeroes, nextIndex, prevIndex })(HeroContainer);
