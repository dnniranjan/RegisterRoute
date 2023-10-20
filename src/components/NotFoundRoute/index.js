import {NfContainer, Image, Heading, Para} from './styledcomponents'

const NotFoundRoute = () => (
  <NfContainer>
    <Image
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png "
      alt="not found"
    />
    <Heading>Page Not Found</Heading>
    <Para>We are sorry, the page you requested could not be found</Para>
  </NfContainer>
)

export default NotFoundRoute
