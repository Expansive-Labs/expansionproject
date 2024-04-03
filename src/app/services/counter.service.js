import { get, ref } from 'firebase/database'
import { database } from '../firebaseConfig'

export const getCounter = (name = 'views') => {
  const counterRef = ref(database, name)
  get(counterRef).then((snapshot) => {
    if(snapshot.exists()) {
      return snapshot.val()
    } else {
      console.log('No data available')
    }
  }).catch((error) => {
    console.log(error)
  })
}
console.log(getCounter('views'))