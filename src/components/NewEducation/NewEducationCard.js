import React from 'react';
import './NewEducationCard.css';
import { FaRegUser, FaClock } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';

const NewEducationCard = ({ image, title, instructor, level, levelClass, students, duration, rating, reviews }) => {
    const renderStars = () => {
        return Array(5).fill(0).map((_, i) => (
            <AiFillStar
                key={i}
                className="star-icon"
                style={{ color: i < Math.round(rating) ? '#f7b500' : '#e0e0e0' }}
            />
        ));
    };

    return (
        <div className="newedu-news-card">
            <div className="newedu-image-box">
                <img src={image} alt={title} className="newedu-news-card-image" />
            </div>
            <div className={`newedu-level-badge ${levelClass}`}>{level}</div>
            <div className="newedu-news-card-content">
                <div className="newedu-rating">
                    <div className="newedu-star-list">{renderStars()}</div>
                    <span>{rating.toFixed(1)}</span>
                    <span className="newedu-reviews">({reviews} Yorum)</span>
                </div>
                <h3 className="newedu-news-card-title">{title}</h3>
                <p className="newedu-instructor">{instructor}</p>
            </div>
            <div className="newedu-info-box">
                <div className="newedu-info-item"><FaRegUser /> {students}</div>
                <div className="newedu-info-item"><FaClock /> {duration}</div>
            </div>
        </div>
    );
};

export default NewEducationCard;
