import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, TopBarContainer, Container, Main} from './styles'

const Layout = ({ toolbar, content}) => {
    return (
        <Wrapper>
            <TopBarContainer>
            { toolbar }
            </TopBarContainer>
            <Main>
                <Container>
                { content }
                </Container>
            </Main>
            
        </Wrapper>
    )
}

Layout.defaultProps = {
    toolbar: <></>,
    content: <></>
}

Layout.propTypes = {
    toolbar: PropTypes.node,
    content: PropTypes.node
}

export default Layout