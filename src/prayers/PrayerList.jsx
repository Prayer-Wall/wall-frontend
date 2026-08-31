import {Link} from "react-router"
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
   return (
      <li>
         {prayer.prayer}
         <Link to={"/edit/" +prayer.id}>Edit</Link>
      </li>
   )
}

export default PrayerList;