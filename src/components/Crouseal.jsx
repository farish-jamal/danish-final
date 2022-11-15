import React from "react";
import first from "../assests/1 (1).jpeg";
import second from "../assests/1 (2).jpeg";
import third from "../assests/1 (5).jpeg";
import Cards from "./Cards";

function Crouseal() {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="false"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={first}
              class="d-block w-100"
              alt="..."
              style={{ height: "500px" }}
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={second}
              class="d-block w-100"
              alt="..."
              style={{ height: "500px" }}
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={third}
              class="d-block w-100"
              alt="..."
              style={{ height: "500px" }}
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container">
        <h1 className="text-center my-4">What's Make Us Diffrent</h1>
        <div className="container d-flex align-items-center justify-content-center">
          <Cards
            title="Grow as a photographer"
            description="Get immediate exposure with your first upload. Our Pulse algorithm surfaces new photographs and photographers, ensuring your photos are seen by the community so you receive valuable feedback on day one."
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRIbf3fQeutTVrKBLnGGoP6hEeINtibZ4v8iJrV2WT&s"
          />
          <Cards
            title="Build your career"
            description="Market yourself as a professional photographer. Show that you’re available for hire on your Profile and get discovered in Search results, showcase your articles, presents, videos, and more with Resources."
            src="https://res.cloudinary.com/monday-blogs/fl_lossy,f_auto,q_auto/wp-blog/2021/07/performance-management-process.jpg"
          />
          <Cards
            title="See how you're performing"
            description="With Statistics and Pulse you get valuable insights into how your photos are performing and how you rank in comparison to other photographers in the community.Showcase your articles, presents"
            src="https://www.simplilearn.com/ice9/free_resources_article_thumb/All_You_Need_to_Know_About_Employee_Performance_Review_and_Appraisal.jpg"
          />
          <Cards
            title="Show your work"
            description="Earn one of the highest royalty rates in the industry when you distribute your photography through 500px to a global marketplace, where buyers can view and purchase your work for commercial usage."
            src="https://images.shiksha.com/mediadata/images/articles/1568193656phpmWI2xq.jpeg"
          />
        </div>
      </div>
      <div className="container mt-4">
        <h1 className="text-center">The best of the best.</h1>
        <p className="text-center">
          Our editors are always on the lookout for jaw dropping content for you
          to discover and stay inspired. Check back weekly to see what’s new.
        </p>
        <p className="text-center">
          <a
            href="/hello"
            className="btn btn-secondary"
            style={{ "text-align": "center" }}
          >
            See Gallery
          </a>
        </p>
        <div className="d-flex align-items-center justify-content-center flex-wrap">
          <img
            src={first}
            className="mx-2 my-2"
            alt="..."
            style={{ width: "300px" }}
          />
          <img
            src={first}
            className="mx-2 my-2"
            alt="..."
            style={{ width: "300px" }}
          />
          <img
            src={first}
            className="mx-2 my-2"
            alt="..."
            style={{ width: "300px" }}
          />
          <img
            src={first}
            className="mx-2 my-2"
            alt="..."
            style={{ width: "300px" }}
          />
          <img
            src={first}
            className="mx-2 my-2"
            alt="..."
            style={{ width: "300px" }}
          />
          <img
            src={first}
            className="mx-2 my-2"
            alt="..."
            style={{ width: "300px" }}
          />
        </div>
      </div>
      <div className="container mt-4">
        <h1 className="text-center">Discover something new</h1>
        <p className="text-center">
          Browse videos, articles, workshops, and presets from 500px users to
          discover new areas of photography and grow your skills. Become a Pro
          member to list your Resources in the Hub.
        </p>
        <p className="text-center">
          <a
            href="/hello"
            className="btn btn-secondary"
            style={{ "text-align": "center" }}
          >
            See Blogs
          </a>
        </p>
        <div className="d-flex align-items-center justify-content-center flex-wrap">
          <div class="card mx-2" style={{ width: "18rem" }}>
            <img
              src="https://dvyvvujm9h0uq.cloudfront.net/com/articles/1572946445-commercial-photography1.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">
                Learn about the process that I used to capture
              </h5>
              <p class="card-text">
                500px Brand Ambassador. Travel photographer based in Boise,
                Idaho. Specializing in lifestyle, landscape, and commercial
                photography.
              </p>
              <a href="#" class="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
          <div class="card mx-2" style={{ width: "18rem" }}>
            <img
              src="https://dvyvvujm9h0uq.cloudfront.net/com/articles/1572946445-commercial-photography1.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">
                Learn about the process that I used to capture
              </h5>
              <p class="card-text">
                500px Brand Ambassador. Travel photographer based in Boise,
                Idaho. Specializing in lifestyle, landscape, and commercial
                photography.
              </p>
              <a href="#" class="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
          <div class="card mx-2" style={{ width: "18rem" }}>
            <img
              src="https://dvyvvujm9h0uq.cloudfront.net/com/articles/1572946445-commercial-photography1.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">
                Learn about the process that I used to capture
              </h5>
              <p class="card-text">
                500px Brand Ambassador. Travel photographer based in Boise,
                Idaho. Specializing in lifestyle, landscape, and commercial
                photography.
              </p>
              <a href="#" class="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="mt-4"
        style={{ background: "purple", padding: "30px 50px", color: "white" }}
      >
        <div className="container">
          <h1 className="text-center">Join our community today</h1>
          <p className="text-center">
            Do you love photography? Want to constantly stay inspired and be
            surrounded by millions of like-minded creators? Then sign-up today
            and get rewarded for your love of photography.
          </p>
        </div>
        <div className="icons d-flex justify-content-center align-items-center">
            <i class="fa-brands fa-google-plus-g"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-facebook"></i>
        </div>
      </div>
    </div>
  );
}

export default Crouseal;
