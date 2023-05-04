import { collections } from "data/collection"
import React from "react"

const ProductListing = () => {
  return (
    <div className="bg-gray-100 h-[100vh] w-full">
      <div className="w-full flex justify-end items-center bg-gray-50 h-[5rem] bg- flex">
        <input type="email" id="UserEmail" placeholder="john@rhcp.com" className="mt-1 pl-2 mr-3 h-10 w-64 rounded-md border-gray-200 shadow-sm sm:text-sm" />
      </div>
      <div className="px-5 grid grid-cols-2 md:grid-cols-4 gap-2 ">
        {collections?.map((item) => {
          console.log("item", item)
          return (
            <div key={item.id} className="flex flex-col space-y-2 m-3 w-[13.125rem] drop-shadow-xl">
              <picture className=" h-[17.5rem] rounded-sm w-full">
                <source className="h-full w-full" srcSet={item.primaryImage?.webpImages?.lImage} type="image/webp" />
                <source className="h-full w-full" srcSet={item?.primaryImage?.jpegImages?.lImage} type="image/jpeg" />
                <img className="h-full w-full" src={item.primaryImage?.jpegImages?.lImage} alt={item.name} />
              </picture>
              {/* <img className=" h-[17.5rem]" /> */}
              <div className="p-2">
                <div className="font-semibold text-gray-900 text-base mb-1">{item.blouseFabric}</div>
                <div className="font-normal text-gray-600 text-xs my-1">{item.name}</div>
                <div className="flex space-x-2 items-center ">
                  <div className="font-semibold text-gray-900 text-sm">{`Rs.${item.listingPrice}`}</div>
                  <div className="font-semibold line-through text-gray-400 text-sm">{`Rs.${item.mrp}`}</div>
                  {/* <div className="mt-3">
                    <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">Simple Watch</h3>

                    <p className="mt-1 text-sm text-gray-700">$150</p>
                  </div> */}
                  <div className="text-xs text-orange-500">{`(${item.discount}% OFF)`}</div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProductListing
