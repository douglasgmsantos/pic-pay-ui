import React from 'react';

import img8 from '../../assets/08.png'
import img9 from '../../assets/09.png'
import img10 from '../../assets/10.png'
import img11 from '../../assets/11.png'
import img12 from '../../assets/12.png'

import {
  Container,
  Option,
  Title,
  Img
} from './styles';


const itens = [
  {
    key: String(Math.random()),
    img: img8,
    title: "Pague suas contas sem sair de casa",
    bgColor: "#172c4a"
  },
  {
    key: String(Math.random()),
    img: img9,
    title: "Pague suas contas sem sair de casa",
    bgColor: "#6a0159"
  },
  {
    key: String(Math.random()),
    img: img10,
    title: "Pague suas contas sem sair de casa",
    bgColor: "#4139c8"
  },
  {
    key: String(Math.random()),
    img: img11,
    title: "Pague suas contas sem sair de casa",
    bgColor: "#00ab4b"
  },
  {
    key: String(Math.random()),
    img: img12,
    title: "Pague suas contas sem sair de casa",
    bgColor: "#ba2f76"
  },
]

const Tips: React.FC = () => {
  return (
    <Container>
      {itens.map(item => (
        <Option key={item.key} bgColor={item.bgColor}>
          <Title>{item.title}</Title>
          <Img source={item.img} />
        </Option>
      ))}
    </Container>
  )
}

export default Tips;