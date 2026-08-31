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
         <section className="prayer-btns">
            <p className="edit-btn">Edit</p>
            <p className="delete-btn">Delete</p>
         </section>
      </li>
   )
}

export default PrayerList;