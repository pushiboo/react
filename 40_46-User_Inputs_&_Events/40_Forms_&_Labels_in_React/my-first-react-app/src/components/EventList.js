import styles from './EventList.module.css'

export default function EventList({events, handleClick}) {
  return (
    <div>
      {/* Remember everything you want tu return has to be in {}, because it is reactive! */}
      {events.map((event, index) => (
          // <React.Fragment key={event.id}>
          <div className={styles.card} key={event.id}>
            <h2>{ index } - {event.title}</h2>
            <button onClick={() => {handleClick(event.id)}}>Delete event</button>
          </div>
          // {/* </React.Fragment> */}
          // {/* // Fragements are not outputted in the DOM */}
      ))}
    </div>
  )
}