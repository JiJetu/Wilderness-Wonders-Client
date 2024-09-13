import image1 from "../../assets/images/camper-1.jpg";
import image2 from "../../assets/images/camper-3.jpg";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Md Jaoadul Islam",
      role: "Project Manager",
      photo:
        "https://scontent.fdac165-1.fna.fbcdn.net/v/t39.30808-6/447199919_2414393628951357_4266480113932234768_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHvwMXMGc9HRM4Q1KknKa6lg2akRaXlFC-DZqRFpeUUL4J0Vc-JdlZDO-zOiGKPQJT502HNREPQa0ioAZob6rHH&_nc_ohc=U_k5I4qcGVUQ7kNvgEr1cq6&_nc_ht=scontent.fdac165-1.fna&oh=00_AYDDl_eF9L0orLX1oPzDcsCdyJhFqHKPYYyJ8MsxgjTxvw&oe=66E639DA",
      bio: "Jaoad has over 10 years of experience in project management, specializing in delivering high-quality projects on time and within budget.",
      aos: "flip-left",
      duration: 2500,
    },
    {
      name: "John Smith",
      role: "Lead Developer",
      photo:
        "https://img.pikbest.com/photo/20240626/portrait-of-a-happy-young-employee-sits-at-his-desk-in-modern-office-setting_10637689.jpg!f305cw",
      bio: "John is a passionate developer with expertise in full-stack development and a knack for solving complex technical challenges.",
      aos: "zoom-in",
      duration: 2000,
    },
    {
      name: "Emily Johnson",
      role: "UX Designer",
      photo:
        "https://img.freepik.com/free-photo/blue-eyed-business-woman-white-blouse-standing-confident-pose-with-her-international-co-workers-indoor-portrait-asian-african-employees-with-blonde-lady_197531-3756.jpg",
      bio: "Emily is a creative UX designer with a keen eye for detail and a commitment to crafting intuitive and user-friendly interfaces.",
      aos: "flip-right",
      duration: 2500,
    },
  ];

  return (
    <div className="p-8">
      <section className="mb-8 md:flex items-center gap-8">
        <div className="md:w-[30%]">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <div className="space-y-4">
            <p className="text-base">
              <strong>Phone:</strong> (++880) 125555555
            </p>
            <p className="text-lg">
              <strong>Email:</strong> contact@wildernesswonders.com
            </p>
            <p className="text-lg">
              <strong>Address:</strong> 1361, Dhaka, Bangladesh
            </p>
            <div className="flex gap-4">
              <a href="https://x.com/CampersShop">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a href="https://www.youtube.com/CampersShop">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a href="https://www.facebook.com/CampersShop">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1">
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
      </section>
      <section>
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 md:pr-4 mb-6">
            <img src={image1} alt="Hotel Image" className="w-full rounded-md" />
          </div>
          <div className="w-full md:w-1/2">
            <p className="mb-6 text-base">
              Welcome to Campers Shop, your ultimate destination for all things
              camping and outdoor adventure! Our journey began with a simple
              goal: to provide adventurers like you with the best gear and
              essentials to make every outdoor experience unforgettable.
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
              we do. Thank you for being a part of the Campers Shop community.
              We’re excited to support your outdoor journeys and help you
              discover the wonders of the wild!
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
              At Campers Shop, we are passionate about the great outdoors and
              committed to delivering top-quality products that enhance your
              adventures. We offer a curated selection of tents, backpacks,
              sleeping bags, and other camping essentials, carefully chosen to
              meet the needs of both seasoned explorers and those new to the
              wilderness.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 md:bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="card bg-white md:shadow-md rounded-lg p-6"
                data-aos={member.aos}
                data-aos-duration={`${member.duration}`}
              >
                <div className="flex items-center justify-center mb-4">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center">
                  {member.name}
                </h3>
                <p className="text-center text-gray-600">{member.role}</p>
                <p className="mt-2 text-gray-700 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
