import Title from './Title';
import tourOne from '../images/tour-1.jpeg';
import tourTwo from '../images/tour-2.jpeg';
import tourThree from '../images/tour-3.jpeg';
import tourFour from '../images/tour-4.jpeg';
import {tours} from '../data';
const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title textFirst="featured" textSecond="tours"/>

      <div className="section-center featured-center">
        {tours.map((tour) =>{
          const {id, src, date, title, text, icon, country, days, price} = tour;
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={src} className="tour-img" alt="" />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>{text}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className={icon}></i>
                    </span>{' '}
                    {country}
                  </p>
                  <p>{days} days</p>
                  <p>from ${price}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
export default Tours;