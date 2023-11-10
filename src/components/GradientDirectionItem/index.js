import {Button} from './styledComponents'

const GradientDirectionsItem = props => {
  const {eachList, onButtonClicked, isActive} = props
  const {directionId, displayText} = eachList

  const onClickedButton = () => {
    onButtonClicked(directionId)
  }
  return (
    <li>
      <Button onClick={onClickedButton} isActive={isActive}>
        {displayText}
      </Button>
    </li>
  )
}

export default GradientDirectionsItem
