import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Dynamic Tactics Facilitator</title>
        <meta property="og:title" content="Dynamic Tactics Facilitator" />
      </Helmet>
    </div>
  )
}

export default Home
