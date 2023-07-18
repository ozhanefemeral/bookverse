import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardHeader } from "../ui/card";

export default function BookGridSkeleton() {
  return (
    <>
      <div className="flex flex-wrap justify-center md:justify-between items-center md:gap-4">
        <Skeleton className="w-36 h-8 my-4" />
        <Skeleton className="w-60 h-10" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 py-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <Card key={index} className="flex flex-col gap-8">
            <CardHeader>
              <Skeleton className="w-full h-8 my-4" />
              <Skeleton className="w-full h-80 rounded-lg" key={index} />
            </CardHeader>
          </Card>
        ))}
      </div>
    </>
  );
}
