import React from 'react';
import Logo from './components/Logo';
import Dashboard from './components/Dashboard';
import {
  GlobalStyles,
  Heading,
  Paragraph,
  Row, StyledButton,
  Footer
} from './components/StyledComp';
import FormField from './components/FormField';
import {Provider} from './store';
import reducer, {initialState} from './reducer';

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  
  function onSubmit() {
    dispatch({type: 'change', payload: {name: 'submitted', value: true}});
  }

  return (
    <Provider value={[state, dispatch]}>
      <main className="app__container">
        <GlobalStyles />
        <Logo />
        <Heading>We are launching <strong>soon!</strong></Heading>
        <Paragraph>Subscribe and get notified</Paragraph>
        <Row>
          <FormField />
          <StyledButton onClick={onSubmit}>Notify Me</StyledButton>
        </Row>
        <Dashboard />
        <Footer>
          <button aria-label="facebook"><ion-icon name="logo-facebook"></ion-icon></button>
          <button aria-label="twitter"><ion-icon name="logo-twitter"></ion-icon></button>
          <button aria-label="instagram"><ion-icon name="logo-instagram"></ion-icon></button>
        </Footer>
        <p>&copy; Copyright Ping. All rights reserved.</p>
      </main>
    </Provider>
  );
}

export default App;
