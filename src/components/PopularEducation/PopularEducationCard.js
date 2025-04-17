import React from 'react';
import './PopularEducationCard.css';
import { FaRegUser, FaClock } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';

const PopularEducationCard = ({ image, title, instructor, level, levelClass, students, duration, rating, reviews }) => {
    const renderStars = () => {
        return Array(5).fill(0).map((_, i) => (
            <AiFillStar
                key={i}
                className="popular-star"
                style={{ color: i < Math.round(rating) ? '#f7b500' : '#e0e0e0' }}
            />
        ));
    };
    return (
        <div className="popular-card">
            <div className="popular-image-box">
                <img src={image} alt={title} className="popular-image" />
            </div>
            <div className={`popular-level ${levelClass}`}>{level}</div>
            <div className="popular-content">
                <div className="popular-rating">
                    <div className="popular-stars">{renderStars()}</div>
                    <span>{rating.toFixed(1)}</span>
                    <span className="popular-reviews">({reviews} Yorum)</span>
                </div>
                <h3 className="popular-title-text">{title}</h3>
                <p className="popular-instructor">{instructor}</p>
            </div>
            <div className="popular-info-box">
                <div className="popular-info-item"><FaRegUser /> {students}</div>
                <div className="popular-info-item"><FaClock /> {duration}</div>
            </div>
        </div>
    );
};

export default PopularEducationCard;
