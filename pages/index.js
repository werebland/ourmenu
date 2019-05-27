import React, { Component } from 'react';
import Link from 'next/link'
import Head from 'next/head'
import styled, { createGlobalStyle } from 'styled-components';
import posed, {PoseGroup} from 'react-pose'

import MenuFinder from '../components/MenuFinder'

const options = [
  {
    label: 'Halifax',
    value: 'Halifax'
  },
  {
    label: 'Abu Dhabi',
    value: 'Abu Dhabi'
  }
]

const cities = ["Halifax", "Abu Dhabi"]

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
  }
`

const IndexWrapper = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  margin: 0;
  padding: 0;
  background-image: url(https://images.unsplash.com/photo-1491739481003-2991327b66e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1654&q=80);
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
`;

const Nav = styled.div`
  width: 100%;
  max-width: 100vw;
  min-width: 100vw;
  height: 46px;
  padding: 0 32px;
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 32px;
  left: 0;
  right: 0;
  z-index: 88;
`;

const NavLogo = styled.svg`
  width: 64px;
  height: 25px;
  fill: ${props => props.inverted ? 'rgba(0,0,0,1)' : '#fff'};
`;

const NavButton = styled.a`
  border: 1px solid ${props => props.inverted ? 'rgba(0,0,0,1)' : '#fff'};
  border-radius: 8px;
  appearance: none;
  background: ${props => props.inverted ? 'rgba(0,0,0,1)' : '#fff'};
  font-size: 1rem;
  font-weight: 700;
  color: ${props => props.inverted ? '#fff' : 'rgba(0,0,0,1)'};
  padding: 12px 16px;
  cursor: pointer;
  transition: background 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms, border-color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms, color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;

  &:hover {
    background: transparent;
    border-color: ${props => props.inverted ? 'rgba(0,0,0,1)' : '#fff'};
    color: ${props => props.inverted ? 'rgba(0,0,0,1)' : '#fff'};
  }
`;

const menuPose = {
  enter: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: ({offsetHeight}) =>  offsetHeight,
    opacity: 0,
  }
}

const Menu = styled(posed.div(menuPose))`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 8;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  background: #fff;
`;

const MenuNav = styled.div`
  width: 420px;
  padding: 16px 0;
  display: inline-flex;
  justify-content: flex-start;
  position: relative;
  z-index: 888;
`;

const MenuBack = styled.span`
  display: inline-flex;
  font-size: 1rem;
  font-weight: 500;
  color: rgba(0,0,0,.69);
  cursor: pointer;
`;

const MenuFrame = styled.iframe`
  border: 1px solid rgba(0,0,0,1);
  border-radius: 8px;
  width: 420px;
  height: 600px;
`;

