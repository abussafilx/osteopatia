import { AspectRatio, Title, Text, Container, Overlay, Button, Center } from "@mantine/core";
import { Link } from "react-router-dom";
import "./Hero.css";
import bg from "../assets/photo.jpg"

function Hero() {

    return (

        <div className={"hero"} style={{ backgroundImage: `url(${bg})` }} >
        <Overlay
          gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
          opacity={.7}
          zIndex={0}
          blur={5}
    
        />
        <Container  className="container"  style={{ zIndex: 1 }}>
      
            <Center className="center">
            <Title m={"50 0 15 0"} order={1}>Osteopata e Massagista na Caparica</Title>
            <Text mb={30}> Tratamentos de Osteopatia e Massagem Terapêutica pertinho de si</Text>
            <Link to="https://calendly.com/agendamento-dr-anderson-santos">
            <Button variant="light" color="rgba(201, 201, 201, 1)" w={180} mb={40} p={0} size="md"  radius="md" className="Button">
          Faça sua marcação
        </Button></Link>
        </Center>


            <AspectRatio ratio={16 / 9}>

                <iframe
                    src="https://www.youtube.com/embed/Uz99kFPXQUM"
                    title="YouTube video player"
                    style={{ border: 0 }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            
        </AspectRatio>      

        </Container>
        </div>

    
    );
    
}

export default Hero;