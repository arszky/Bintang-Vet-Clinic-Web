import React from "react";
import logo from "../../component/images/logo_cropped.png";
import "./index.css";
import background from "../../component/images/header-about-us.png";

export const About = () => {
  return (
    <>
      <div className="about">
        <div className="top-about">
          <div className="top-about-title">
            <img src={background} alt="vet clinic" class="bg-image" />
            <div className="bg-img-title">
              <img src={logo} alt="vet clinic" width={400} height={214} />
              <h1> OUR VISION AND MISSION</h1>
            </div>
          </div>
        </div>
        <div className="bottom-about">
          <div className="vision-wrap">
            <h1>VISION</h1>
            <div className="visionTitle">
              <p>
                Memberikan kebahagiaan bagi semua jenis hewan, melalui pelayanan
                kesehatan hewan yang dilakukan oleh tenaga medis terbaik dengan
                ketulusan dan kasih sayang.
              </p>
            </div>
          </div>
          <div className="mission-wrap">
            <h1>MISSION</h1>
            <div className="missionTitle">
              <p>
                Memberikan pelayanan pengobatan yang berorientasi pada
                keselamatan pasien dan kepuasan pelanggan
              </p>
              <p>
                Menyediakan berbagai kebutuhan hidup hewan guna menaikkan
                kesejahteraan hewan.
              </p>
              <p>
                Melaksanakan pengabdian pada hewan terlantar yang membutuhkan
                perawatan dan pengobatan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
