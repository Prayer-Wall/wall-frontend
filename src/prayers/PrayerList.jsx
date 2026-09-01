import {Link, useNavigate} from "react-router"
import "./prayer.css"

const PrayerList = ({prayers}) => {
   return (
      <ul>
         {prayers.map((prayer) => (
            <PrayerListItem key={prayer.id} prayer={prayer} />
         ))}
      </ul>
   )
}

const PrayerListItem = ({prayer}) => {
   const navigate = useNavigate();

   return (
      <li onClick={() => navigate("/edit/" + prayer.id)}>
         {prayer.prayer}
      </li>
   )
}

export default PrayerList;