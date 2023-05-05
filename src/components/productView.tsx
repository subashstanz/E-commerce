import { product } from "data/product"
import React from "react"

const IMAGE_PROPERTIES = "aspect-square w-full rounded-xl object-cover"

const ProductView = ({ setOnSHowProduct }: any) => {
  return (
    <section>
      <div className="relative mx-auto max-w-screen-xl px-4 py-8">
        <div onClick={() => setOnSHowProduct(false)} className="inline-flex  mb-2 h-12 w-12 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180">
          <span className="sr-only">Prev Page</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </div>
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
            <picture className={IMAGE_PROPERTIES}>
              <source className={IMAGE_PROPERTIES} srcSet={product.primaryImage?.webpImages?.lImage} type="image/webp" />
              <source className={IMAGE_PROPERTIES} srcSet={product?.primaryImage?.jpegImages?.lImage} type="image/jpeg" />
              <img className={IMAGE_PROPERTIES} src={product.primaryImage?.jpegImages?.lImage} alt={product.name} />
            </picture>

            <div className="grid grid-cols-2 gap-4 lg:mt-4">
              <picture className={IMAGE_PROPERTIES}>
                <source className={IMAGE_PROPERTIES} srcSet={product.primaryImage?.webpImages?.lImage} type="image/webp" />
                <source className={IMAGE_PROPERTIES} srcSet={product?.primaryImage?.jpegImages?.lImage} type="image/jpeg" />
                <img className={IMAGE_PROPERTIES} src={product.primaryImage?.jpegImages?.lImage} alt={product.name} />
              </picture>

              <picture className={IMAGE_PROPERTIES}>
                <source className={IMAGE_PROPERTIES} srcSet={product.primaryImage?.webpImages?.lImage} type="image/webp" />
                <source className={IMAGE_PROPERTIES} srcSet={product?.primaryImage?.jpegImages?.lImage} type="image/jpeg" />
                <img className={IMAGE_PROPERTIES} src={product.primaryImage?.jpegImages?.lImage} alt={product.name} />
              </picture>

              <picture className={IMAGE_PROPERTIES}>
                <source className={IMAGE_PROPERTIES} srcSet={product.primaryImage?.webpImages?.lImage} type="image/webp" />
                <source className={IMAGE_PROPERTIES} srcSet={product?.primaryImage?.jpegImages?.lImage} type="image/jpeg" />
                <img className={IMAGE_PROPERTIES} src={product.primaryImage?.jpegImages?.lImage} alt={product.name} />
              </picture>

              <picture className={IMAGE_PROPERTIES}>
                <source className={IMAGE_PROPERTIES} srcSet={product.primaryImage?.webpImages?.lImage} type="image/webp" />
                <source className={IMAGE_PROPERTIES} srcSet={product?.primaryImage?.jpegImages?.lImage} type="image/jpeg" />
                <img className={IMAGE_PROPERTIES} src={product.primaryImage?.jpegImages?.lImage} alt={product.name} />
              </picture>
            </div>
          </div>

          <div className="sticky top-0">
            <strong className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600">Pre Order</strong>

            <div className="mt-8 flex justify-between">
              <div className="max-w-[35ch] space-y-2">
                <h1 className="text-xl font-bold sm:text-2xl">{product.name}</h1>

                <p className="text-sm">{product?.sareeFabric}</p>

                <div className="-ms-0.5 flex">
                  <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg className="h-5 w-5 text-gray-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>

              <p className="text-lg font-bold">{`Rs.${product.listingPrice}`}</p>
            </div>

            <div className="mt-4">
              <div className="prose max-w-none">
                <p>{JSON.parse(product?.description)}</p>
              </div>

              <button className="mt-2 text-sm font-medium underline">Read More</button>
            </div>

            <form className="mt-8">
              <fieldset className="mt-4">
                <legend className="mb-1 text-sm font-medium">Size</legend>

                <div className="flex flex-wrap gap-1">
                  <label className="cursor-pointer">
                    <input type="radio" name="size" id="size_xs" className="peer sr-only" />

                    <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">XS</span>
                  </label>

                  <label className="cursor-pointer">
                    <input type="radio" name="size" id="size_s" className="peer sr-only" />

                    <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">S</span>
                  </label>

                  <label className="cursor-pointer">
                    <input type="radio" name="size" id="size_m" className="peer sr-only" />

                    <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">M</span>
                  </label>

                  <label className="cursor-pointer">
                    <input type="radio" name="size" id="size_l" className="peer sr-only" />

                    <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">L</span>
                  </label>

                  <label className="cursor-pointer">
                    <input type="radio" name="size" id="size_xl" className="peer sr-only" />

                    <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">XL</span>
                  </label>
                </div>
              </fieldset>

              <div className="mt-8 flex gap-4">
                <div>
                  <label className="sr-only">Qty</label>

                  <input
                    type="number"
                    id="quantity"
                    min="1"
                    value="1"
                    className="w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                  />
                </div>

                <button type="submit" className="block rounded bg-[#ff527b] px-5 py-3 text-xs font-medium text-white hover:bg-green-500">
                  Add to Cart
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductView
