import "./routes.css";
import { Layout } from "../components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Blog } from "../pages/Blog/Blog";
import { Project } from "../pages/Project/Project";
import { Footer } from "../components/Footer/Footer";
import { Contact } from "../pages/Contact/Contact";




export const RoutesWrapper = () => {

    return (
        <Layout>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/projects" element={<Project/>}/>
                <Route path="/contacts" element={<Contact/>}/>
            </Routes>
        </Layout>
    )
}