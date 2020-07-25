import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
FeatherIcon.loadFont()

import { Button, Label } from './styles';
import { TouchableWithoutFeedback } from 'react-native';

interface IPayButtonProps {
  onPress(): void;
  focused: boolean;
}

const PayButton: React.FC<IPayButtonProps> = ({ onPress, focused }: IPayButtonProps) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Button focused={focused} >
        <FeatherIcon name="dollar-sign" size={30} color={focused ? '#000' : '#FFF'} />
        <Label focused={focused}>Pagar</Label>
      </Button>
    </TouchableWithoutFeedback>
  )
}

export default PayButton;