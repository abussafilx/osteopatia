import { IconHeart } from '@tabler/icons-react';
import { ActionIcon, Badge, Button, Card, Group, Image, Text, Container, Flex, Title, SimpleGrid } from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from './Portfolio.module.css';
import imgOsteo from '../assets/osteopa-300x300.png'
import imgTerap from '../assets/massagem-pro-300x300.png'
import imgRela from '../assets/terapeutica-300x300.png'

const mockdata = {
  image:
    'https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
  title: 'Verudela Beach',
  country: 'Croatia',
  description:
    'Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula.',
  badges: [
    { emoji: '☀️', label: 'Sunny weather' },
    { emoji: '🦓', label: 'Onsite zoo' },
    { emoji: '🌊', label: 'Sea' },
    { emoji: '🌲', label: 'Nature' },
    { emoji: '🤽', label: 'Water sports' },
  ],
};

const services = [
  {
    title: "Osteopatia",
    description: "A osteopatia é uma terapia manual que trata dores musculoesqueléticas através de técnicas de manipulação, promovendo equilíbrio e alívio natural. Ideal para melhorar a mobilidade e reduzir desconfortos sem o uso de medicamentos.",
    img: imgOsteo,
    badges: [
      { emoji: '', label: 'Dor do Ciático' },
      { emoji: '', label: 'Artrose' },
      { emoji: '', label: 'Problemas posturas' },
      { emoji: '', label: 'Tendinites' },
      { emoji: '', label: 'Bursites' },]
  }, 
  {
    title: "Massagem Terapêutica",
    description: "Focada no alívio de dores e tensões musculares, utiliza técnicas específicas para melhorar a circulação, mobilidade e recuperação corporal.",
    img: imgTerap,
    badges: [
      { emoji: '', label: 'Cansaço / fadiga' },
      { emoji: '', label: 'Problemas digestivos' },
      { emoji: '', label: 'Dores de cabeça' },  
       { emoji: '', label: 'Contratura musculares' },
  ]  },
  {
    title: "Massagem Relaxante",
    description: "Técnica suave que alivia o stress e a tensão muscular, promovendo relaxamento profundo e bem-estar físico e mental.",
    img: imgRela,
    badges: [
      { emoji: '', label: 'Stress' },
      { emoji: '', label: 'Cansaço / fadiga'  },
      { emoji: '', label: 'Contratura musculares' },
    ]
  }
  
];

export function Portfolio() {
  const { image, title, description, country, badges } = mockdata;
  const features = badges.map((badge) => (
    <Badge variant="light" key={badge.label} leftSection={badge.emoji}>
      {badge.label}
    </Badge>
  ));

  return (
    <Container mb={20}>
        <Title order={2} m={20}> Nossos serviços </Title>
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }}
        spacing="lg"
        verticalSpacing="lg">
    {services.map( (service) => { return (
        <Card withBorder radius="md" p="md"  m={10} key={service.title} className={classes.card}>
        <Card.Section>
          <Image src={service.img} alt={service.title} height={180} />
        </Card.Section>
  
        <Card.Section className={classes.section} mt="md">
          <Group justify="apart">
            <Text fz="lg" fw={500}>
              {service.title}
            </Text>
          </Group>
          <Text fz="sm" mt="xs">
            {service.description}
          </Text>
        </Card.Section>
  
        <Card.Section className={classes.section}>
          <Text mt="md" className={classes.label} c="dimmed">
            Indicado para:
          </Text>
          <Group gap={7} mt={5}>
            {service.badges.map((badge) => (
    <Badge variant="light" key={badge.label} leftSection={badge.emoji}>
      {badge.label}
    </Badge>))}
          </Group>
        </Card.Section>
  
        <Group mt="xs">
          <Link to="https://calendly.com/agendamento-dr-anderson-santos">
          <Button radius="md" style={{ flex: 1 }}>
            Fazer Marcação
          </Button></Link>
        </Group>
      </Card>)
    })}

</SimpleGrid>
    </Container>
  );
}

export default Portfolio