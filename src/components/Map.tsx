import React from 'react';

const Map: React.FC = () => {
  return (
    <main>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1201.645544428448!2d79.41493236029346!3d13.614547155513051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1sen!2sin!4v1774864468072!5m2!1sen!2sin"
          width="100%"
          height="450"
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
