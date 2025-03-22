import React from "react";
import "./css/Services.css";
import ServiceComponent from "./ServiceComponent";
function Home() {
  return (
    <div className="services-container">
      <video autoPlay loop muted id="background-video">
        <source src="/output.mp4" type="video/mp4" />
      </video>
      <div>
      <div className="service-intro">
        <h2>What we offer...</h2>
        <p>
          Duis ut laborum ullamco et aute consectetur quis amet nulla. Ut quis
          do nostrud eiusmod minim mollit dolore cillum nisi quis sint. Occaecat
          elit laborum ullamco cillum ut amet mollit id nulla sunt eu magna.
          Veniam velit Lorem fugiat laborum minim ipsum pariatur dolore culpa
          commodo labore duis magna. Duis ut laborum ullamco et aute consectetur
          quis amet nulla.
        </p>
      </div>
      <div>
        <ServiceComponent
          title="Software Development"
          description="Custom software solutions tailored to your business needs."
          imagePath="/971.jpg"
          imageFirst={true}
        />
        <ServiceComponent
          title="Web Design"
          description="Aliqua dolor ut consequat tempor anim reprehenderit id irure eiusmod."
          imagePath="/webDesign.jpg"
          imageFirst={false}
        />
        <ServiceComponent
          title="Marketing Automation"
          description="Aliqua dolor ut consequat tempor anim reprehenderit id irure eiusmod."
          imagePath="/marketing.webp"
          imageFirst={true}
        />
        <ServiceComponent
          title="Chatbots"
          description="Aliqua dolor ut consequat tempor anim reprehenderit id irure eiusmod."
          imagePath="/chatbots.webp"
          imageFirst={false}
        />
        <ServiceComponent
          title="Newsletter Systems"
          description="Aliqua dolor ut consequat tempor anim reprehenderit id irure eiusmod."
          imagePath="/668.jpg"
          imageFirst={true}
        />
        <ServiceComponent
          title="Ket timin"
          description="Aliqua dolor ut consequat tempor anim reprehenderit id irure eiusmod."
          imagePath="/dindong.webp"
          imageFirst={false}
        />
      </div>
    </div>
    </div>
  );
}

export default Home;
