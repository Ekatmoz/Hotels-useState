import { useState } from 'react';
import './App.css'
import { data } from './data'

function App() {

  const [hotels, setHotels] = useState(data);
  const [showText, setShowText] = useState(false);
  
  const removeHotel = (id) => {
    let newHotels = hotels.filter(hotel => hotel.id !== id);
    setHotels(newHotels);
  }

  const showTextClick = (item) => {
    item.showMore = !item.showMore
    setShowText(!showText)
  }
  return(
    <div>
      <div className='container'>
        <h1>Nyc top {hotels.length} Hotels</h1>
      </div>

        {hotels.map((item => {
          const {id, hotelName, description, image, source, showMore} = item;

          return(
            <div key={id}>
              <div className='container'>
                <h2>{id} - {hotelName}</h2>
              </div>

              <div className='container'>
                <p>{showMore ? description : description.substring(0, 220) + "..."}
                <button onClick={() => showTextClick(item)}>
                  {showMore ? "Show less" : "Show more"}
                </button>
                </p>
              </div>

              <div className='container'>
                <img src={image} width="500px" alt='Hotel'/>
              </div>

              <div className='container'>
                <p>{source}</p>
              </div>

              <div className='container'>
                <button className='btn' onClick={() => removeHotel(id)}>Remove</button>
              </div>

            </div>
          )
        }))}
        <div className='container'>
          <button className='btn' onClick={() => setHotels([])}>delete all</button>
        </div>
    </div>
  )
}

export default App;


// import { useState } from 'react';
// import './App.css';
// import { data} from './data';

// function App() {
  
//   const [gifts, setGifts] = useState(data);
  
//   const removeGift = (id) => {
//     let newGifts = gifts.filter(gift => gift.id !== id)
//     setGifts(newGifts);

//   }



//   return(
//     <div>
//       <div className='container'>
//         <h1>You have {gifts.length} gifts</h1>
//       </div>

//       {gifts.map((gift => {
//         const {id, gifty, image} = gift;

//         return(
//           <div key={id}>
//             <div className='container'>
//               <h2>{id}. {gifty}</h2>
//             </div>

//             <div className='container'>
//               <img src={image} width="300px"/>
//             </div>
//             <div className='container'>
//               <button onClick={() => removeGift(id)}>Remove</button>
//             </div>

//           </div>)
//       }))}
//       <div className='container'>
//         <button onClick={() => setGifts([])}>Delete all</button>
//       </div>
//     </div>
//   )

// }

// export default App;
