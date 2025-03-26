import { Accordion, Container, ThemeIcon, Title } from '@mantine/core';
import classes from './Faq.module.css';

const placeholder =
    'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.';

function Faq() {

    return (
        <div className={classes.wrapper}>
            <Container size="sm">
                <Title ta="center" mb={20} className={classes.title}>
                    Questões Frequentes
                </Title>

                <Accordion
                    chevronPosition="right"
                    defaultValue="first"
                    chevronSize={26}
                    variant="separated"
                    disableChevronRotation
                    styles={{ label: { color: 'var(--mantine-color-black)' }, item: { border: 0 } }}

                >
                    <Accordion.Item className={classes.item} value="first">
                        <Accordion.Control>Quantos tratamentos são necessários?</Accordion.Control>
                        <Accordion.Panel>Essa resposta depende do quadro em que o utente encontra-se. Por isso é recomendado pelo menos 01 tratamento para realizar a avaliação e o tratamento em seguida para conseguir o alcançar o alívio da dor já no primeiro encontro.</Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item className={classes.item} value="another-account">
                        <Accordion.Control>Quais formas de pagamento?</Accordion.Control>
                        <Accordion.Panel>Os pagamentos podem ser feitos em dinheiro, MBway ou transferência Bancária.</Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item className={classes.item} value="newsletter">
                        <Accordion.Control>Qual é a localização para os tratamentos?</Accordion.Control>
                        <Accordion.Panel>Há duas localizações para realizar seus tratamentos: <br></br><br></br>

                            R. Dom João de Castro n82A, 2800-105 Almada (Hifu 7D – Império Spa)
                            <br></br><br></br>
                            Rua da Bela Vista 53, 2825-004 Caparica, Andar 4B</Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item className={classes.item} value="credit-card">
                        <Accordion.Control>Faz atendimentos a domicílio?</Accordion.Control>
                        <Accordion.Panel>Sim, nesses casos os preço dos tratamentos podem ser alterados devido ao transporte, localização e horários etc…</Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item className={classes.item} value="payment">
                        <Accordion.Control>Tenho Stress, posso fazer?</Accordion.Control>
                        <Accordion.Panel>De todas as opções o Stress é o maior causador de dano pro corpo. A depender do tempo e do nível do Stress deixa de ser importe e passa ser uma Urgência o seu tratamento..
                            <br></br>
                            O Stress não provoca somente mais contraturas no pescoço, na coluna e nos ombros. Vai muito além.
                            <br></br>
                            O sistema hormonal fica desregulado, os marcadores inflamatórios aumentam na corrente sanguínea (provoca dor em várias partes do corpo), os nervos ficam comprimidos entre os músculos tanto da coluna lombar, do pescoço, do ciatico gerando mais tensão no corpo.
                            O indivíduo perde a sua recuperação do sono (Dorme e sempre está cansado), podendo ter as insônias corriqueiras.
                            <br></br>
                            Fica mais cansado do que o normal, sem energia, consome cafeína e açúcar em excesso para aumentar a demanda de energia.
                            <br></br>
                            Para contribuir a má alimentação inflamam de maneira crônica o intestino causa do distúrbios de ansiedade, depressão e outros problemas metabólicas.
                            <br></br>
                            Casos como esse devem priorizar cuidar da sua saúde o quanto antes.</Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item className={classes.item} value="reset-password">
                        <Accordion.Control>Tenho Hérnia de disco lombal, posso fazer?</Accordion.Control>
                        <Accordion.Panel>Não só pode como deve. Porque? Esse tratamento além de ajudar corrigir a postura e deixar a coluna lombar com mais mobilidade atua de forma específica para descomprimir as raízes nervosas afetas (L2, L3, L4, L5, S1) e principalmente promove a melhora da vascularização da região profunda da coluna para drenar o processo inflamatório sem necessitar da intervenção medicamentosa.</Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item className={classes.item} value="reset-password">
                        <Accordion.Control>Tenho de Hérnia de disco cervical, posso fazer?</Accordion.Control>
                        <Accordion.Panel>Não só pode como deve. Porque? Esse tratamento além de ajudar corrigir a postura e deixar a coluna cervical com com mais mobilidade atua de forma específica para descomprimir as raízes nervosas afetas (C3, C4, C5, C6) e principalmente promove a melhora da vascularização da região profunda da coluna para drenar o processo inflamatório sem necessitar da intervenção medicamentosa</Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item className={classes.item} value="reset-password">
                        <Accordion.Control>Cirurgias na coluna, pode fazer?</Accordion.Control>
                        <Accordion.Panel>Sim. Pode ser realizado normalmente. Há somente a necessidade de respeitar o tempo de cicatrização dos tecidos moles (30 dias, se for Casos pós cirurgicos). Caso a cirurgias já tenha mais de 3 meses, pode ser realizado normalmente com algumas precauções (como por exemplo, NÃO ESTALAR ou MANIPULAR a área cirúrgica).

                            <br></br>

                            Realizar esse tratamento com as técnicas corretas promove grandes alívio das dores mesmo que o utente tenha cirurgias.

                            <br></br>

                            Outro fator é que as cicatrizes das cirurgia muitas vezes causam aderências e provocam dor. E nesse tratamento já fazemos a liberação das aderências usando as técnicas faciais. </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item className={classes.item} value="reset-password">
                        <Accordion.Control>Tenho de Artrose e bicos de papagaio?</Accordion.Control>
                        <Accordion.Panel>Artrose e bicos de papagaio são sinônimos, é a mesma coisa. Basicamente isso é um processo degenerativo natural pra toda pessoa.
                            <br></br>
                            Os sinais aparecem mais depois da quarta década de vida e podem se ter casos mais graves e outros nem tanto.
                            <br></br>
                            Isso ocorre porque a área afetada pela Artrose tem um movimento excessivo, causando exaustão e processos de calcificação na região.
                            <br></br>
                            E isso só acontece porque há áreas da coluna vertebral do indivíduo está preso ou bloqueado, tornando a região da Artrose uma articulação hipermovel e sem estabilidade.</Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item className={classes.item} value="reset-password">
                        <Accordion.Control>Tenho Bursite e tendinites, posso fazer?</Accordion.Control>
                        <Accordion.Panel>Sim. Esse tratamento ajuda a corrigir os movimentos das articulações que estão sobrecarregadas seja pelo trabalho ou má postura.
                            <br></br>
                            Os tendões e as bursas inflamadas são muito comuns aparecer nos ombros, cotovelos (epicondilite) ou ainda nos quadris (bacia / Pelve).
                            <br></br>
                            Descomprimir a articulação e realizar técnicas para lubrificar as estruturas das cartilagens ajuda nutrir toda a estrutura.
                            <br></br>
                            Melhor ainda é encontrar o nervo que inerva determinado tendão ou bursa para descomprimir toda sua passagem e facilitar o sangue chegar nessa área através das artérias com bom oxigênio e nutriente e ainda permitir que as veias estejam dilatadas para drenar a inflamação do tendão ou da bursa.</Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item className={classes.item} value="reset-password">
                        <Accordion.Control>Idade avançadas, pode fazer?</Accordion.Control>
                        <Accordion.Panel>Sim, pode ser realizado sem nenhum problema.<br></br>
                            A depender da idade, das patologias associadas, distúrbios metabólicas deve haver um cuidado essencial com técnicas de manipulação (os estalos).
                            <br></br>
                            Ou até mesmo com a pressão excessiva sobre o corpo com a massagem.
                            <br></br>
                            Os idosos têm maior fragilidade dos vasos sanguíneo superficiais, por isso, o cuidado para não romper esses vasos e deixar as famosas “nódoas negras”, que são as manchas rochas sobre a pele.</Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item className={classes.item} value="reset-password">
                        <Accordion.Control>Cirurgia do quadril, pode fazer?</Accordion.Control>
                        <Accordion.Panel>Sim, pode ser feito sem nenhum problema. Só devemos levar em consideração o tempo de cirurgia para respeitar a cicatrização do tecido. As mais comuns realizadas são as próteses de quadril parcial ou total ou ainda fracturas ocorridas no passado. Esse tratamento em liberar as tensões da camada profunda da região e promover mais mobilidade dos tecidos moles.</Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item className={classes.item} value="reset-password">
                        <Accordion.Control>Estou com infecção, posso fazer?</Accordion.Control>
                        <Accordion.Panel>Não, casos infecciosos são contra indicados para esse tratamento. Principalmente se em períodos de febre, tosse excessiva ou outros sintomas como diarreias não se deve fazer em nenhuma hipótese.</Accordion.Panel>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </div>
    );

}

export default Faq