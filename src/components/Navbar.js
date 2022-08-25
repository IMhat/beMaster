import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { selectUserName, selectUserPhoto, setUserLogin, setSignOut } from '../features/user/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import { auth, provider } from '../firebase';

const Navbar = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const userName = useSelector(selectUserName);
	const userPhoto = useSelector(selectUserPhoto);

	useEffect(() => {
		// make it work on page refresh 
		auth.onAuthStateChanged(async (user) => {
			if(user) {
				dispatch(setUserLogin({
					name: user.displayName,
					email: user.Email,
					photo: user.photoURL
				}));
				history.push("/"); // redirect to Home Page after user sign's in
			}
		})
	}, []);

	const signIn = () => {
		auth.signInWithPopup(provider)
		.then( (result) => {
			console.log(result);
			let user = result.user;
			dispatch(setUserLogin({
				name: user.displayName,
				email: user.Email,
				photo: user.photoURL
			}));
			history.push("/"); // redirect to Home Page after user signs in
		});
	};

	const signOut = () => {
		auth.signOut()
		.then(() => {
			dispatch(setSignOut());
			history.push("/login"); // redirect to Login Page (on click on the user image)
		});
	};

	return (
		<Nav>
			<Link to="/">
				<Logo src={require(`../images/logo.svg`).default} alt="Logo" />
			</Link>

			{ !userName ? (
				<LoginContainer>
					<Login onClick={signIn}>Login</Login>
				</LoginContainer> ) : (
				<>
					<NavMenu>
						<a href="/">
							<img src={require(`../images/home-icon.svg`).default} alt="icon" />
							<span>HOME</span>
						</a>
						<a href="https://www.disney.com/" target="_blank">
							<img src={require(`../images/search-icon.svg`).default} alt="icon" />
							<span>SEARCH</span>
						</a>
						<a href="https://disneymovieclub.go.com/magic?catalogId=10051&offerId=61051D&source=DCOM&sourceId=x" target="_blank">
							<img src={require(`../images/watchlist-icon.svg`).default} alt="icon" />
							<span>WATCH-LIST</span>
						</a>
						<a href="https://disneyplusoriginals.disney.com/" target="_blank">
							<img src={require(`../images/original-icon.svg`).default} alt="icon" />
							<span>ORIGINALS</span>
						</a>
						<a href="https://movies.disney.com/" target="_blank">
							<img src={require(`../images/movie-icon.svg`).default} alt="icon" />
							<span>MOVIES</span>
						</a>
						<a href="https://movies.disney.com/watch-at-home" target="_blank">
							<img src={require(`../images/series-icon.svg`).default} alt="icon" />
							<span>SERIES</span>
						</a>
					</NavMenu>
					<User>
						<UserImg onClick={signOut} src={ userPhoto } alt="user" />
						<span>{ userName } </span>
					</User>
				</>
			) }
		</Nav>
	);
};

export default Navbar;

// CSS STYLING

const Nav = styled.nav`
	height: 70px;
	background-color: #370c25;
	background: linear-gradient(180deg, #370c25, #101953);
	display: flex;
	align-items: center;
	padding: 0 3rem;

	@media (max-width: 1130px) {
		flex-direction: column;
		height: fit-content;
		align-items: flex-start;
		padding: 1rem 3rem;
	}
`;

const Logo = styled.img`
	width: 80px;
`;

const NavMenu = styled.div`
	display: flex;
	flex: 1;
	margin-left: 2rem;
	align-items: center;
	a {
		display: flex;
		align-items: center;
		padding: 0 12px;
		cursor: pointer;
		img {
			height: 20px;
            margin-right: 1.55px;
		}
		span {
            color: #108CD2;
			font-size: 14px;
			letter-spacing: 1.55px;
			position: relative;
			&:after {
				content: "";
				height: 1px;
				width: 100%;
				background-color: #00ffff;
				position: absolute;
				left: 0;
				right: 0;
				bottom: -5px;
				opacity: 0;
				transform: scaleX(0);
				transform-origin: left center;
				transition: all .25s ease-in-out;
			}
		}

		&:hover {
			span:after {
				transform: scaleX(1);
				opacity: 1;
			}
		}
	}

	@media (max-width: 1130px) {
		margin: 12px 0;
	}

	@media (max-width: 768px) {
		flex-direction: column;
		height: fit-content;
		align-items: flex-start;
		a {
			padding: 6px;
		}
	}
`;

const User = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	span {
		font-size: 14px;
		letter-spacing: 1.55px;
		color: #00ffff;
	}
	&:hover::before {
		content: "Sign Out";
		top: 0;
		bottom: 0;
		right: 105%;
		color: #8a2be2;
		font-size: 14px;
		letter-spacing: 1.55px;
	}
`;

const UserImg = styled.img`
	width: 44px;
	height: 44px;
	border-radius: 50%;
	cursor: pointer;
	margin-right: 10px;
	margin-left: 10px;
`;

const LoginContainer = styled.div`
	display: flex;
	flex: 1;
	justify-content: flex-end;
`;

const Login = styled.div`
	cursor: pointer;
	border: 1px solid #00ffff;
	padding: 8px 16px;
	border-radius: 4px;
	letter-spacing: 1.5px;
	text-transform: uppercase;
	color: #00ffff;
	transition: all 0.25s ease 0s;
	&:hover {
		background-color: #00ffff;
		border-color: transparent;
		color: #370c25;
	}
`;
