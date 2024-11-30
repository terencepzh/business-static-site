import ResourceCard from "@/components/ResourceCard";
import { articles_2 } from "@/content/Articles";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

function Resources() {
  return (
    <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 px-6 py-8">
      <Pagination className="text-red-600">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="1" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="1">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="2"
              isActive
            >
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="2" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      {articles_2.map((elem, index) => (
        <ResourceCard
          {...elem}
          key={index}
        />
      ))}
      <Pagination className="text-red-600">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="1" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="1">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="2"
              isActive
            >
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="2" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

export default Resources;
