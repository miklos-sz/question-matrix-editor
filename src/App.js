import React from 'react'

import { MatrixProvider } from './context/MatrixContext'
import { Col, Container, Row } from 'react-bootstrap'
import Topic from './components/reusables/Topic'
import Header from './components/Header'
import Matrix from './components/Matrix'
import Summary from './components/Summary'
import addIconsToLibrary from './helpers/FontAwesome'
import ButtonAddRemoveDimension from './components/reusables/ButtonAddRemoveDimension'

// Makes our iconfont set accessible site-wide
addIconsToLibrary()

const App = () => {
  return (
    <MatrixProvider>
      <Row>
        <Col lg={{ span: 4, offset: 1, order: 1 }}>
          <Header />
          <Summary />
        </Col>
        <Col lg={{ span: 6, offset: 1, order: 0 }}>
          <Container>
            <Topic />
            <div className='wrapper'>
              <Matrix />
              {/* Dimensions as reference words are consistently used for the row/col axis of the matrix */}
              <ButtonAddRemoveDimension dimension='rows' action='add' />
              <ButtonAddRemoveDimension dimension='cols' action='add' />
            </div>
          </Container>
        </Col>
      </Row>
    </MatrixProvider>
  )
}

export default App
