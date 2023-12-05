import React, { useState } from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat, faDog } from "@fortawesome/free-solid-svg-icons";
import Carousel from "./components/Carousel";
import BusinessHours from "./components/BusinessHours";
import Navbar from "./components/Navbar";
import TypeWriter from "./components/TypeWriter";

library.add(faDog, faCat);

const images = [
  "https://media.istockphoto.com/id/664206234/photo/two-dogs-and-cat-in-the-bath.jpg?b=1&s=612x612&w=0&k=20&c=lWtq0kmUz5gv_NWjG-1lgsPaWFY-TrWQ2MnxtnpYYMI=",
  "https://media.istockphoto.com/id/1210859805/photo/funny-cat-grooming-dog-web-banner.jpg?b=1&s=612x612&w=0&k=20&c=H4TBpPvKBRaFEYTeGMCwGEov_uNOD8PIfGRVCjsya9s=",
  "https://media.istockphoto.com/id/1021301002/photo/pomeraninan-pet-groomer.jpg?b=1&s=612x612&w=0&k=20&c=TK4RPby-3VnvKw9hSCNOyYdoHcTHB_DjlE_mKpnXagY=",
  "https://images.pexels.com/photos/7224653/pexels-photo-7224653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://media.istockphoto.com/id/1364860635/photo/dog-puppy-dachshund-sitting-in-bathtub-with-yellow-plastic-duck-on-her-head-and-looks-up.jpg?b=1&s=612x612&w=0&k=20&c=n6NV2NqSBuHyuUCCIkFKx6MT8co79ugucCs9MuCACfM=",
];
function App() {
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [appointmentMessage, setAppointmentMessage] = useState("");

  const handleBookAppointment = () => {
    const appointmentModal = document.getElementById("appointmentModal");
    const modal = new window.bootstrap.Modal(appointmentModal);
    modal.show();
  };

  const handleFormSubmission = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    // Get the form values from the state
    const date = appointmentDate;
    const time = appointmentTime;
    const message = appointmentMessage;

    alert(
      `Appointment Details:\nDate: ${date}\nTime: ${time}\nMessage: ${message}`
    );

    // Clear the form values from the state
    setAppointmentDate("");
    setAppointmentTime("");
    setAppointmentMessage("");

    const appointmentModal = document.getElementById("appointmentModal");
    const modal = new window.bootstrap.Modal(appointmentModal);
    modal.hide();
  };

  return (
    <>

    <Navbar />

      <header className="masthead" id='Home'>
        <div className="container px-4 px-lg-5 h-100">
          <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-8 align-self-end">
              <h1 className="text-white font-weight-bold">
                <TypeWriter />
              </h1>
              <hr className="divider" />
            </div>
            <div className="col-lg-8 align-self-baseline">
              <p className="text-white-10 mb-5">
                Pamper your pet at our specialist spa, Ruff Cuts Pet Grooming!
                We have many years of experience in pet grooming, and we will
                ensure that your pet is in capable and caring hands. Our
                groomers are highly trained to deliver an outstanding grooming
                service, leaving your pet primped, preened, and totally relaxed.
                We offer a range of grooming choices including bathing and
                drying as well as hair cutting. Give us a call on 561-113-0001
                to arrange an appointment or simply pop into our stylish salon
                in Fort Oglethorpe.
              </p>
              <a className="text-white-75 btn btn-primary btn-xl" href="#about">
                Find Out More
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="page-section bg-primary" id="about">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="text-white-75 mt-0">We've got what you need!</h2>
              <hr className="divider divider-light" />
              <p className="text-white-75 mb-4">
                The Ruff Cuts Pet Grooming in Fort Oglethorpe is a premier pet
                grooming salon that prioritizes the care, comfort, and happiness
                of your beloved pets. With a skilled team of groomers,
                state-of-the-art facilities, and a commitment to excellence,
                they offer a range of services tailored to meet your pet's
                individual needs. Their experienced groomers ensure a gentle and
                stress-free grooming experience using high-quality products and
                modern equipment. They believe in creating a positive
                environment where both you and your pet can feel comfortable.
                Schedule an appointment today and let The Ruff Cuts Pet Grooming
                pamper your furry friend with love and exceptional grooming
                services.
              </p>
              <a
                className="text-white-75 btn btn-light btn-xl"
                href="#services"
              >
                Get Started!
              </a>
            </div>
          </div>
        </div>
      </section>

      <Carousel images={images} />

      <section className="page-section" id="services">
        <div className="container px-4 px-lg-5">
          <h2 className="text-white-75 text-center mt-0">At Your Service</h2>
          <hr className="divider" />
          <div className="row gx-4 gx-lg-5">
            <div className="col-sm-6 text-center">
              <div className="mt-5 service-container">
                <div className="mb-2">
                  <FontAwesomeIcon
                    icon="fa-solid fa-dog"
                    bounce
                    size="2xl"
                    style={{ color: "#c3ad60" }}
                  />
                </div>
                <h3 className="text-white-75 h4 mb-2">Haircut</h3>
                <p className="text-white-75 mb-0">
                  Professional pet groomers provide stylish haircuts for beloved
                  furry companions!
                </p>
                <button
                  type="button"
                  className="text-white-75 btn btn-primary btn-xl"
                  onClick={handleBookAppointment}
                >
                  Book
                </button>
              </div>
            </div>
            <div className="col-sm-6 text-center">
              <div className="mt-5 service-container">
                <div className="mb-2">
                  <FontAwesomeIcon
                    icon="fa-solid fa-cat"
                    bounce
                    size="2xl"
                    style={{ color: "#c3ad60" }}
                  />
                </div>
                <h3 className="text-white-75 h4 mb-2">Bathing</h3>
                <p className="text-white-75 mb-0">
                  Gentle bathing keeps pets clean, fresh, and happy all around.
                </p>
                <button
                  type="button"
                  className="text-white-75 btn btn-primary btn-xl"
                  onClick={handleBookAppointment}
                >
                  Book
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="modal fade"
        id="appointmentModal"
        tabIndex="-1"
        aria-labelledby="appointmentModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="appointmentModalLabel">
                Book an Appointment
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleFormSubmission}>
                <div className="mb-3">
                  <label htmlFor="appointmentDate" className="form-label">
                    Date:
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="appointmentDate"
                    value={appointmentDate}
                    onChange={(e) => setAppointmentDate(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="appointmentTime" className="form-label">
                    Time:
                  </label>
                  <input
                    type="time"
                    className="form-control"
                    id="appointmentTime"
                    value={appointmentTime}
                    onChange={(e) => setAppointmentTime(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="appointmentMessage" className="form-label">
                    Message:
                  </label>
                  <textarea
                    className="form-control"
                    id="appointmentMessage"
                    rows="4"
                    value={appointmentMessage}
                    onChange={(e) => setAppointmentMessage(e.target.value)}
                  ></textarea>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-cancel"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-book"
                    data-bs-dismiss="modal"
                  >
                    Book Appointment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <section className="page-section bg-dark text-white" id='Contact'>
        <div className="container px-4 px-lg-5 text-center">
          <h2 className="text-white-75 mb-4">
            For a pampering pet grooming experience, call 561-113-0001 to set an
            appointment today and treat your furry friend right.
          </h2>
          <a
            className="text-white-75 btn btn-light btn-xl"
            href="tel:561-113-0001"
          >
            Call Now!!!
          </a>
        </div>
      </section>

      <BusinessHours />

      <footer className="bg-light py-5">
        <div className="col text-center">
          <a role="button" className="btn btn-link" href="tel:561-213-5277">
            <i className="fa fa-phone"></i> 561-113-0001
          </a>
          <a role="button" className="btn btn-link" href="Karenro@gmail.com">
            <i className="fa fa-envelope"></i> Karenro@gmail.com
          </a>
          <a
            role="button"
            className="btn btn-link"
            href="2555 Battlegrounds Pkwy, Fort Oglethorpe, GA 30212"
          >
            <i className="fa fa-map-marker"></i> 2555 Battlegrounds Pkwy, Fort
            Oglethorpe, GA 30212
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
