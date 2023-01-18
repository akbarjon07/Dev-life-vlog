import "./home.css";
import { Hero } from "../../components/Hero/Hero";
import { Posts } from "../../components/Posts/Posts"
import { Works } from "../../components/Works/Works"



export const Home = () => {

    return (
        <>
            <Hero />
            <Posts />
            <Works />
        </>
    )
}