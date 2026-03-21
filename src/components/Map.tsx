import React from 'react';

const Map: React.FC = () => {
  return (
    <main>
    <div className="map-container h-64 md:h-80 lg:h-96">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14904.330305163488!2d79.40678!3d13.6243132!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4ba6bd5a7865%3A0xe747d5a344408872!2sJB%20All%20India%20Packers%20And%20Movers!5e1!3m2!1sen!2sin!4v1718590262869!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Sri Tejaswini packers and movers Location"
      ></iframe>
    </div>
    </main>
  );
};

export default Map;
