export default function HeroBanner({ image }: { image: string }) {
  return (
    <div className="overflow-hidden rounded-lg">
      <img
        src={image}
        alt=""
        className="h-48 w-full object-cover laptop:h-64"
      />
    </div>
  );
}
