import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import {Helmet} from 'react-helmet';

import gaycg from 'assets/img/theme/gaycg.png';
import sking from "assets/img/theme/solomon-king1.png"
import { Link } from 'react-router-dom';

export default function Index() {
  return (
    <div>
      <Helmet>
        <title>Books by Solomon King</title>
        <meta name="description" content="Books authored by Solomon King; Teacher, Author and Financial Advisor. Available on Amazon, iBooks, Playbooks, Kobo, Okada"/>
        <link rel='canonical' href="https://books.solomonking.info"/>
        <meta name="robots" content="index, follow"/>
        <meta property="og:title" content="Books by Solomon King"/>
        <meta property="og:url" content="https://books.solomonking.info"/>
        <meta property="og:image" content={sking}/>
        <meta property="og:description" content="Books authored by Solomon King; Teacher, Author and Financial Advisor. Available on Amazon, iBooks, Playbooks, Kobo, Okada" />
        <meta property="twitter:site" content="@solomonpking" />
        <meta property="twitter:title" content="Books by Solomon King" />
        <meta property="twitter:image" content={sking} />
        <meta property="twitter:description" content="Books authored by Solomon King; Teacher, Author and Financial Advisor. Available on Amazon, iBooks, Playbooks, Kobo, Okada" />
      </Helmet>
      <main>
        <section>
          <Container>
            <h2 className="mt-lg mb-5">
              <span>Books by Solomon King</span>
            </h2>
            <Row>
              <Col sm="6">
                <img src={gaycg} style={{width: '100%'}} alt='get all you can get'/>
                <p className="lead text-center"><Link to="/get-all-you-can-get">Get All You Can Get</Link></p>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </div>
  )
}
