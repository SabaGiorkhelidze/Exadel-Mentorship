import React from 'react';

interface FeatureCardPropTypes {
    imageUrl: string,
    imageAlt: string,
    title: string,
    description: string
}
const FeatureCard = ({ imageUrl, imageAlt, title, description }: FeatureCardPropTypes) => {
    return (
        <section className="flex flex-col w-full md:w-[33%] items-center text-center p-4">
            <img loading="lazy" src={imageUrl} alt={imageAlt} className="w-20 mx-auto aspect-square" />
            <h3 className="mt-6 text-xl font-semibold leading-7">{title}</h3>
            <p className="mt-2 text-sm leading-5">{description}</p>
        </section>
    );
};

const FeatureSection = () => {
    const features = [
        {
            imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/211c992e14c09aea19be7009fdc7473ce5fb4b50770e688cda624a8178797ac3?apiKey=c82433f1df254b9f8277cbf4d6fdc4cd&",
            imageAlt: "FREE AND FAST DELIVERY",
            title: "FREE AND FAST DELIVERY",
            description: "Free delivery for all orders over $140"
        },
        {
            imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/110f2571fad6945df022b43cdd7d1827433d4b0c2955fcce1027458e36143a2f?apiKey=c82433f1df254b9f8277cbf4d6fdc4cd&",
            imageAlt: "24/7 CUSTOMER SERVICE",
            title: "24/7 CUSTOMER SERVICE",
            description: "Friendly 24/7 customer support"
        },
        {
            imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/3c1be3f37cdea8175ea2ee7a50fd0510114f5e02888e1167452b59c532555006?apiKey=c82433f1df254b9f8277cbf4d6fdc4cd&",
            imageAlt: "MONEY BACK GUARANTEE",
            title: "MONEY BACK GUARANTEE",
            description: "We return money within 30 days"
        },
    ];

    return (
        <div className="flex flex-row justify-center gap-4  mx-auto my-10">
            {features.map((feature, index) => (
                <FeatureCard
                    key={index}
                    imageUrl={feature.imageUrl}
                    imageAlt={feature.imageAlt}
                    title={feature.title}
                    description={feature.description}
                />
            ))}
        </div>
    );
};

export default FeatureSection;