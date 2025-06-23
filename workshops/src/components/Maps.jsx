import React from 'react'


const GoogleMap = () => {
    return (
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
   
            <iframe id='iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.152847546752!2d34.89351840009031!3d32.49985291477629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d0d8adf2e5d7f%3A0xbdacd6bb6c491c2c!2sGenach%20Mosaics!5e0!3m2!1siw!2sil!4v1734340204836!5m2!1siw!2sil" width="700" height="300"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
};

export default GoogleMap;




