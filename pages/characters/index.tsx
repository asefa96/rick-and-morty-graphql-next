import { useState } from "react";
import { baseUrl } from "../../config";
import { ICharacter } from "../../type/Character";
import { useGetCharactersByIdQuery } from "../../__generated__/graphql";
import styles from "../../styles/Home.module.css";
import DataTable from "../../components/Table/DataTable";
import { LocationColumnInfo } from "./type";
import { Box, Container } from "@mui/material";

export default () => {
  const [page, setPage] = useState(1);

  const { data, loading } = useGetCharactersByIdQuery({
    variables: { id: page },
  });

  console.log(data);

  let characters: Array<ICharacter> = [];

  data?.characters?.results?.map((char) => {
    characters.push({
      name: char?.name!,
      status: char?.status!,
      type: char?.type!,
      species: char?.species!,
      gender: char?.gender!,
      id: char?.id!,
      avatar:char?.image!,
      location: char?.origin?.name!,
    });
  });

  const columns: Array<LocationColumnInfo> = [
    { id: "avatar", label: "Avatar", align: "left" },
    { id: "name", label: "Name", align: "center"},
    { id: "species", label: "Species", align: "center" },
    { id: "location", label: "Location", align: "center" },
    { id: "status", label: "Status", align: "center" },
  ];

  return (
    <div>
      {loading && <div> ...loading</div>}
      {
        <>
          <Box>
            <Container maxWidth="xl">
              <DataTable columns={columns} characters={characters} />
            </Container>
          </Box>
        </>
      }
    </div>
  );
};
