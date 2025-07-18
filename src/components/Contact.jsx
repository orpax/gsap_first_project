import React from "react";
import { socials } from "../../constant";

const Contact = () => {
  return (
    <footer id="contact">
      <div className="content mt-[10rem]">
        <h2>Where to Find Us</h2>
        <div>
          <h2>Visit Our Bar</h2>
          <p className="text-stone mt-10">
            Jalan Sunset Road Gg Kemayoran No. 12
          </p>
        </div>
        <div>
          <h2>Open Everyday</h2>
          <p className="mt-10">
            No Business Can <span className="text-lime-400">Success</span> If
            They Still Have To <span className="text-red-400">Close</span>
          </p>
          <p className="mt-5">
            Open : <span className="text-lime-400">08.00</span> -{" "}
            <span className="text-red-400">06.00</span>
          </p>
          <p className="mt-10">
            Contact Us : <span className="text-lime-400">087731764987</span>
          </p>
        </div>{" "}
        <h2 className="text-5xl">Our Social</h2>{" "}
        <div className="flex-center gap-5">
          {socials.map((social) => (
            <a href="#">
              <img src={social.icon} alt="" srcset="" className="text-6xl" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Contact;
