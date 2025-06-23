import React, { useEffect, useRef } from 'react';
import Contact from './Contact';

function BookingWidget() {
    const widgetContainerRef = useRef(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;
        script.src = "//widget.simplybook.me/v2/widget/widget.js";

        script.onload = () => {
            if (window.SimplybookWidget) {
                new window.SimplybookWidget({
                    "widget_type": "iframe",
                    "url": "https://mosaicsworkshops.simplybook.me",
                    "theme": "minimal",
                    "theme_settings": {
                        "timeline_modern_display": "as_slots",
                        "hide_company_label": "1",
                        "timeline_hide_unavailable": "1",
                        "hide_past_days": "0",
                        "timeline_show_end_time": "1",
                        "sb_base_color": "#cb8d75",
                        "btn_color_1": "darkorange",
                        "link_color": "#cb8d75",
                        "display_item_mode": "block",
                        "body_bg_color": "#808080",
                        "sb_review_image": "",
                        "dark_font_color": "#403733",
                        "light_font_color": "white",
                        "sb_company_label_color": "#aa5939",
                        "hide_img_mode": "0",
                        "sb_busy": "#c7b3b3",
                        "sb_available": "#gray"
                    },
                    "timeline": "modern",
                    "datepicker": "top_calendar",
                    "is_rtl": false,
                    "app_config": {
                        "clear_session": 0,
                        "allow_switch_to_ada": 0,
                        "predefined": []
                    },
                    "container_id": "sbw_d14v2j"
                });
            }

            // Adding style to iframe after it loads
            const iframe = document.querySelector('#sbw_d14v2j iframe');
            if (iframe) {
                iframe.style.backgroundColor = '#333333'; // שינוי צבע הרקע של ה-iframe
            }
        };

        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
        
        <div style={{ padding: '20px', minHeight: '100vh' }}>
            <p style={{position:'relative', top:'9.4vh', fontSize:'2.5vh'}}>יינתן החזר כספי מלא (פחות עמלת פאייפל) במידה ולא מימשתם את הסדנה</p>
            {/* כאן מוצג הווידג'ט */}
            <div id="sbw_d14v2j" ref={widgetContainerRef}></div>


            <Contact/>
        </div>
    );
  
}

export default BookingWidget;
