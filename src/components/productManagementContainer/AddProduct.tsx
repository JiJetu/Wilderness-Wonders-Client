import { FormEvent, useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { useAddProductMutation } from "@/redux/api/baseApi";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import Swal from "sweetalert2";

const defaultProductValue = {
  name: "Airzone Active 26L Backpack",
  images:
    "https://adventureshop.mt/cdn/shop/files/Airzone_Active26_Black_FTF_25_BLK.jpg?v=1718192898&width=5000",
  price: "500",
  category: "backpacks",
  stockQuantity: "10",
  ratting: "5",
  description:
    "The Airzone Active 26L Backpack is the ideal choice for adventurers seeking a compact, versatile, and high-performance daypack. Perfectly designed for a range of outdoor activities, this backpack seamlessly blends comfort, durability, and functionality. With a spacious 26-liter capacity, it offers ample room for your essentials, making it suitable for hiking, commuting, or daily use. The Airzone Active features a sleek, ergonomic design with an adjustable, padded harness system that ensures a snug, comfortable fit even during extended wear. Its ventilated back panel promotes airflow, keeping you cool and dry as you move. Constructed from robust, weather-resistant materials, this backpack is built to withstand the elements and rugged terrain, while its multiple compartments and pockets provide organized storage for everything from water bottles to small gear. Lightweight yet sturdy, the Airzone Active 26L Backpack is the perfect companion for those who demand both style and performance in their outdoor gear.",
};

const AddProduct = () => {
  const [name, setName] = useState(defaultProductValue.name);
  const [images, setImages] = useState(defaultProductValue.images);
  const [price, setPrice] = useState(defaultProductValue.price);
  const [category, setCategory] = useState(defaultProductValue.category);
  const [stockQuantity, setStockQuantity] = useState(
    defaultProductValue.stockQuantity
  );
  const [ratting, setRatting] = useState(defaultProductValue.ratting);
  const [description, setDescription] = useState(
    defaultProductValue.description
  );

  const [addProduct, { isError, isSuccess }] = useAddProductMutation();

  useEffect(() => {
    if (isSuccess) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Product added successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (isError) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to add product. Please try again.",
      });
    }
  }, [isSuccess, isError]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const taskDetails = {
      name,
      images,
      price,
      category,
      stockQuantity,
      ratting,
      description,
    };

    addProduct(taskDetails);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#0ccaab] text-white font-semibold text-lg rounded-xl hover:bg-gradient-to-r from-cyan-500 to-yellow-500">
          Add Product
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>---Add Product---</DialogTitle>
          <DialogDescription>Add your product</DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                placeholder="Product name"
                defaultValue={name}
                onBlur={(e) => setName(e.target.value)}
                id="name"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="image" className="text-right">
                Image
              </Label>
              <Input
                placeholder="Product image URL"
                defaultValue={images}
                type="url"
                onBlur={(e) => setImages(e.target.value)}
                id="image"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="text-right">
                Price
              </Label>
              <Input
                placeholder="Product price in $"
                defaultValue={price}
                onBlur={(e) => setPrice(e.target.value)}
                id="price"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Category</Label>
              <Select
                defaultValue={category}
                onValueChange={(value) => setCategory(value)}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Category</SelectLabel>
                    <SelectItem value="backpacks">Backpacks</SelectItem>
                    <SelectItem value="clothing">Clothing</SelectItem>
                    <SelectItem value="cooking-gear">Cooking Gear</SelectItem>
                    <SelectItem value="footwear">FootWear</SelectItem>
                    <SelectItem value="camping">Camping</SelectItem>
                    <SelectItem value="first-aid">First Aid</SelectItem>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="lighting">Lighting</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="stock-quantity" className="text-right">
                Stock Quantity
              </Label>
              <Input
                placeholder="Product stock quantity"
                defaultValue={stockQuantity}
                onBlur={(e) => setStockQuantity(e.target.value)}
                id="stock-quantity"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="ratting" className="text-right">
                Ratting
              </Label>
              <Input
                type="number"
                min={1}
                max={5}
                defaultValue={ratting}
                placeholder="Product ratting out of 5"
                onBlur={(e) => setRatting(e.target.value)}
                id="ratting"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Textarea
                defaultValue={description}
                onBlur={(e) => setDescription(e.target.value)}
                id="description"
                className="col-span-3"
                placeholder="Product Description"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <DialogClose asChild>
              <Button type="submit">Add Product</Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddProduct;
