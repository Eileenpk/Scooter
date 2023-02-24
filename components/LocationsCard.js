import styles from '@/styles/locations.module.css'

export default function LocationsCard ({location}) {
return (
    <div className={styles.locationCard}>
        <h4 className={styles.locationCardHeading}>{location}</h4>
    </div>
)
}