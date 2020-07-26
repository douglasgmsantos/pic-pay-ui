import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
FeatherIcon.loadFont();

import {
  Container,
  Header,
  Title,
  Card,
  CardHeader,
  Avatar,
  Description,
  Bold,
  CardBody,
  UserName,
  CardFooter,
  Details,
  Value,
  Divisor,
  Date,
  Action,
  Option,
  OptionLabel
} from "./styles";

import avatar from '../../assets/avatar.png';

const Activities: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>Você</Bold> pagou o <Bold green={true}>@douglassantos</Bold>
          </Description>
        </CardHeader>

        <CardBody>
          <UserName>Douglas Santos</UserName>
        </CardBody>

        <CardFooter>
          <Details>
            <Value>R$ 10,90</Value>
            <Divisor />
            <FeatherIcon name="lock" color={"#FFF"} size={14} />
            <Date>
              há 2 anos
            </Date>
          </Details>

          <Action>
            <Option>
              <FeatherIcon name="message-square" size={14} color="#FFF" />
              <OptionLabel>0</OptionLabel>
            </Option>

            <Option>
              <FeatherIcon name="heart" size={14} color="#FFF" />
              <OptionLabel>0</OptionLabel>
            </Option>

          </Action>

        </CardFooter>
      </Card>
    </Container>
  )
}

export default Activities;