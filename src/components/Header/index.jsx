import df from "../../assets/img/df.png";
import { HeaderContainer } from "./HeaderStyled";

export function Header() {
  return (
    <>
      <HeaderContainer>
        <div>
          <img src={df} alt="Brasão do Distrito Federal" />
          <h1>Blibioteca Érico Verissimo</h1>
        </div>
      </HeaderContainer>
    </>
  );
}
