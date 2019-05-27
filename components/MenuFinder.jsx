import React from 'react';
import styled from 'styled-components';
import posed, { PoseGroup } from 'react-pose'
import Select from 'react-select';

const MenuFinderContainer = styled.div`
  position: relative;
`;

const citySelectorPose = {
  collapsed: {
    height: ({offsetHeight}) =>  `calc(${offsetHeight}px + 96px + 96px)`,
  },
  expanded: {
    height: '100vh',
  }
}

const CitySelector = styled(posed.div(citySelectorPose))`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;

  & .dimension-div {
    display: inline-flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
  }
`;

const HeroText = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #fff;
  margin: 0;
  margin-bottom: 16px;
`;

const MenuPicker = styled.section`
  width: 100%;
  height: 100%;
  background: #fff;
  min-height: ${props => `calc(100vh - ${props.offsetHeight}px)`};
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-start;
`;

const MenuList = styled.div`
  display: inline-flex;
  flex-flow: column nowrap;
`;

const MenuListItem = styled.article`
  width: 100%;
  max-width: 560px;
  padding: 16px;
  box-sizing: border-box;
  border: 1px solid #fff;
  border-radius: 8px;
  background: #fff;
  display: flex;
  flex-flow: column nowrap;
  cursor: pointer;
  transition: padding-left 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,border-color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,border-width 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
  margin-bottom: 16px;

  &:hover {
    border-color: #000;
  }
`;

const MenuListItemTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: rgba(0,0,0,1);
  margin: 0;
`;

const MenuListItemSubtitle = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
  color: rgba(0,0,0,.64);
`;

const selectStyles = {
  container: (provided, state) => ({
    ...provided,
    width: '100%'
  }),
  control: (provided, state) => ({
    ...provided,
    borderRadius: 8,
    borderColor: state.isFocused ? 'rgba(0,0,0,1)' : '#fff',
    boxShadow: state.isFocused ? '0 0 0 1px rgba(0,0,0,1)' : null,
    fontSize: '2.25rem',
    height: 56,
    width: '100%',
    fontWeight: 700,
    color: '#000',

    ':focus': {
      borderColor: 'rgba(0,0,0,1)'
    },

    ':active': {
      borderColor: 'rgba(0,0,0,1)'
    },
    ':hover': {
      borderColor: 'rgba(0,0,0,1)'
    }
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? '#fff' : 'rgba(0,0,0,1)',
    fontSize: '2.25rem',
    fontWeight: 700,
    background: state.isSelected ? 'rgba(0,0,0,1)' : state.isFocused ? 'rgba(0,0,0,.24)' : null,
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: 'rgba(0,0,0,1)',
  }),
  input: (provided) => ({
    ...provided,
    color: 'rgba(0,0,0,1)',
    fontWeight: 700,
    color: '#000',
  }),
}

function MenuFinder({ offsetHeight, options, cities, city, handleCitySelect, restaurants, handleRestaurantSelect, menu }) {
  let containerRef = React.createRef();
  console.log(containerRef);

  console.log(cities.reduce((r, e) => r.length < e.length ? e : r, "").length);
  return (
  <MenuFinderContainer>
    <CitySelector pose={city ? 'collapsed' : 'expanded'} offsetHeight={offsetHeight}>
      <div className="dimension-div" ref={containerRef}>
        <HeroText>
        Menus for restaurants in
        </HeroText>
        <div style={{
          width: `${cities.reduce((r, e) => r.length < e.length ? e : r, "").length * 12 + 140}px`,
          display: 'inline-flex',
        }}>
          <Select
            value={options.find((option) => option.value == city)}
            options={options}
            styles={selectStyles}
            isClearable
            onChange={(option) => handleCitySelect(option, containerRef.current.offsetHeight)}
          />
        </div>

      </div>
    </CitySelector>
    <MenuPicker offsetHeight={offsetHeight}>
      <MenuList>
        {restaurants.map((restaurant) =>
          <MenuListItem onClick={() => handleRestaurantSelect(restaurant.username)}>
            <MenuListItemTitle>
              {restaurant.name}
            </MenuListItemTitle>
            <MenuListItemSubtitle>
              Southern · $$ - $$$ · 1669 Barrington St.
            </MenuListItemSubtitle>
          </MenuListItem>
        )}
      </MenuList>
    </MenuPicker>
  </MenuFinderContainer>
)};

export default MenuFinder;
