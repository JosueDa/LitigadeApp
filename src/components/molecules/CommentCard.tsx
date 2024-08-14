import React from 'react';
import StarRating from '../Atoms/StarRating';

type CommentCardProps = {
  title: string;
  name: string;
  image: string;
  rating: number;
  comment: string;
};

const CommentCard: React.FC<CommentCardProps> = ({ title, name, image, rating, comment }) => {
  return (
    <div className="m-4 p-6 bg-white border border-gray-200 rounded-lg shadow transform transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105">
      <StarRating rating={rating} />
      <p className="pt-4 pb-4 font-semibold text-bold-600">{comment}</p>

      <div className="flex items-center mt-4">
        <img 
          src={image} 
          alt={name} 
          className="w-12 h-12 rounded-full mr-4  object-cover"
        />
        <div>
          <p className="text-custom-gold font-semibold">{name}</p>
          <p className="font-bold ">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
