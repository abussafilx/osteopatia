import { AspectRatio, Title, Text, Container, Overlay, Button } from "@mantine/core";
import "./Hero.css";

function Hero() {

    return (

        <div className={"hero"}>
        <Overlay
          gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
          opacity={1}
          zIndex={0}
    
        />
        <Container  className="container" size="lg" style={{ zIndex: 1 }}>
      

            <Title m={"35 0 15 0"} order={1}>Osteopatia e Massagista na Caparica</Title>
            <Text mb={35}> Tratamentos de Osteopatia e Massagem Terapêutica pertinho de si</Text>


            <AspectRatio ratio={16 / 9}>

                <iframe
                    src="https://www.youtube.com/embed/Uz99kFPXQUM"
                    title="YouTube video player"
                    style={{ border: 0 }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            
        </AspectRatio>      
        <Button variant="gradient" m={35} size="lg" radius="xl" className={"button"}>
          Get started
        </Button>
        </Container>
        </div>
    
    );
}

export default Hero;