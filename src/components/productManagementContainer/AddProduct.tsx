import { FormEvent, useState } from "react";
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

const AddProduct = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [stockQuantity, setStockQuantity] = useState("");
  const [ratting, setRatting] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const taskDetails = {
      name,
      image,
      price,
      category,
      stockQuantity,
      ratting,
      description,
    };
    console.log(taskDetails);
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
              <Label htmlFor="task" className="text-right">
                Name
              </Label>
              <Input
                onBlur={(e) => setName(e.target.value)}
                id="name"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className="text-right">
                Image
              </Label>
              <Input
                type="url"
                onBlur={(e) => setImage(e.target.value)}
                id="image"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className="text-right">
                Price
              </Label>
              <Input
                onBlur={(e) => setPrice(e.target.value)}
                id="price"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className="text-right">
                Category
              </Label>
              <Input
                onBlur={(e) => setCategory(e.target.value)}
                id="category"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className="text-right">
                Stock Quantity
              </Label>
              <Input
                onBlur={(e) => setStockQuantity(e.target.value)}
                id="stock-quantity"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className="text-right">
                Ratting
              </Label>
              <Input
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
                placeholder="Des"
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
