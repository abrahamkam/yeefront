import {FaSun, FaThermometerHalf} from 'react-icons/fa'
import '../styling.scss'
function card({profile, setWhiteProfile}){
    return(
        <div className="card">
            <div className="card__body">
                <img className='card__image' src={profile.image}></img>
                <h2 className="title">{profile.name}</h2>
                <p className="brightness"><FaSun />{profile.brightness}</p>
                <p className="temperature"><FaThermometerHalf/>{profile.temperature}</p>
            </div>
            <button onClick={() => setWhiteProfile(profile.brightness,profile.temperature)}>Set profile</button>
        </div>
    )
}

export default card;