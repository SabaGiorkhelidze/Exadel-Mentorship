import Image from '../../assets/testimage.png'
import StarRating from '../StarRating/StarRating'

interface propTypes {
  src: string,
  alt: string,
  discount?: string
}

function ImageWithDiscount({ src, alt, discount }: propTypes) {
  return (
    <figure className="flex flex-col flex-1 text-xs leading-5 whitespace-nowrap text-neutral-50">
      <div className="justify-center w-12 px-3 py-1 bg-red-500 rounded">{discount}</div>
      <img loading="lazy" src={src} alt={alt} className="self-end mt-3 max-w-full aspect-[1.14] w-[172px]" />
    </figure>
  );
}

function SmallImage({ src, alt }: propTypes) {
  return <img loading="lazy" src={src} alt={alt} className="aspect-square w-[34px]" />;
}

const ItemCard = () => {
  return (
    <section className="flex flex-col max-w-[270px]">
      <header className="flex gap-1 justify-between px-3 pt-3 pb-12 rounded bg-neutral-100">
        <ImageWithDiscount src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2d788609d8bc670dbbe5cf8dedec944c2b7289967d8892eadc0892071d8e85d?apiKey=c82433f1df254b9f8277cbf4d6fdc4cd" alt="Discounted Gamepad" discount="-40%" />
        <aside className="flex flex-col items-center self-start basis-0">
          <SmallImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/00d93adab53c5214ab1a164999c542db25c2e68622e0085e7c9140fbeae9a9e5?apiKey=c82433f1df254b9f8277cbf4d6fdc4cd&" alt="Gamepad Detail" />
          <SmallImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/92f95af307a693492ef165c4482565d88008392560df9e3855fc15ed6903d028?apiKey=c82433f1df254b9f8277cbf4d6fdc4cd&" alt="Gamepad Detail 2" />
        </aside>
      </header>
      <h2 className="mt-4 w-full text-base font-medium leading-6 text-black">HAVIT HV-G92 Gamepad</h2>
      <div className="flex gap-3 justify-between pr-5 mt-2 text-base font-medium leading-6 whitespace-nowrap">
        <div className="text-red-500">$120</div>
        <div className="flex-auto text-black">$160</div>
      </div>
      <div className="flex gap-2 justify-between pr-5 mt-2 text-sm font-semibold leading-5 text-black whitespace-nowrap">
        
        <StarRating />
      </div>
    </section>
  );
}

export default ItemCard