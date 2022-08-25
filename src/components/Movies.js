import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import NewDisney from "./NewDisney";
import Original from "./Original";
import Recommends from "./Recommends";
import Trending from "./Trending";
import db from '../firebase';
import { useDispatch } from 'react-redux';
import { setMovies } from '../features/movie/MovieSlice';
import { selectUserName } from "../features/user/userSlice";


const Movies = () => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName); 

    let recommends = [];
    let newDisney = [];
    let original = [];
    let trending = [];

    useEffect( () => {
      
        db.collection("movies").onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
              console.log(recommends);
              switch (doc.data().type) {
                case "recommend":
                  recommends = [...recommends, { id: doc.id, ...doc.data() }];
                  break;
      
                case "new":
                  newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
                  break;
      
                case "original":
                  original = [...original, { id: doc.id, ...doc.data() }];
                  break;
      
                case "trending":
                  trending = [...trending, { id: doc.id, ...doc.data() }];
                  break;
              }
            });
      
            dispatch(
              setMovies({
                recommend: recommends,
                newDisney: newDisney,
                original: original,
                trending: trending,
              })
            );
          });

    }, [userName]);

    return(
        <Container>
            <Recommends />
            <NewDisney />
            <Original />
            <Trending />
        </Container>
    )
};

export default Movies;

// CSS STYLING 

const Container = styled.div`
    padding: 0 0 66px;
`;

