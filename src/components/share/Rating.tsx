type RatingProps = {
  rating: number;
};

const Rating = ({ rating }: RatingProps) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="flex items-center">
      <div className="rating">
        {stars.map((star) => (
          <input
            key={star}
            type="radio"
            className={`mask mask-star-2 ${
              star <= rating ? "bg-yellow-400" : "bg-gray-300"
            }`}
            readOnly
          />
        ))}
      </div>
    </div>
  );
};

export default Rating;
