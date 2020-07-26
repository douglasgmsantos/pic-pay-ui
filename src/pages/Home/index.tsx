import React from 'react'

import AntDesignIcon from 'react-native-vector-icons/AntDesign';
AntDesignIcon.loadFont()

import Suggestions from '../../components/Suggestions';
import Activities from '../../components/Activities';
import Tips from '../../components/Tips';
import Banner from '../../components/Banner';

import { Container, Scroll, Header, BalanceContainer, BalanceTitle, Balance } from './styles';


const Home: React.FC = () => {
  return (
    <Container>
      <Scroll>
        <Header>
          <AntDesignIcon name="qrcode" size={30} color="#10c86e" />
          <BalanceContainer>
            <BalanceTitle>Saldo</BalanceTitle>
            <Balance>$ 0,00</Balance>
          </BalanceContainer>
          <AntDesignIcon name="gift" size={30} color="#10c86e" />
        </Header>

        <Suggestions />
        <Activities />
        <Tips />
        <Banner />

      </Scroll>
    </Container>
  )
}

export default Home;