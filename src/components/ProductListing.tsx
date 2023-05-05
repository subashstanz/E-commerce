import { collections } from "data/collection"
import React, { useState, useEffect } from "react"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"

const ProductListing = (props: any) => {
  const { setOnSHowProduct } = props
  const [selectedFilter, setSelectedFilter] = useState<null | string>(null)
  const [productCollection, setProductCollection] = useState([...collections])
  const [productCategories, setProductCategories] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string[]>([])

  useEffect(() => {
    let data: string[] = []
    collections?.forEach((item) => {
      if (!data?.includes(item.sareeFabric)) {
        data = [...data, item.sareeFabric]
      }
    })
    setProductCategories([...data])
  }, [])

  const onselectFilter = (value: string | null) => {
    setSelectedFilter(value)
    const tempdata = JSON.parse(JSON.stringify(productCollection))
    if (value === "PRICE_LOW_HIGH") {
      tempdata.sort((a: { listingPrice: number }, b: { listingPrice: number }) => a.listingPrice - b.listingPrice)
      setProductCollection(tempdata)
    }
    if (value === "PRICE_HIGH_LOW") {
      tempdata.sort((a: { listingPrice: number }, b: { listingPrice: number }) => b.listingPrice - a.listingPrice)
      setProductCollection(tempdata)
    }
    if (value === "ASCENDING") {
      tempdata.sort(function (a: { name: number }, b: { name: number }) {
        if (a.name < b.name) {
          return -1
        }
        if (a.name > b.name) {
          return 1
        }
        return 0
      })
      setProductCollection(tempdata)
    }
    if (value === "DESCENDING") {
      tempdata.sort(function (a: { name: number }, b: { name: number }) {
        if (a.name > b.name) {
          return -1
        }
        if (a.name < b.name) {
          return 1
        }
        return 0
      })
      setProductCollection(tempdata)
    }
  }

  const onselectCategory = (value: string[] | string = "") => {
    let data: string[] = [...selectedCategory]
    if (Array.isArray(value)) {
      data = [...data, ...value]
      // setSelectedCategory([...selectedCategory, ...value])
    } else {
      data = [...data, value]
    }
    const filteredData = collections?.filter((item) => {
      if (data?.includes(item.sareeFabric)) {
        return true
      }
      return false
    })
    setProductCollection(filteredData)
    setSelectedCategory([...data])
  }

  return (
    <div className="bg-gray-100 h-[100vh] w-full">
      <div className="w-full flex justify-end items-center bg-gray-50 h-[5rem] bg- flex">
        <>
          <Select
            className="mt-1 pl-2 mr-3 h-10 w-64 rounded-md text-gray-900 border-gray-200 shadow-sm sm:text-sm"
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            multiple
            label='Select fillers'
            value={selectedCategory}
            onChange={(event) => onselectCategory(event?.target?.value || "")}
          >
            {productCategories.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </>
        <>
          <Select
            className="mt-1 pl-2 mr-3 h-10 w-64 rounded-md border-gray-200 shadow-sm sm:text-sm"
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={selectedFilter}
            label="select Range filter"
            onChange={(event) => onselectFilter(event.target.value)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"PRICE_LOW_HIGH"}>Price low to high</MenuItem>
            <MenuItem value={"PRICE_HIGH_LOW"}>Price high to low</MenuItem>
            <MenuItem value={"ASCENDING"}>Name Ascending</MenuItem>
            <MenuItem value={"DESCENDING"}>Name Decending</MenuItem>
          </Select>
        </>
        {/* <input type="email" id="UserEmail" placeholder="john@rhcp.com" className="mt-1 pl-2 mr-3 h-10 w-64 rounded-md border-gray-200 shadow-sm sm:text-sm" /> */}
      </div>
      <div className="px-5 grid grid-cols-1 lg:grid-col-5 md:grid-cols-4 gap-2 sm:grid-cols-2">
        {productCollection?.map((item) => {
          return (
            <div key={item.id} onClick={() => setOnSHowProduct(true)} className="flex flex-col space-y-2 m-3 w-[13.125rem] drop-shadow-xl">
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
