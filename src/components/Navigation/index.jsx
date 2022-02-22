import { Header,
Links,
Menu,
Barra } from './style';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../assets/LOGO-01.png'

export function Navigation(){
    return(
        <Header>
                <Image 
                    src={logo}
                    alt="Logo Sys Medical"
                    width={500}
                    height={105}
                />
                {/* <ModoEscuro>
                    <LabelTog for="tog">Modo escuro</LabelTog>
                    <ToggleEscuro type="checkbox" name="checkbox" id="tog" />
                </ModoEscuro> */}

                <Menu>
                    <Link href="/" passHref>
                      <Links>Home</Links>
                    </Link>
                    <Barra>|</Barra>
                    <Link href="/sobre" passHref>
                        <Links>Sobre nós</Links>
                    </Link>
                    <Barra>|</Barra>
                    <Link href="/" passHref>
                        <Links>Serviços</Links>
                    </Link>
                    <Barra>|</Barra>
                    <Link href="/" passHref>
                        <Links>Contato</Links>
                    </Link>
                </Menu>
        </Header>
    )
}