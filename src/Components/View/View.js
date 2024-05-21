import React,{useContext,useEffect,useState} from 'react';
import { FirebaseContext } from '../../store/FirebaseContext';
import { PostContext } from '../../store/PostContext';
import firebase from 'firebase';

import './View.css';
function View() {
  const [userDetails,setUserDetails]=useState();
  const {postDetails}=useContext(PostContext);
  useEffect(()=>{
    const {userid}=postDetails;
    firebase.firestore().collection('users').where('id','==',userid).get().then((res)=>{
      res.forEach(doc => {
        setUserDetails(doc.data());
    });
    })
  },[])
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9;{postDetails.price}</p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdOn}</span>
        </div>
        {userDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>
        }
      </div>
    </div>
  );
}
export default View;
