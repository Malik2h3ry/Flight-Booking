import React, { useEffect } from 'react'

// Imported Destination Images ============>
import paris from '../../assets/Paris.jpg'
import dubai from '../../assets/dubai.jpg'
import london from '../../assets/london.jpg'
import amsterdam from '../../assets/amsterdam.jpg'

// Imported Destination Images ============>
import traveler1 from '../../assets/user1.jpg'
import traveler2 from '../../assets/user2.jpg'
import traveler3 from '../../assets/user3.jpg'
import traveler4 from '../../assets/user4.jpg'

// Import AOS ==============>
import Aos from 'aos'
import 'aos/dist/aos.css'


// High order array method  called Map to display all the data ===>

const travelers = [
    {
        id: 1,
        destinationImage: paris,
        travelerImage: traveler1,
        tarvelerName: 'Dilem',
        socialLink: '@dilem4'

    },

    {
        id: 2,
        destinationImage: london,
        travelerImage: traveler2,
        tarvelerName: 'Malik Shery',
        socialLink: '@malikshery4'

    },

    {
        id: 3,
        destinationImage: dubai,
        travelerImage: traveler3,
        tarvelerName: 'Malik Ali',
        socialLink: '@malikAli5'

    },

    {
        id: 4,
        destinationImage: amsterdam,
        travelerImage: traveler4,
        tarvelerName: 'Emma Watson',
        socialLink: '@emmawatson1'

    }
]

const Travelers = () => {
    // UseEffect to set animation duration ========>
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])


    return (
        <div className='travelers container section'>
            <div className="sectionContainer">
                <h2 data-aos='fade-dwon' data-aos-duration='2500' >
                    Top Travelers of the month!
                </h2>

                <div className="travelersContainer grid">



                    {
                        travelers.map(({ id, destinationImage, travelerImage, tarvelerName, socialLink, }) => {
                            return (
                                // {/* Single Passenger Card */ }
                                <div data-aos='fade-up' data-aos-duration='2500' key={id} className="singleTraveler">
                                    <img src={destinationImage} className='destinationImage' />

                                    <div className="travelerDetails">
                                        <div className="travelerPicture">
                                            <img src={travelerImage} className='travelerImage' />
                                        </div>

                                    </div>
                                    <div className="tarvelerName">
                                        <span>{tarvelerName}</span>
                                        <p>{socialLink}</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>

            </div>

        </div>
    )
}

export default Travelers