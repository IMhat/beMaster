import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import db from '../firebase';

const Detail = () => {
	const { id } = useParams();
	console.log(id);

	const [ movie, setMovie ] = useState({});

	useEffect(() => {
		// Grab the movie data from the DataBase:
		db.collection('movies').doc(id).get().then((doc) => {
			if (doc.exists) {
				// save the movie data
				setMovie(doc.data());
			} else {
				console.log("no such document in firebase 🔥");
			  }
			})
			.catch((error) => {
			  console.log("Error getting document:", error);
		});
	}, [id]);

	return (
		<Container>
			{movie && (
				<>
					<Background>
						<img src={movie.backgroundImg} alt="background" />
					</Background>
					<ImageTitle>
						<img src={movie.titleImg} alt="title" />
					</ImageTitle>
					<Controls>
						<PlayButton>
							<img src={require(`../images/play-icon-black.png`).default} alt="button play" />
							<span>PLAY</span>
						</PlayButton>
						<TrailerButton>
							<img src={require(`../images/play-icon-white.png`).default} alt="button trailer" />
							<span>TRAILER</span>
						</TrailerButton>
						<AddButton>
							<span>+</span>
						</AddButton>
						<GroupWatchButton>
							<img src={require(`../images/group-icon.png`).default} alt="button group watch" />
						</GroupWatchButton>
					</Controls>
					<SubTitle>{movie.subTitle}</SubTitle>
					<Description>{movie.description}</Description>
				</>
			)}
		</Container>
	);
};

export default Detail;

// CSS STYLING

const Container = styled.div`
	min-height: calc(100vh - 70px);
	padding: 30px calc(3.5vw - 5px);
	position: relative;
`;

const Background = styled.div`
	position: absolute;
	top: 0px;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: -1;
	background-color: black;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0.85;
	}
`;

const ImageTitle = styled.div`
	height: 30vh;
	min-height: 170px;
	width: 25vw;
	min-width: 200px;
	margin-bottom: 10px;
	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
`;

const Controls = styled.div`
	display: flex;
	align-items: center;
`;

const PlayButton = styled.button`
	border-radius: 4px;
	font-size: 14px;
	display: flex;
	align-items: center;
	height: 56px;
	padding: 0 24px;
	margin-right: 22px;
	border: 1px solid white;
	background-color: #ffffff;
	letter-spacing: 1.8px;
	cursor: pointer;
	&:hover {
		background: silver;
	}

	@media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;
    img {
      width: 25px;
    }
  }
`;

const TrailerButton = styled(PlayButton)`
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid white;
    color: white;
`;

const AddButton = styled.button`
	margin-right: 22px;
	width: 44px;
	height: 44px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	border: 2px solid white;
	background-color: rgba(0, 0, 0, 0.6);
	cursor: pointer;
	span {
		font-size: 30px;
		color: white;
	}
	&:hover {
		background-color: silver;
	}
`;

const GroupWatchButton = styled(AddButton)`
    background-color: black;
`;

const SubTitle = styled.div`
	color: white;
	font-size: 14px;
	min-height: 20px;
	margin-top: 26px;

	@media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
	line-height: 1.4;
	font-size: 18px;
	margin-top: 16px;
	color: #1ce783;
	text-shadow: 1px 1px #000000;
	max-width: 760px;
	letter-spacing: 1px;
	max-width: 760px;

	@media (max-width: 768px) {
    font-size: 14px;
  }
`;
