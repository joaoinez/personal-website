import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import "./layout.css"
import Footer from "./footer"

const Container = styled.div`
  min-height: 100vh;
`

const Layout = ({ children }) => (
  <>
    <Container>
      <main>{children}</main>
      <Footer />
    </Container>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
