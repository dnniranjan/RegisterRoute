import {Link} from 'react-router-dom'
import InputContext from '../ReactContext/index'

import {
  MainContainer,
  Nav,
  SubContainer,
  InitialContainer,
  LaterContainer,
  Button,
  Image,
  Heading,
  Para,
} from './styledcomponents'

const HomeRoute = () => (
  <InputContext.Consumer>
    {value => {
      const {userName, choice, isRegistered} = value
      return (
        <MainContainer>
          <Nav>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
              alt="website logo"
            />
          </Nav>
          <SubContainer>
            {isRegistered ? (
              <InitialContainer>
                <Heading>Welcome to Meetup</Heading>
                <Para>Please register for the topic</Para>
                <Link to="/register">
                  <Button type="button">Register</Button>
                </Link>
              </InitialContainer>
            ) : (
              <LaterContainer>
                <Heading>Hello {userName}</Heading>
                <Para>Welcome To{choice}</Para>
              </LaterContainer>
            )}

            <Image
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
            />
          </SubContainer>
        </MainContainer>
      )
    }}
  </InputContext.Consumer>
)

export default HomeRoute
