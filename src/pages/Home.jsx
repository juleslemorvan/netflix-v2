import React from 'react'
import HeroBanner from '../components/HeroBanner'
import Row from '../components/Row'
import requests from '../Request'


const Home = () => {
  return (
    <div>
        <HeroBanner />
        <Row title="Prochainement" fetchURL={requests.requestUpcoming} />
        <Row title="Tendance Actuelle" fetchURL={requests.requestTrending} />
        <Row title="Populaire" fetchURL={requests.requestPopular} />
        <Row title="Les mieux notés" fetchURL={requests.requestTopRated} />
        <Row title="Horreur" fetchURL={requests.requestHorror} />
        <Row title="Dernières sorties" fetchURL={requests.requestLatest} />
    </div>
  )
}

export default Home