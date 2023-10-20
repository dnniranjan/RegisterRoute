import {Component} from 'react'
import InputContext from '../ReactContext/index'
import {
  MainContainer,
  Nav,
  Image,
  SubContainer,
  InitialContainer,
  LaterContainer,
  Heading,
  Para,
  Button,
  Input,
  Label,
} from './styledcomponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class RegisterRoute extends Component {
  state = {
    isError: false,
    errorMsg: 'Please enter your name',
    userName: '',
    choice: '',
    isRegistered: true,
  }

  onInput = event => {
    this.setState({userName: event.target.value})
  }

  onTopic = event => {
    console.log(event.target.value)
    this.setState({choice: event.target.value})
  }

  onSubmit = event => {
    event.preventDefault()
    const {userName} = this.state
    const {history} = this.props
    if (userName === '') {
      this.setState({isError: true})
    } else {
      this.setState({isError: false, isRegistered: false})
      history.replace('/')
    }
  }

  render() {
    const {isError, errorMsg, userName, choice, isRegistered} = this.state
    console.log(userName, choice)
    return (
      <InputContext.Consumer>
        {value => {
          const {changeValues} = value
          const changeValue = () => {
            changeValues(userName, choice, isRegistered)
          }
          return (
            <MainContainer>
              <Nav>
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                  alt="website logo"
                />
              </Nav>
              <SubContainer>
                <InitialContainer>
                  <Image
                    src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                    alt="website register"
                  />
                </InitialContainer>
                <LaterContainer>
                  <Heading>Let Us join</Heading>
                  <form onSubmit={this.onSubmit}>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      type="text"
                      id="name"
                      placeholder="Your Name"
                      onChange={this.onInput}
                      value={userName}
                    />
                    <Label htmlFor="topics">TOPICS</Label>
                    <select
                      id="topics"
                      onChange={this.onTopic}
                      defaultValue="ARTS_AND_CULTURE"
                    >
                      {topicsList.map(eachItem => (
                        <option key={eachItem.id} value={eachItem.id}>
                          {eachItem.displayText}
                        </option>
                      ))}
                    </select>
                    <Button type="submit" onClick={changeValue}>
                      Register Now
                    </Button>
                  </form>
                  {isError && <Para>{errorMsg}</Para>}
                </LaterContainer>
              </SubContainer>
            </MainContainer>
          )
        }}
      </InputContext.Consumer>
    )
  }
}

export default RegisterRoute
