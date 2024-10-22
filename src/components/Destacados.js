import React from "react";

const Destacados = () => {
  const videos = [
    {
      id: 1,
      src: "/images/video.mp4",
    },
    {
      id: 2,
      src: "/images/video.mp4", 
    },
    {
      id: 3,
      src: "/images/video.mp4", 
    },
  ];

  return (
    <section className="p-8 bg-gray-100">
         <h2 id="destacados" className="bg-gradient-to-r from-[#4ec4f7] to-[#009ce6] bg-clip-text text-transparent text-lg font-bold text-center">
          Destacados
        </h2>
      <h2 className="text-3xl font-bold text-center mb-6">Videos Destacados</h2>
      <div className="flex flex-col md:flex-row gap-6 justify-center">
        {videos.map((video) => (
          <div key={video.id} className="flex flex-col items-center">
            <video
              className="w-full h-72 md:h-[720px] rounded-lg shadow-md object-cover"
              muted
              preload="auto"
              onMouseEnter={(e) => e.currentTarget.play()}
              onMouseLeave={(e) => e.currentTarget.pause()}
              src={video.src}
            >
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destacados;
