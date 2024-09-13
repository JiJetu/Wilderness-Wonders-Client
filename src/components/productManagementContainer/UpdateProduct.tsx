import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { FormEvent, useState } from "react";
import { useUpdateProductMutation } from "@/redux/api/baseApi";
import Loading from "@/utils/Loading";

interface Product {
  _id: string;
  name: string;
  images: string;
  price: number;
  category: string;
  stockQuantity: number;
  ratting: number;
  description: string;
}

type UpdateProductProps = {
  product: Product;
};

const UpdateProduct = ({ product }: UpdateProductProps) => {
  const [name, setName] = useState("");
  const [images, setImages] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [stockQuantity, setStockQuantity] = useState("");
  const [ratting, setRatting] = useState("");
  const [description, setDescription] = useState("");

  const [updateProduct, { isSuccess, isLoading }] = useUpdateProductMutation();

  console.log(isSuccess);

  if (Number(ratting) > 5) {
    setRatting("5");
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log(ratting);

    const taskDetails = {
      name: name || product.name,
      images: images || product.images,
      price: price ? parseInt(price) : product.price,
      category: category || product.category,
      stockQuantity: stockQuantity
        ? parseInt(stockQuantity)
        : product.stockQuantity,
      ratting: ratting ? parseInt(ratting) : product.ratting,
      description: description || product.description,
    };

    const updateDate = {
      _id: product._id,
      product: taskDetails,
    };

    updateProduct(updateDate);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#5C53FE] rounded-xl">
          <svg
            className="size-5"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            ></path>
          </svg>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>---Update Product---</DialogTitle>
          <DialogDescription>Update your product</DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                defaultValue={product.name}
                onBlur={(e) => setName(e.target.value)}
                id="name"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="images" className="text-right">
                Image
              </Label>
              <Input
                defaultValue={product.images}
                type="url"
                onBlur={(e) => setImages(e.target.value)}
                id="images"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="text-right">
                Price
              </Label>
              <Input
                defaultValue={product.price}
                onBlur={(e) => setPrice(e.target.value)}
                id="price"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Category</Label>
              <Select onValueChange={(value) => setCategory(value)}>
                <SelectTrigger className="col-span-3">
                  <SelectValue defaultValue={product.category} />
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
                defaultValue={product.stockQuantity}
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
                defaultValue={product.ratting}
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
                onBlur={(e) => setDescription(e.target.value)}
                id="description"
                className="col-span-3"
                defaultValue={product.description}
              />
            </div>
          </div>
          <div className="flex justify-end">
            <DialogClose asChild>
              <Button type="submit">Update Product</Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateProduct;
