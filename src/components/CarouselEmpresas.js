import React from "react";
import Slider from "react-slick";

const CarouselEmpresas = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const clients = [
    {
      name: "Cliente 1",
      logo: "/images/image.test5.png",
      companyName: "Godoy Poviña SA",
      companyOverview:
        "Programación de software para distribuidor de productos",
      message:
        "Se ponen en nuestros zapatos para solucionar nuestra falta de recursos.",
      stars: 5,
    },
    {
      name: "Cliente 2",
      logo: "/images/image.test5.png",
      companyName: "Empresa 2",
      companyOverview: "Accessband",
      message: "Muy recomendable.",
      stars: 4.5,
    },
    {
      name: "Cliente 3",
      logo: "/images/image.test5.png",
      companyName: "Empresa 3",
      companyOverview: "Accessband",
      message: "Excelente atención.",
      stars: 3,
    },
    {
      name: "Cliente 4",
      logo: "/images/image.test5.png",
      companyName: "Empresa 4",
      companyOverview: "Accessband",
      message: "Me encantó trabajar con ellos.",
      stars: 4,
    },
    {
      name: "Cliente 5",
      logo: "/images/image.test5.png",
      companyName: "Empresa 5",
      companyOverview: "Accessband",
      message: "Sin duda volveré.",
      stars: 2.5,
    },
  ];

  const renderStars = (rating) => {
    const filledStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    return (
      <div className="flex mb-2">
        {Array(filledStars)
          .fill()
          .map((_, index) => (
            <span key={index} className="text-access-blue">
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
              </svg>
            </span>
          ))}
        {halfStar && (
          <span className="text-access-blue">
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M13 4.024v-.005c0-.053.002-.353-.217-.632a1.013 1.013 0 0 0-1.176-.315c-.192.076-.315.193-.35.225-.052.05-.094.1-.122.134a4.358 4.358 0 0 0-.31.457c-.207.343-.484.84-.773 1.375a168.719 168.719 0 0 0-1.606 3.074h-.002l-4.599.367c-1.775.14-2.495 2.339-1.143 3.488L6.17 15.14l-1.06 4.406c-.412 1.72 1.472 3.078 2.992 2.157l3.94-2.388c.592-.359.958-.996.958-1.692v-13.6Zm-2.002 0v.025-.025Z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        )}
      </div>
    );
  };

  return (
    <div className="w-full bg-gray-100 py-12 relative">
      <div className="container mx-auto">
        <h2 id="testimonial" className="bg-gradient-to-r from-[#4ec4f7] to-[#009ce6] bg-clip-text text-transparent text-lg font-bold text-center">
          Testimonial
        </h2>
        <h2 className="text-3xl font-bold text-center mb-8">
          Clientes y Testimonios
        </h2>
        <Slider {...settings}>
          {clients.map((client, index) => (
            <div key={index} className="p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-start">
                {renderStars(client.stars)}
                <p className="text-left mt-1 text-gray-700 font-bold mb-4">
                  {client.companyOverview}
                </p>
                <p className="text-left mt-1 text-gray-600 mb-4">
                  {client.message}
                </p>
                <div className="flex flex-row items-center gap-[20px]">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-[70px] w-[70px] object-cover rounded-full mt-4" // Circular image
                  />
                  <h3 className="text-lg font-semibold mt-2">
                    {client.companyName}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CarouselEmpresas;
