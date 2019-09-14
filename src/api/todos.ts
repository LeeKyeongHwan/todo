import firebase from 'firebase'

const ToDoCollection = firebase.firestore().collection('todo')

export const post = (data: object) => {
  return new Promise((resolve, reject) => {
    ToDoCollection
      .add(data)
      .then(ref => {
        resolve()
      })
  })
}

export const getAll = () => {
  return new Promise((resolve, reject) => {
    ToDoCollection.orderBy('date', 'desc')
      .get().then(querySnapshot => {
        let data:Array<any> = []
        querySnapshot.forEach((doc) => {
          data.push({
            id: doc.id,
            ...doc.data()
          })
        })
        resolve(data)
      })
  })
}
