import app from './firebaseService'
import { getAnalytics, logEvent } from 'firebase/analytics'

const analytics = getAnalytics(app)

const LogCustomEvent = (eventName) => {
    logEvent(analytics, eventName)
}

export { LogCustomEvent }
