"use client";
import { Card, CardBody, CardHeader, Button } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";


interface CardBlogsProps {
    title: string;
    date: string;
    imageUrl: string;
  }

export default function CardBlogs({ title, date, imageUrl }: CardBlogsProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFav, setIsFav] = useState(false);

  const handleIsFav = () => {
    setIsFav(!isFav);
  };

  const text =
    "You must read all those keys to prepare your self before going to an interview.";

  return (
    <Card className="py-2 max-w-[270px]">
      <CardHeader className="overflow-visible py-2">
        <Image
          alt="Card background"
          height={280}
          className="object-cover rounded-xl"
          src={imageUrl}
          width={280}
        />
      </CardHeader>
      <CardBody className="pb-0 pt-2 px-4 flex-col items-start">
        <div className="relative">
          <p
            className={`text-tiny uppercase font-semibold ${
              !isExpanded ? "line-clamp-2" : ""
            }`}
          >
            {title}
          </p>
          {text.length > 50 && (
            <Button
              className="min-w-fit h-6 px-1 pt-2 font-medium text-tiny"
              variant="light"
              color="primary"
              onPress={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "See less" : "See more"}
            </Button>
          )}
        </div>
        <div className="flex justify-between w-full pt-4">
        <small className="text-default-500">{date}</small>
        <div className="flex flex-row gap-2 justify-end ">
            
          <button onClick={handleIsFav}>
            {!isFav ? (
              <Image
                alt="heart"
                src={"/favIcon/heart.svg"}
                height={18}
                width={18}
              />
            ) : (
              <Image
                alt="heart"
                src={"/favIcon/heartFill.svg"}
                height={18}
                width={18}
              />
            )}
          </button>
          <Image
            alt="share"
            src={"/favIcon/share.svg"}
            width={18}
            height={18}
          />
        </div>
      
        </div>
      </CardBody>
    </Card>
  );
}
