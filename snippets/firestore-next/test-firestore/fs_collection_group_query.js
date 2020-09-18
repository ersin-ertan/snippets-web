// This snippet file was generated by processing the source file:
// ./firestore-next/test.firestore.js
//
// To make edits to the snippets in this file, please edit the source

// [START fs_collection_group_query_modular]
import { collectionGroup, query, where, getDocs } from "firebase/firestore";  

const museums = query(collectionGroup(db, 'landmarks'), where('type', '==', 'museum'));
const querySnapshot = await getDocs(museums);
querySnapshot.forEach((doc) => {
    console.log(doc.id, ' => ', doc.data());
});
// [END fs_collection_group_query_modular]