import styles from './styles.module.scss'
import Head from '../components/Head'
import CustomizedInputBase from '../components/Text_Field'
import Cards from "../components/Cards"
import { Container, Grid, Pagination } from '@mui/material'
import { useState, useEffect } from 'react'
import axios from "axios";

export default function Home() {

  const [resposta, setResposta] = useState();
  const [page, setPage] = useState(1);
  const [busca, setBusca] = useState("");
  const baseURL = `https://rickandmortyapi.com/api/character/?page=${page}&name=${busca}`

  useEffect(() => {
    axios
      .get(
        baseURL
      )
      .then((ress) => {
        setResposta(ress?.data?.results);
      })
      .catch(function (error) {
        console.log(error.toJSON());
      });
  }, [baseURL]);

  const handChange = (e, resposta) => {
    setPage(resposta)
  }
  const filterRick = (name) => {
    setBusca(name)
  }

  return (
    <>
      <Head />

      <div className={styles.content}>
        <img src='./soon.png' className={styles.soon} />
      </div>

      <div className={styles.Field}>
        <CustomizedInputBase search={filterRick} sx={{ margin: "10px" }} />
      </div>

      <Container sx={{ marginTop: "50px" }}>
        <Grid container sx={{ display: "flex", justifyContent: "center" }}>
          {resposta && resposta.map((item, index) => (
            <Grid key={index} display="flex" >
              <Cards info={item} />
            </Grid>
          ))}
        </Grid>
        <Pagination
          count={42}
          color="primary"
          onChange={handChange}
          sx={{ display: "flex", justifyContent: "center" }} />
      </Container>
    </>

  )
}
