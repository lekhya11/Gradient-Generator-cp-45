import {Component} from 'react'

import GradientDirectionsItem from '../GradientDirectionItem'

import {Heading, Para, List} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeId: gradientDirectionsList[0].directionId,
  }

  onButtonClicked = id => {
    this.setState({activeId: id})
  }

  render() {
    const {activeId} = this.state

    return (
      <div>
        <Heading>Generate a CSS Color Gradient</Heading>
        <Para>Choose Direction</Para>
        <List>
          {gradientDirectionsList.map(each => (
            <GradientDirectionsItem
              eachList={each}
              key={each.directionId}
              isActive={each.directionId === activeId}
              onButtonClicked={this.onButtonClicked}
            />
          ))}
        </List>
        <Para>Pick the Colors</Para>
      </div>
    )
  }
}

export default GradientGenerator
