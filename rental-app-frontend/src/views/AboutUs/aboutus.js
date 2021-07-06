import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Founders from "../../images/founders.jpeg";
import Paul from "../../images/Paul.jpeg";
import Niaz from "../../images/Niaz.jpg";

export default function AboutUs() {
    const useStyles = makeStyles((theme) => ({
        centerText: {
            textAlign: 'center',
        },
        justifyText: {
            textAlign: "justify",
        },
        alignRight: {
            textAlign: "right",
        },
        divBoarder:{ 
            display: 'flex', 
            margin: '50px',
            border: "1px solid black",
            padding: "50px",
            backgroundColor: "#659DBD",
        },
        emailJumboTron: {
            padding: '20px',
            backgroundColor: `#DAAD86`,
        },
        box: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '20vh',
        },
        fitImage: {
            maxWidth: "100%",
            maxHeight: "100%",
        },
        displayPhoto: {
            maxWidth: "75%",
            maxHeight: "75%",
        }
    }));

    const classes = useStyles();

    return (
        <>
            <div className="container d-flex flex-row" style={{ marginTop: "5vh"}}>
                <div className="col-5">
                    <img className={classes.fitImage} src={Founders} alt="Founders"/>
                </div>
                <div className="col-7">
                    <h2>Our story</h2>
                    <div className={classes.justifyText}>
                        In the early stages of 2020 the global pandemic had arose, we as five college graduates decided to start a small business — after some planning we started to code, thus the starting of a new generation of renting.
                        At first we spent some time exploring other rental sites, being a college student we all knew the struggles of finding a new home.
                        With a vision of building the most trusted rental platform in the world, we all decided to put our time and effort into this project. Paul quit his job, partnered with CTO Niaz and started Vroom in 2020.
                        By 2021, Vroom was admitted to Top Projects of 2021, propelling Vroom into the tech-world spotlight and allowing Vroom to raise thousands of dollars in venture capital funding from Seneca Capital, Donations Capital and many other high-profile investors.
                        Today, Vroom operates on a multinational level, serving thousands of landlords and renters across North America.
                    </div>
                </div>
            </div>
            <div className={classes.emailJumboTron} style={{ marginTop: "5vh"}}>
                <div className={classes.box}>
                    <h2 style={{ color: 'black'}}>Vroom is already trusted by hundreds of landlords</h2>
                </div>
            </div>
           <div className={classes.divBoarder}>
                <div className={classes.centerText, "col-9"} style={{ alignSelf: 'center' }}>
                    <h2>Paul Sin</h2>
                    <blockquote>
                       <footer class="blockquote-footer">Full Stack Developer <cite title="Source Title">@ Vroom</cite></footer>
                    </blockquote>
                    <p className={classes.justifyText}>
                        Growing up in a small community that had a population of about 5000 people. This gave me the opportunity to understand how important one person can be in a community.
                        As a recent graduate from Seneca College and with the Pandemic in full effect, my group and I thought It would be a great Idea to contribute to the growing role of online renting.
                        We read articles about how people would view, rent, and even purchase their homes via Zoom call. This is when we knew that an application like Vroom was only a matter of time.
                        Thank you for your support and we hope you enjoy our services.
                    </p>
                </div>
                <div className="col-3" style={{display: "flex", justifyContent: "center"}}>
                    <img className={classes.displayPhoto} src={Paul} atl="Image of Creators" />
                </div>
            </div>
            <div style={{ display: 'flex', margin: '50px' }}>
                <div className="col-4" style={{display: "flex", justifyContent: "center"}}>
                    <img className={classes.displayPhoto} src="https://picsum.photos/300/200" atl="Image of Creators" />
                </div>
                <div className={classes.centerText, "col-8"} style={{ alignSelf: 'center' }}>
                    <h2  className={classes.alignRight}>Name HERE</h2>
                    <blockquote className={classes.alignRight}>
                       <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                    </blockquote>
                    <p className={classes.justifyText}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </p>
                </div>
            </div>
            <div className={classes.divBoarder}>
                <div className={classes.centerText, "col-8"} style={{ alignSelf: 'center' }}>
                    <h2>Niaz Haque</h2>
                    <blockquote>
                       <footer class="blockquote-footer">Full Stack Developer <cite title="Source Title">@ Vroom</cite></footer>
                    </blockquote>
                    <p className={classes.justifyText}>
                        Since 2010, I have dreamed of becoming a successful Web Developer. From 2018 to 2021 I have embarked on the journey of obtaining more knowledge from studying @ Seneca College.
                        I love seeking a challenging that allows me to further develop my technical skills while contributing to the goals of organizations.
                        I really enjoyed working with this team making our dreams come true. Thank you for being apart of the Vroom Community.
                    </p>
                </div>
                <div className="col-4" style={{display: "flex", justifyContent: "center"}}>
                    <img className={classes.displayPhoto} src={Niaz} atl="Image of Creators" />
                </div>
            </div>
            <div style={{ display: 'flex', margin: '50px' }}>
                <div className="col-4" style={{display: "flex", justifyContent: "center"}}>
                    <img className={classes.displayPhoto} src="https://picsum.photos/300/200" atl="Image of Creators" />
                </div>
                <div className={classes.centerText, "col-8"} style={{ alignSelf: 'center' }}>
                    <h2  className={classes.alignRight}>Name HERE</h2>
                    <blockquote className={classes.alignRight}>
                       <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                    </blockquote>
                    <p className={classes.justifyText}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </p>
                </div>
            </div>
            <div className={classes.divBoarder}>
                <div className={classes.centerText, "col-8"} style={{ alignSelf: 'center' }}>
                    <h2>Saumya Vasa</h2>
                    <blockquote>
                       <footer class="blockquote-footer">Full Stack Developer <cite title="Source Title">@Vroom</cite></footer>
                    </blockquote>
                    <p className={classes.justifyText}>
                        As I am moving back to Canada I have experienced first-hand lack of a proper app for long-term rentals. So, along with my group we are trying to create an app where both landlords and tenants can have details about the place and knowledge about each other's reliablity. Also, our goal is to integrate all the features in our app for ease of users.
                    </p>
                </div>
                <div className="col-4" style={{display: "flex", justifyContent: "center"}}>
                    <img className={classes.displayPhoto} src="https://picsum.photos/300/200" atl="Image of Creators" />
                </div>
            </div>
        </>
    );
}
