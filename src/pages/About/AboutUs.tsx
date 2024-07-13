import image1 from "../../assets/images/camper-1.jpg";
import image2 from "../../assets/images/camper-3.jpg";

const AboutUs = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">
        About <span className="text-cyan-500">Wilderness Wonders</span>
      </h1>
      <div className="mb-8 md:flex items-center gap-8">
        <div className="w-[30%]">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <div className="space-y-4">
            <p className="text-lg">
              <strong>Phone:</strong> (++880) 125555555
            </p>
            <p className="text-lg">
              <strong>Email:</strong> contact@wildernesswonders.com
            </p>
            <p className="text-lg">
              <strong>Address:</strong> 1361, Dhaka, Bangladesh
            </p>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-4">Find Us</h2>
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.598219038972!2d90.40165451498164!3d23.780622584566267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7354e8e7439%3A0x1e589d8c64a272e3!2s1361%2C%20Dhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1650938738905!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 md:pr-4 mb-6">
            <img src={image1} alt="Hotel Image" className="w-full rounded-md" />
          </div>
          <div className="w-full md:w-1/2">
            <p className="mb-6 text-base">
              Welcome to Wilderness Wonders, your ultimate destination for all
              things camping and outdoor adventure! Our journey began with a
              simple goal: to provide adventurers like you with the best gear
              and essentials to make every outdoor experience unforgettable.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 md:pr-4 mb-6">
            <img
              src="https://i.ibb.co/GshkwkW/roberto-nickson-He1-Gpj661-Vg-unsplash.jpg" // Add the URL of your history image
              alt="History Image"
              className="w-full rounded-md"
            />
            <h2 className="text-2xl font-bold mb-2">Our History</h2>
            <p className="mb-6 text-base">
              We believe in the transformative power of nature and the
              importance of responsible outdoor practices. Our commitment to
              sustainability and respect for the environment guides everything
              we do. Thank you for being a part of the Wilderness Wonders
              community. We’re excited to support your outdoor journeys and help
              you discover the wonders of the wild!
            </p>
          </div>
          <div className="w-full md:w-1/2 md:pl-4 mb-6">
            <img
              src={image2}
              alt="Mission Image"
              className="w-full rounded-md"
            />
            <h2 className="text-2xl font-bold mb-2">Our Values</h2>
            <p className="mb-6 text-base">
              At Wilderness Wonders, we are passionate about the great outdoors
              and committed to delivering top-quality products that enhance your
              adventures. We offer a curated selection of tents, backpacks,
              sleeping bags, and other camping essentials, carefully chosen to
              meet the needs of both seasoned explorers and those new to the
              wilderness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
