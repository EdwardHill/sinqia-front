import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();

const db = admin.firestore();


// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

export const teste = functions.firestore.document('setor_do_operador')
    .onWrite((change, context) => {
        db.doc('some/otherdoc').set({ teste: 'oi' });

    })