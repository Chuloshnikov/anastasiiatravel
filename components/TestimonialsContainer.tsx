import Testimonials from "./Testimonials";
import React, { useState, useEffect } from 'react';
import axios from "axios";

const TestimonialsContainer = () => {
    const [testimonials, setTestimonials] = useState<any>();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get('/api/testimonialsdata').then(response => {
            setTestimonials(response.data);
        })
    }, []);
    return (
        <>
            {testimonials && <Testimonials testimonials={testimonials}/>}
        </>
    )
}

export default TestimonialsContainer