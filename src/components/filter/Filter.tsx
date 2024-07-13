import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const Filter = ({ category, setCategory }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-white hover:bg-white text-xl font-semibold text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
            />
          </svg>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Filter by category</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={category} onValueChange={setCategory}>
          <DropdownMenuRadioItem value="backpacks">
            Backpacks
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="clothing">
            Clothing
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="cooking-gear">
            Cooking Gear
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="footwear">
            FootWear
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="camping">Camping</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="first-aid">
            First Aid
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="electronics">
            Electronics
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="lighting">
            Lighting
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Filter;
