import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import Rating from '../components/ui/Rating'
import Price from '../components/ui/Price'

const Bookinfo = ({ books }) => {
  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
              <div className="books__selected--top">
                <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
                </Link>
                <Link to='/books' className="book__link">
                <h2 className="book__selection--title--top">Books</h2>
                </Link>
              </div>
              <div className="book__selected">
                <figure className="book__selected--figure">
                  <img src="https://m.media-amazon.com/images/I/61mIq2iJUXL._AC_UF1000,1000_QL80_.jpg," alt="" /> 
                </figure>
                <div className="book_selected--decription">
                  <h2 className="book__selected--title">Cracking The Coding interview</h2>
                  <Rating rating="4.5" />
                  <div className="book__selected--price">
                  <Price orinalPrice={50} salePrice={20}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
    </div>
  )
}
export default Bookinfo