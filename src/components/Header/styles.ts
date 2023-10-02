import styled from "styled-components/native";
import { CaretLeft } from "phosphor-react-native";
import theme from "@theme/index";

export const Container = styled.View`
    width:100%;

    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top:10px;
    
`;

export const BackButton = styled.TouchableOpacity`
    flex:1;
`;

export const BackIcon = styled(CaretLeft).attrs(({}) => ({
    size: 36,
    color: theme.COLORS.WHITE,
}))``;

export const Logo = styled.Image`
    width: 46px;
    height: 55px;
`;
    