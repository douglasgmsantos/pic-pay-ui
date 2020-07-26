import React, { useState } from 'react'
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

FeatherIcon.loadFont();
AntDesign.loadFont();
MaterialCommunityIcons.loadFont();

import { Switch } from 'react-native';

import {
  Container,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  EyeButton,
  Info,
  Actions,
  Action,
  ActionLabel,
  UserBalance,
  UserBalanceTitle,
  PaymentsMethods,
  PaymentsMethodTitle,
  Card,
  CardBody,
  CardDetails,
  CardTitle,
  CardInfo,
  Img,
  AddButton,
  AddLabel,
  UserTicketButton,
  UserTicketLabel,
  UserTicketContainer
} from './styles';

import creditCard from '../../assets/credit-card.png'

const Wallet: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [useBalance, setUseBalance] = useState(true);

  const handleToggleVisibility = () => setIsVisible((prevState) => !prevState)
  const handleToggleUserBalance = () => setUseBalance((prevState) => !prevState)

  return (
    <Container>
      <Header useBalance={useBalance}>
        <HeaderContainer>
          <Title>Saldo PicPay</Title>

          <BalanceContainer>
            <Value >
              R$ <Bold>${isVisible ? "0,00" : "----"}</Bold>
            </Value>
            <EyeButton onPress={handleToggleVisibility}>
              <FeatherIcon name={isVisible ? "eye" : "eye-off"} size={28} color="#FFF" />
            </EyeButton>
          </BalanceContainer>

          <Info>Seu saldo esta rendendo 100% do CDI</Info>
          <Actions>
            <Action>
              <FeatherIcon name="dollar-sign" size={28} color="#FFF" />
              <ActionLabel>Adicionar</ActionLabel>
            </Action>

            <Action>
              <AntDesign name="bank" size={28} color="#FFF" />
              <ActionLabel>Retirar</ActionLabel>
            </Action>
          </Actions>

        </HeaderContainer>
      </Header>
      <UserBalance>
        <UserBalanceTitle>Usar saldo ao pagar</UserBalanceTitle>
        <Switch value={useBalance} onValueChange={handleToggleUserBalance} />
      </UserBalance>

      <PaymentsMethods>
        <PaymentsMethodTitle>
          Forma de pagamento
        </PaymentsMethodTitle>
        <Card>
          <CardBody>
            <CardDetails>
              <CardTitle>Cadastre seu cartão de créditos</CardTitle>
              <CardInfo>Cadastre seu cartão de crédito para poder fazer
                pagamentos mesmo quando não tiver saldo no seu PicPay.</CardInfo>
            </CardDetails>
            <Img source={creditCard} resizeMode="contain" />
          </CardBody>
          <AddButton>
            <AntDesign name="pluscircle" size={30} color="#0db060" />
            <AddLabel>Adicionar cartão de crédito</AddLabel>
          </AddButton>
        </Card>

        <UserTicketContainer>
          <UserTicketButton>
            <MaterialCommunityIcons name="ticket" size={20} color="#0db060" />
            <UserTicketLabel>Usar código promocional</UserTicketLabel>
          </UserTicketButton>
        </UserTicketContainer>
      </PaymentsMethods>

    </Container>
  )
}

export default Wallet;