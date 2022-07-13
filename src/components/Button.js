import styled from "styled-components";
import { colors } from "./colors";


const Button = styled.button`
${
    (props)=>{
        const {color, backgroundColor}= colors.find((c)=> c.name === props.name)

        return `
          padding:0.6rem 1.3rem;
          border:none;
          cursor:pointer;
          background:${backgroundColor};
          color:${color};
          transition:all 0.5s ease-in-out;
          border-radius:10px;

          &:hover{
            transform:scale(1.09);
            background:${color};
            color:${backgroundColor};
            border: 2px solid ${backgroundColor}
          }
        `
    }
}
`

export {Button}