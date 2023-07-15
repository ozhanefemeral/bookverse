import { categories } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function CategorySelect({ category }: { category: string }) {
  return (
    <Select name="categories" defaultValue={category || undefined}>
      <SelectTrigger className="flex-shrink-0">
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent>
        {categories.map((category) => (
          <SelectItem key={category} value={category}>
            {category}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
