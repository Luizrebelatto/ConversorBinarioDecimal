import styled from 'styled-components/native';

export const Text = styled.Text`
    text-align:center;
    color: #92817A;
    font-size:16px;
    padding-top:10px;
`;

export const Wrapper = styled.SafeAreaView
`
    background: #FAE0DF;
    flex:1;
`;

export const ContainerText = styled.View`
    flex-direction:row;
    align-items:center;
    justify-content:center;
    border:1px solid rgba(255,255,255,0.6);
    width:250px;
    height:45px;
    border-radius:25px;
    margin: 10px 0px 10px 55px;
    padding-bottom:10px;
    background-color:#F6F5F1;
`;