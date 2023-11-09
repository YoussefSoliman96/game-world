import { Image, Img, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} spacing={2}>
      {data?.results?.map((img) => (
        <Image key={img.id} src={img.image}></Image>
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
