'use client'
import React, { useEffect, useState } from 'react'
import { getFirestore, collection, getDoc, doc, getDocs } from 'firebase/firestore'
import app from '../shared/firebaseConfig'
import { UserInfo } from '../components'

const Profile = ({ params }) => {

  const [userInfo, setUserInfo] = useState();
  const db = getFirestore(app);

  useEffect(() => {
    const getUserInfo = async () => {
      let docId;
  
      const querySnapshot = await getDocs(collection(db, 'users'));
      querySnapshot.forEach(doc => {
        docId = doc.id;
      })
  
      const docRef = doc(db, "users", docId);
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        setUserInfo(docSnap.data());
      } else {
        console.log("No such document!");
      }
    }
    
    getUserInfo(params.userid.replace("%40", "@"))
  }, [db, params])


  return (
    <div>
      {userInfo &&
        <UserInfo 
          userInfo={userInfo} 
        /> 
      }
    </div>
  )
}

export default Profile