const customSelectStyles = {
  control: (provided) => ({
    ...provided,
    borderRadius: 8,
    borderColor: '#fff',
    fontSize: '2.25rem',
    height: 56,
    width: 240,
    fontWeight: 700,
    color: '#000',
  })
}

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: "",
      restaurant: "",
      restaurants: [
        {
          name: 'Julep Kitchen + Bar',
          username: 'julepkitchenbar'
        },
        {
          name: 'XOH',
          username: 'xoh'
        },
      ],
      raised: false,
      city: '',
      offsetHeight: 0,
    }
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(displayLocationInfo);
    }

    function displayLocationInfo(position) {
      const lng = position.coords.longitude;
      const lat = position.coords.latitude;

      console.log(`longitude: ${ lng } | latitude: ${ lat }`);
    }
  }

  handleGeolocation(position) {
    console.log('Geolocation');
    console.log(position);
  }

  handleCitySelect(value, offsetHeight) {
    console.log(value);
    if (value) {
      this.setState({
        city: value.value,
        offsetHeight,
      })
    } else {
      this.setState({
        city: ""
      })
    }
  }

  render() {
    return (
      <IndexWrapper>
        <Head>
          <title>OurMenu | Restaurant menus for anywhere</title>
        </Head>
        <GlobalStyle />
        <Nav>
          <NavLogo inverted={this.state.restaurant != ""} version="1.1"
          	 x="0px" y="0px" width="256px" height="100px" viewBox="0 0 256 100">
          <g>
          	<path class="st0" d="M25.2,0c13.9,0,25,9,25,21.9c0,12.7-10.5,21.8-25,21.8C10.1,43.7,0,34.6,0,21.9C0,9,11.1,0,25.2,0z M25.1,31.5
          		c5.6,0,9.7-4,9.7-9.7c0-5.7-4.3-9.7-9.7-9.7c-5.5,0-9.8,4-9.8,9.7C15.3,27.5,19.3,31.5,25.1,31.5z"/>
          	<path class="st0" d="M69.9,20.8c0,8.1,2.2,11.3,8.2,11.3c6,0,8.2-3.1,8.2-11.3V1.2h14.4v23.1c0,13.8-7,19.4-22.7,19.4
          		s-22.7-5.6-22.7-19.4V1.2h14.4V20.8z"/>
          	<path class="st0" d="M109.2,1.2h14.4v6h0.2c0,0,4.6-7.2,12.8-7.2c5.4,0,9.1,2.6,9.1,2.6l-6,12.1c0,0-2.7-2.3-7.5-2.3
          		c-7.5,0-8.6,7.3-8.6,8.4v21.7h-14.4V1.2z"/>
          	<path class="st0" d="M3,57.5h14.4v4.3h0.2c3.3-3.2,7.4-5.6,12-5.6c5.5,0,11.7,2,14.6,7.6c4.4-5.2,9.3-7.6,13.9-7.6
          		c7.7,0,16.3,3.8,16.3,15.3v27.2H60V75.5c0-4.1-2.2-7.7-7.3-7.7c-4.6,0-6.5,3.3-6.7,6.4v24.6H31.5V75.5c0-4.1-2.2-7.7-7.3-7.7
          		c-4.8,0-6.7,3.6-6.7,6.9v24.1H3V57.5z"/>
          	<path class="st0" d="M94.7,80.1c0,6.4,5.4,8.5,9.1,8.5c4.7,0,6.7-0.9,10.2-4.6l10.4,5.1C119.7,97,112,100,102.7,100
          		c-12.6,0-23-9.8-23-21.8c0-12.1,10.4-21.9,23-21.9c12.7,0,22.4,7.4,22.4,21.9c0,0.6,0,1.4-0.1,1.9H94.7z M111.1,72.2
          		c-0.7-4.3-3.7-6.7-7.9-6.7c-5,0-7.8,2.9-8,6.7H111.1z"/>
          	<path class="st0" d="M131.1,57.5h14.4v4.3h0.2c3.3-3.2,7.4-5.6,12-5.6c7.7,0,18.4,3.8,18.4,15.3v27.2h-14.4V75.5c0-4.1-2.9-8-7.5-8
          		c-4.3,0-8.6,3.9-8.6,8v23.3h-14.4V57.5z"/>
          	<path class="st0" d="M198.1,77.2c0,8.1,2.2,11.3,8.2,11.3c6,0,8.2-3.1,8.2-11.3V57.5H229v23.1c0,13.8-7,19.4-22.7,19.4
          		s-22.7-5.6-22.7-19.4V57.5h14.4V77.2z"/>
          	<path class="st0" d="M256,90.8c0,5.1-4.2,9.2-9.4,9.2c-5.1,0-9.3-4.1-9.3-9.2c0-5.1,4.2-9.3,9.3-9.3C251.8,81.6,256,85.7,256,90.8z
          		"/>
          </g>
          </NavLogo>
          <Link href="/for-restaurants">
            <NavButton inverted={this.state.restaurant !== ""}>
              For restaurants
            </NavButton>
          </Link>
        </Nav>
        <MenuFinder
          options={options}
          cities={cities}
          city={this.state.city}
          handleCitySelect={(option, offsetHeight) => this.handleCitySelect(option, offsetHeight)}
          restaurants={this.state.restaurants}
          handleRestaurantSelect={(restaurant) => this.setState({ restaurant })}
          offsetHeight={this.state.offsetHeight} />
        <PoseGroup>
          {this.state.restaurant &&
            <Menu key={0} offsetHeight={this.state.offsetHeight}>
              <MenuNav>
                <MenuBack onClick={() => this.setState({ restaurant: "" })}>
                  Back to {this.state.city} menus
                </MenuBack>
              </MenuNav>
              <MenuFrame src={`https://app.somm.ca/${this.state.restaurant}`}/>
            </Menu>
          }
        </PoseGroup>
      </IndexWrapper>
    );
  }

}

export default Index;
