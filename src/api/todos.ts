import firebase from 'firebase'

const ToDoCollection = firebase.firestore().collection('todo')

export const POST = (data: object) => {
  return new Promise((resolve, reject) => {
    ToDoCollection
      .add(data)
      .then(ref => {
        resolve()
      })
  })
}

export const GET_ALL = () => {
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

export const DELETE = (id: string) => {
  return new Promise((resolve, reject) => {
    ToDoCollection.doc(id).delete()
      .then(querySnapshot => {
        resolve()
      })
  })
}
