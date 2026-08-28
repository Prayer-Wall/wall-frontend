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
      <li>{prayer.prayer}</li>
   )
}

export default PrayerList;