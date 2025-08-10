import React from 'react'
import './home.css';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const Home = () => {
    return (
        <div className="hom">
            <div className="logo">
                <img src="images/logo5.jpg" className='background' />
            </div>
            <div className='full-cards'>
                <a href='cncst'>
                <div className='cards'>
                    <Card sx={{width: 300, height: 300, display: 'flex', flexDirection: 'column',backgroundColor:'white' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://blogger.googleusercontent.com/img/a/AVvXsEjti7sOicg7fKzd9lKvyHC9aFDlfZ65dwK8Vd5TpFe07B-MQB4v_HMx9Wz-IIP8ysqasK0GuDvfi4Y1afQWq3RgRWKpCFFLLM_Gx9Ut3hvS7T-MhW9O8uhZCA_rExbalwkID2AXmHowWjA8CGJcBu7LF-OW9LZ6JbK6FPuMMGXQgFxIKUkJ7MfOo0TKpw=w640-h427-rw"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Computer Networks
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    S5 CST303
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                </a>
                <a href='sscst'>
                <div className='cards'>
                    <Card sx={{width: 300, height: 300, display: 'flex', flexDirection: 'column' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://blogger.googleusercontent.com/img/a/AVvXsEiI91nUYbRAdJ510kM1TQObci8PhHWsdvV1IvDFOTTR0w-R8-JkPZ5kiEt7K4r2_q4Cw0WWYHsSKiSaRDHDr1hJqvGTTyoEepSl6QkCTKkeE-AFPuMLOj7y1Qm5-0i1i7S5ClZ9ylfjw-H02AOR-KgxXATd-J5EiU8c3Y168Ved2JOU5QTy1RqqOz-KXw=w640-h427-rw"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    System Software
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    S5  CST305
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                </a>
                <a href='mamcst'>
                <div className='cards'>
                     <Card sx={{width: 300, height: 300, display: 'flex', flexDirection: 'column' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://blogger.googleusercontent.com/img/a/AVvXsEjIMYmBl8BTYvibh5FcUihrXdv6RRqHSMVPOM-zJiU4gsDGtnoxD2P5JfF1rKowg6l4qco9F99LG0lgEj0c8xoKnlUWhg_Vzg40HoZzEBHe8UeNITUjOBcqzZw-QkIAz50m2VfQR_cGSP0qS6PTyaXzMDLW1NS2W7sAQIazT4tqTyYcfXpvy8jEehQNTg=w640-h427-rw"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Microprocessors and Microcontrollers
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    S5 CST307
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                </a>
                <a href='mmscst'>
                <div className='cards'>
                   <Card sx={{width: 300, height: 300, display: 'flex', flexDirection: 'column' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://blogger.googleusercontent.com/img/a/AVvXsEhxOn7Pg_LO6PjG-jCfHWLDDBBnXki03fsWEhh2f6zGNO1hJMocYitOREoptbmwknBlxEOrx3Sz8Y6ilmDZ9uNEjlvBRgVTCac2qnF-uaKRtylUwdSJ6SffoItbhOyO06788xsHaFogcwGWSvKZOj1CIEt3eGsl9xHhK_NK3PY5Dna9rtpvoF7D6IPHJw=w640-h427-rw"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Management of Software Systems
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    S5 CST309
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                </a>
                <a href='dmcst'>
                <div className='cards'>
                   <Card sx={{width: 300, height: 300, display: 'flex', flexDirection: 'column' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://blogger.googleusercontent.com/img/a/AVvXsEgG-ZsK44uBJtTNHrpN3qGzXVixZY1mluunITsJVDxTOISvMEYhLb4gk035VyzzLlGLevJjeld5r7h_axvfdDyT0gtrsf89HtVXCso9Rj4QRVJzhoNLan0TeV2ta7xmmpC6usUG0qUS_bpyQbOfQOu_Dlm6ufTH2H1huOlRJ_rSCVybqm0GNhVvqB-mig=s1600-rw"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Disaster Management
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    S5 MCN301
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                   
                </div>
                </a>
                <a href='flat'>
                 <div className='cards'>
                       <Card sx={{width: 300, height: 300, display: 'flex', flexDirection: 'column' }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://blogger.googleusercontent.com/img/a/AVvXsEgZUgRevHqNZJdulUBeiyNgaYiFauNMKf2TnHeS4ij_fxw4UcDR3Zlj6JQxODKzi_ECmCtzomGJIS6fwSTpuKR-UuCtcMTNJGjSb8hn9y7bQF8wsWBVbx6eCF1TmvX9TlW-76ZbUGOuF5uTqXeK-5LnYvk-AZviy_CFSdFVWtDeXqYm5HjqmUS1GJ08Nw=w640-h427-rw"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Formal Languages and Automata Theory
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        S5 CST301
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                    </a>
            </div>
        </div>
    )
}

export default Home