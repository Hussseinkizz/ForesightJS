import DemoWrapper from "./DemoWrapper"
import { FeatureCard } from "./FeatureCard"
import styles from "../styles.module.css"
export const Overview = () => {
  return (
    <div className={styles.overviewContainer}>
      <div className={styles.descriptionText}>
        <h2>What is ForeSightJs?</h2>
        <p>
          ForesightJS is a JavaScript library that predicts user intent by analyzing mouse movements
          and trajectories. It allows web applications to anticipate user actions before they
          happen, creating a more responsive and fluid user experience.
        </p>
        <p>
          Key features include trajectory prediction, customizable hit slop areas, and the ability
          to prefetch data or resources before actual user interaction.
        </p>
      </div>

      <div className={styles.cardGrid}>
        <FeatureCard
          title="Trajectory Prediction"
          description="Predicts the path of the user's cursor based on its movement and velocity, allowing for early prefetching."
          icon="📈"
        />
        <FeatureCard
          title="Element Hit Slop"
          description="Define custom hit areas around elements to trigger actions before the user actually hovers over the element itself."
          icon="🎯"
        />
        <FeatureCard
          title="Efficient Data Prefetching"
          description="Save bandwidth by only prefetching what users will actually need, instead of loading everything in the viewport like traditional approaches."
          icon="🔋"
        />
      </div>
      <DemoWrapper />
    </div>
  )
}
