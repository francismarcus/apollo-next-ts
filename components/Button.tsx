import * as React from 'react'
import styled from 'styled-components'

interface Props {
    children: React.ReactNode
    onClick?: () => void
}

const Button: React.StatelessComponent<Props> = ({
    children,
    onClick
}) => (
    <Container
        onClick={onClick}>
            {children}
    </Container>
)
// width: ${props => (props.fullWidth ? '100%' : '100px')};
export const Container = styled.div`
    width: 100px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    background-color: '#ff5a63';
    font-weight: 600;
    font-family: Crc;
    color: black;
    cursor: pointer;
    user-select: none;
    pointer-events: 'auto';
`

export default Button 