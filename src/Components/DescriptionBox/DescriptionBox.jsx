import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews</div>
      </div>
      <div className="descriptionbox-description">
        <p>An ecommerce website is your digital storefront on the internet. It facilitates the transaction between a buyer and seller. It is the virtual space where you showcase products, and online customers make selections. Your website acts as the product shelves, sales staff, and cash register of your online business channel.</p>
        <p>Ecommerce is one way people buy and sell things in retail. Some companies sell products online only, while other sellers use ecommerce as a part of a broader strategy that includes physical stores and other distribution channels. Either way, ecommerce allows startups, small businesses, and large companies to sell products at scale and reach customers across the world.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
