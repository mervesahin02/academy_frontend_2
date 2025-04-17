import React, { useState } from "react";
import "./Category.css";

const categories = [
    { title: "Yazılım Dünyası" },
    { title: "Sistem Dünyası" },
    { title: "İşletme Dünyası" },
    { title: "Kariyer Yolu" },
    { title: "Temel Bilimler" },
    { title: "Kişisel Gelişim" },
    { title: "K12 Dünyası" },
    { title: "Tasarım Dünyası" },
    { title: "Yapay Zeka Dünyası" },
    { title: "Güvenli İnternet" },
    { title: "Regülasyon Dünyası" },
    { title: "Savunma Sanayi" },
    { title: "Kurum ve Kuruluşlar" },
];

const Category = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className="category-section">
            <div className="category-wrapper">
                <h2 className="category-title">Kategoriler</h2>

                <div className="category-container">
                    {categories.map((cat, index) => (
                        <div
                            key={index}
                            className={`category-card ${hoveredIndex !== null && hoveredIndex !== index ? "blurred" : ""}`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* İkonlar kaldırıldı */}
                            <span className={`category-name ${hoveredIndex === index ? "hovered-text" : ""}`}>
                                {cat.title}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Category;
