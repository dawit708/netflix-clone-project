
import React from 'react'
import Header from '../../components/Header'
import Banner from '../../Banner/Banner'
import RowList from '../../components/Rows/Rowlist/Rowlist'
import Footer from '../../components/Footer'
export default function Home() {
  return (
    <div>
      <Header/>
      <Banner/>
      <RowList/>
      <Footer/>
    </div>
  )
}