import React from 'react'
import Banner from '../Banner/Banner'
import About from '../About/About'
import Services from '../Services/Services'
import Available from '../Available/Available'
import Products from '../Products/Products'
import Teams from '../Team/Teams'
import Features from '../Features/Features'
import Testimonials from '../Testimonials/Testimonials'
import useTitle from '../../../Hooks/useTitle'

const Home = () => {
  useTitle('Home - Car Doctor')
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Available></Available>
      <Products></Products>
      <Teams></Teams>
      <Features></Features>
      <Testimonials></Testimonials>
    </div>
  )
}

export default Home