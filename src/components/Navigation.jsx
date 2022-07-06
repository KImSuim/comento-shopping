import styled from "styled-components";

const Navigation = ()=>{
    return (
        <NavigationStyled>
            <div>
                <div>코멘토 쇼핑</div>
            </div>
        </NavigationStyled>
    )  ;
};

const NavigationStyled = styled.div`
font-weight:700;
font-size:17px;
padding: 24px 16px;
text-align: center;
`;

export default Navigation;