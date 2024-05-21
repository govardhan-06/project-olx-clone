import React, { Fragment, useContext, useState} from 'react';
import './Create.css';
import firebase from 'firebase';
import Header from '../Header/Header';
import { FirebaseContext,AuthContext } from '../../store/FirebaseContext';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Create = () => {
  const {user}=useContext(AuthContext);
  const [name,setName]=useState('');
  const [category,setCategory]=useState('');
  const [price,setPrice]=useState('');
  const [image,setImage]=useState(null);
  const date=new Date();
  const history=useHistory();

  const handleSubmit=(e)=>{
    e.preventDefault();
    firebase.storage().ref(`/image/${image.name}`).put(image).then((snapshot)=>{
      snapshot.ref.getDownloadURL().then((url)=>{
        console.log(user)
        firebase.firestore().collection('products').add({
          name,
          category,
          url,
          createdOn:date.toDateString(),
          userid:user.uid,
          price
        }).then(()=>{
          history.push("/")
        })
      })
    })
  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              value={name}
              onChange={(e)=>{
                setName(e.target.value);
              }}
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              value={category}
              onChange={(e)=>{
                setCategory(e.target.value);
              }}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" name="Price" 
            value={price}
            onChange={(e)=>{
              setPrice(e.target.value);
            }}
            />
            <br />
          </form>
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image):""}></img>
          <form>
            <br />
            <input type="file" onChange={(e)=>{
              setImage(e.target.files[0]);
            }}/>
            <br />
            <button className="uploadBtn" onClick={handleSubmit}>upload and Submit</button>
          </form>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
