import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    padding: 16
  }
})`
  margin-top: 25px;
`;

interface IOptionProp {
  bgColor: string;
}

export const Option = styled.TouchableOpacity`
  background: ${({ bgColor }: IOptionProp) => bgColor};
  width: 150px;
  height: 190px;
  border-radius: 8;
  padding: 15px;
  justify-content: space-between;
  margin-right: 16px;

`;

export const Title = styled.Text`
  color: #FFF;
  font-size: 16px;
  font-weight: bold;
`;

export const Img = styled.Image`
  align-self: center;
`;
