import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"

import { ResetStyle } from "../css/reset"
import { GlobalStyle } from "../css/style"

import Container from "../components/Container/index"
import Login from "../pages/Auth/Login"
import Register from "../pages/Auth/Register"
import Home from '../pages/Home'

export default function App() {
	return (
		<>
			<ResetStyle />
			<GlobalStyle />
			<ToastContainer />

			<Container>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route path="/home" element={<Home />} />
					</Routes>
				</BrowserRouter>
			</Container>
		</>
	)
}