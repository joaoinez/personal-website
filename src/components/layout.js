import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Header from "./header"
import "./layout.css"

const Container = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  background-color: #242424;
`

const FooterContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
  color: white;
  display: flex;
  justify-content: center;

  p {
    margin: 0;
  }
`

const Layout = ({ children }) => (
  <>
    <Header />
    <Container>
      <main>{children}</main>
      <Footer>
        <FooterContainer>
          <p>© 2019 Joao Inez</p>
        </FooterContainer>
      </Footer>
    </Container>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
