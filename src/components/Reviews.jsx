import { useEffect } from "react";
import { Title, Container } from "@mantine/core";

function Reviews() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://featurable.com/assets/bundle.js";
        script.defer = true;
        script.charset = "UTF-8";
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script); // Cleanup on unmount
        };
    }, []);

    return (
        <Container>
            <Title order={2} m={30}>Nossas avaliações</Title>
            <div id="featurable-b8896f21-2237-4bc0-8d64-ad43198cc8b1" data-featurable-async data-location-code="pt-BR"></div>
        </Container>
    );
}

export default Reviews;
