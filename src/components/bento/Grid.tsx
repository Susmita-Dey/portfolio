"use client";
import { gridItems } from "@/lib/data";
import { BentoGrid, BentoGridItem } from "./BentoGrid";

export default function Grid() {
  return (
    <section>
      <BentoGrid className="w-full pt-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
}

// export default Grid;
