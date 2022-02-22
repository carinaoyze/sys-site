import { Container, 
    MissaoVisaoValores, 
    Missao, 
    MissaoImagem,
    MissaoTitulo,
    MissaoTexto,
    Lista,
    ListaUm,
    BordaTexto,
    BordaCima,
    Borda,
    TextoBorda,
    BordaBaixo,
    TextoBordaH1,
    TextoBordaP,
    EquipeTitulo,
    EquipeTexto,
    Equipe,
    Socios,
    Colaboradores,
    ColaboradoresTitulo} from './style';
import Image from 'next/image';
import MissaoImg from '../../assets/mission.png';    
import VisaoImg from '../../assets/vision.png'; 
import ValorImg from '../../assets/value.png'; 
import Borda1 from '../../assets/LOGOP1.png'; 
import Borda2 from '../../assets/LOGOP2.png'; 
import Borda3 from '../../assets/LOGOP3.png'; 
import Borda4 from '../../assets/LOGOP4.png'; 


    export function AboutUs(){
        return(
            <>
                <Container>
                    <MissaoVisaoValores>
                        <Missao>
                            <MissaoImagem>
                                <Image 
                                    src={MissaoImg}
                                    width= {110}
                                    height={110}
                                />
                                <MissaoTitulo>Missão</MissaoTitulo>
                            </MissaoImagem>
                            <MissaoTexto>Proporcionar um serviço de qualidade e transparência nas áreas de consultoria, manutenção, locação e serviços relativos à equipamentos médicohospitalares.</MissaoTexto>
                        </Missao>
                        <Missao>
                            <MissaoImagem>
                                <Image 
                                    src={VisaoImg}
                                    width= {80}
                                    height={80}
                                />
                                <MissaoTitulo>Visão</MissaoTitulo>
                            </MissaoImagem>
                            <MissaoTexto>Ser referência nacional na área de serviços em equipamentos médicohospitalares.</MissaoTexto>
                        </Missao>
                        <Missao>
                            <MissaoImagem>
                                <Image 
                                    src={ValorImg}
                                    width= {80}
                                    height={80}
                                />
                                <MissaoTitulo>Valores</MissaoTitulo>
                            </MissaoImagem>
                            <MissaoTexto>
                                <Lista>
                                    <ListaUm>
                                        <ListaUm>Ética</ListaUm>
                                        <ListaUm>Resolutividade Social</ListaUm>
                                    </ListaUm>
                                    <ListaUm>
                                        <ListaUm>Disponibilidade</ListaUm>
                                        <ListaUm>Responsabilidade Social</ListaUm>
                                    </ListaUm>
                                    <ListaUm>
                                        <ListaUm>Honestidade</ListaUm>
                                        <ListaUm>Agilidade</ListaUm>
                                    </ListaUm>
                                </Lista>
                            </MissaoTexto>
                        </Missao>
                    </MissaoVisaoValores>
                    <BordaTexto>
                        <BordaCima>
                            <Borda>
                                <Image src={Borda1} width= {120}
                                    height={120} />
                            </Borda>
                            <Borda>
                                <Image src={Borda2} width= {120}
                                    height={120}/>
                            </Borda>
                        </BordaCima>
                        <TextoBorda>
                            <TextoBordaH1>Qualidade em tudo o que faz</TextoBordaH1><br />
                            <TextoBordaP>Empresa matriz localizada em Mato Grosso do Sul, atualmente o grupo de empresas possui bases 
                                instaladas em Cuiabá MT, Sinop-MT e Campo Grande MS. Contamos com uma estrutura e logística para atender 
                                plantões 24h por dia, sistema on-line de registro de chamados e estoque de peças amplo para garatir alta 
                                resolutividade.<br /><br />
                            </TextoBordaP>
                            <TextoBordaH1>Respeito e Responsabilidade</TextoBordaH1><br />
                            <TextoBordaP>A busca pela segurança e a visão holística no trabalho com equipamentos de imagens médicas 
                                fez da SYS MEDICAL uma empresa reconhecida e respeitada no mercado nacional. 
                            </TextoBordaP>
                        </TextoBorda>
                        
                        <BordaBaixo>
                            <Borda>
                                <Image src={Borda3} width= {120}
                                    height={120} />
                            </Borda>
                            <Borda>
                                <Image src={Borda4} width= {120}
                                    height={120}/>
                            </Borda>
                        </BordaBaixo>
                    </BordaTexto>
                </Container>
               
                <Equipe>
                    <EquipeTitulo>
                        Equipe
                    </EquipeTitulo>
                    <Socios>                    
                        <EquipeTexto>Vitor Hugo Damas Pareja</EquipeTexto>
                        <EquipeTexto>Wélton Dias Ulkovski</EquipeTexto>
                        <ColaboradoresTitulo>Sócios</ColaboradoresTitulo>
                    </Socios>
                    <Colaboradores>
                        <EquipeTexto>Renan</EquipeTexto>
                        <EquipeTexto>Willian</EquipeTexto>
                        <EquipeTexto>Paulo</EquipeTexto>
                        <EquipeTexto>Pedro</EquipeTexto>
                        <EquipeTexto>Cardoso</EquipeTexto>
                        <ColaboradoresTitulo>Colaboradores</ColaboradoresTitulo>
                    </Colaboradores>
                </Equipe>
            </>
        )
    }