import { ProductStyle } from "@/styles/ProductStyle";
import Link from "next/link";
export default function Product ({product}){
    //Extract the info from props
    const {title, price, image, slug} = product.attributes;
    const {url} = image.data.attributes.formats.small;
    return (
        <ProductStyle>
            <Link href={`/product/${slug}`}>
            <div>
                <img src={url} alt=""/>
            </div>
            </Link>
            <h2> {title}</h2>
            <h3> {price}</h3>
        </ProductStyle>
    );
}
