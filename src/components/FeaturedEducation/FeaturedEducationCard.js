import React from 'react';
import './FeaturedEducationCard.css';
import { FaRegUser, FaClock } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';


const FeaturedEducationCard = ({ image, title, instructor, level, levelClass, students, duration, rating, reviews }) => {
    const renderStars = () =>
        Array(5).fill(0).map((_, i) => (
            <AiFillStar key={i} className="featured-star" style={{ color: i < Math.round(rating) ? '#f7b500' : '#e0e0e0' }} />
        ));

    return (
        <div className="featured-card">
            <div className="featured-image-box">
                <img src={image} alt={title} className="featured-image" />
            </div>
            <div className={`featured-level ${levelClass}`}>{level}</div>
            <div className="featured-content">
                <div className="featured-rating">
                    <div className="featured-stars">{renderStars()}</div>
                    <span>{rating.toFixed(1)}</span>
                    <span className="featured-reviews">({reviews} Yorum)</span>
                </div>
                <h3 className="featured-title-text">{title}</h3>
                <p className="featured-instructor">{instructor}</p>
            </div>
            <div className="featured-info-box">
                <div className="featured-info-item"><FaRegUser /> {students}</div>
                <div className="featured-info-item"><FaClock /> {duration}</div>
            </div>
        </div>
    );
};

export default FeaturedEducationCard;
