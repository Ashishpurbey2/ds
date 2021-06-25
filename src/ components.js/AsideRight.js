import React from "react";

import Modal from "react-modal";
import axios from "axios";

import { useState, useEffect } from "react";
Modal.setAppElement("#root");
const AsideRight = () => {
  const [imgsrc, SetImage] = useState({});
  const [width, setWidth] = useState(window.innerWidth - 90);
  const [modalisOpen, setmodalisOpen] = useState(false);
  const [width1, setWidth1] = useState(window.innerWidth - 90);
  function myFunction() {
    setWidth(window.innerWidth - 90);
    setWidth1(window.innerWidth - 90);
    console.log("heeh", width1, width);
  }

  const [newUser, setNewUser] = useState({
    name: "",
    birthdate: "",
    photo: "",
  });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("photo", newUser.photo);

  //   axios
  //     .post("http://localhost:3000/users/add/", formData)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // const handlePhoto = (e) => {
  //   setNewUser({ ...newUser, photo: e.target.files[0] });
  // };

  const fileOnChange = (event) => {
    SetImage(event.target.files[0]);
  };

  const sendImage = (event) => {
    let formData = new FormData();

    formData.append("image", imgsrc);

    fetch("http://localhost:3000/uploadFile", {
      method: "post",
      body: formData,
    })
      .then((res) => res.text())
      .then((resBody) => {
        console.log(resBody);
      });
  };

  function imageRender() {
    for (var i = 0; i < imgsrc.length; i++) {
      return (
        <img
          style={{
            position: "relative",
            top: "10%",
            width: "60%",
            left: "20%",
          }}
          src={URL.createObjectURL(imgsrc[i])}
        />
      );
    }
  }
  window.onresize = myFunction;
  return (
    <div
      style={{
        width: "80px",
        height: "100vh",
        backgroundColor: "#F5F5F5",
        marginTop: "85px",
        position: "fixed",
        left: `${width + "px"}`,
        zIndex: "1000",
      }}
      className="asideRight"
    >
      <div>
        <img src="./images/img4.png" onClick={() => setmodalisOpen(true)}></img>
        <p>Templates</p>
      </div>
      <div>
        <img src="./images/img4.png" onClick={() => setmodalisOpen(true)}></img>
        <p className="extraMargin">uploads</p>
      </div>
      <div>
        <img
          src="./images/Picture@1X.png"
          onClick={() => setmodalisOpen(true)}
        ></img>
        <p className="extraMargin">Pictures</p>
      </div>
      <div>
        <img
          src="./images/Videos@1X.png"
          onClick={() => setmodalisOpen(true)}
        ></img>
        <p className="extraMargin">Videos</p>
      </div>
      <div>
        <Modal
          isOpen={modalisOpen}
          onRequestClose={() => setmodalisOpen(false)}
          style={{
            overlay: {
              backgroundColor: "transparent",
              zIndex: "10000",
            },
            content: {
              display: "absolute",
              position: "fixed",
              color: "orange",
              backgroundColor: "rgb(245,245,245)",
              left: { width1 },
              bottom: "0px",
              width: "300px",
              marginRight: "35px",
              top: "82px",
            },
          }}
        >
          <br />

          <center>
            <label
              class="custom-file-upload"
              style={{
                borderRadius: "15px",
                width: "0rem",
                backgroundColor: "white",
                border: "2px solid black",
                color: "black",
                padding: "5%",
              }}
              onChange={(e) => {
                console.log(e.target.files);
                SetImage(e.target.files);
              }}
            >
              <input
                type="file"
                style={{ display: "none" }}
                multiple
                accept=".png, .jpg, .jpeg"
                name="photo"
                onChange={fileOnChange}
                onClick={sendImage}
              />
              Upload Media
              {/* <button style={{borderRadius:"5px", width:"10rem", backgroundColor:"white"}} Upload Media</button> */}
            </label>
          </center>

          {imgsrc !== null
            ? Array.from(imgsrc).map((src) => (
                <img
                  style={{
                    position: "relative",
                    top: "10%",
                    width: "60%",
                    left: "20%",
                  }}
                  src={URL.createObjectURL(src)}
                />
              ))
            : null}
          {/*<button onClick={() => setmodalisOpen(false)}>Close</button>*/}
        </Modal>
      </div>
    </div>
  );
};

export default AsideRight;
