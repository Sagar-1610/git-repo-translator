import React from "react";

const HomePage = () => {
  return (
    <div>
      <h1>THIS IS HOMEPAGE</h1>
      <p>
        Fruits are the means by which angiosperms disseminate their seeds.
        Edible fruits in particular have long propagated using the movements of
        humans and other animals in a symbiotic relationship that is the means
        for seed dispersal for the one group and nutrition for the other;
        humans, and many other animals, have become dependent on fruits as a
        source of food.[1] Consequently, fruits account for a substantial
        fraction of the world's agricultural output, and some (such as the apple
        and the pomegranate) have acquired extensive cultural and symbolic
        meanings.
      </p>
      <p>123456789</p>
      <p>contact us on :--- kapil123@gmail.com</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{position:'relative'}}>
          <div style={{position:'absolute',zIndex:'1'}}>
            <img
              src="https://webartsmileystorage.s3.ap-south-1.amazonaws.com/Uploaded_1734351664180.jpeg"
              alt=""
              style={{ width: "400px", height: "300px" }}
            />
          </div>
          <div style={{ position: "absolute",zIndex:'2'}}>
            <p
              style={{
               backgroundColor:'white',
               width:'400px',
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
               
              }}
            >
              THIS IS TOY TRAIN
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
