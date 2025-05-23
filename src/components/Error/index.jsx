import Illustration from '../../assets/404.svg'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const ErrorWrapper = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.backgroundLight};
`

const ErrorTitle = styled.h1`
  font-weight: 300;
`

const ErrorSubtitle = styled.h2`
  font-weight: 300;
  color: ${colors.secondary};
`

const ErrorImage = styled.img`
  max-width: 800px;
`

function Error() {
  return (
    <ErrorWrapper>
      <ErrorTitle>Oups...</ErrorTitle>
      <ErrorImage src={Illustration} alt="error" />
      <ErrorSubtitle>Il semblerait qu'il y ait un problème</ErrorSubtitle>
    </ErrorWrapper>
  )
}

export default Error
