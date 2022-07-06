import styled from "styled-components";

const ProductCard = ({name, description, thumbnail})=>{
    return (
        <div>    
            <img 
                width="200" 
                src={thumbnail}
                alt={name}
            />

            <ProductCardStyled>
                <div>{name}</div>
            </ProductCardStyled>    

            <ProductCardStyledEX>
            <div>
                {description}
            </div>
            </ProductCardStyledEX>
        </div>  
    );
};

const ProductCardStyled = styled.div`
font-weight:700;
font-size:20px;
padding: 10px 0px;
`;

const ProductCardStyledEX = styled.div`
width: 350px
`;

export default ProductCard;